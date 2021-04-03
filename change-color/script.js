'use strict';

function loadImage(url, callback, vertex, fragment) {
    const image = new Image();
    image.src = url;
    image.onload = () => callback(image, vertex, fragment);
    return image;
}

document.addEventListener('click', function(e) {
    const target = e.target.closest('.js-render');
    if(!target) return

    const vertexSelector = '.js-vertex-shader';
    let fragmentSelector = `.js-fragment-shader[data-type="${target.dataset.type}"]`;

    main(vertexSelector, fragmentSelector)
});

function main(vertex, fragment) {
    loadImage('../common/img/dog.png', render, vertex, fragment);
}

function render(image, vertex, fragment) {
    const canvas = document.querySelector('.js-canvas');
    const gl = canvas.getContext('webgl');
    if(!gl) return

    const program = webglUtils.createProgramFromScripts(gl, [vertex, fragment]);
    // gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');

    // position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    setRectangle(gl, 0, 0, image.width, image.height);

    // texture coords buffer
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    setRectangle(gl, 0, 0, 1, 1);

    // create textures
    // const textures = images.map(img => {
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        // загрузить в текстуру
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

        // return texture
    // });

    const matrixLocation = gl.getUniformLocation(program, 'u_matrix');
    const textureLocation = gl.getUniformLocation(program, 'u_texture');

    draw();
    function draw() {
        canvas.width = image.width;
        canvas.height = image.height;

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);

        //position
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // texture position
        gl.enableVertexAttribArray(texCoordLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

        // matrix
        const matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
        gl.uniformMatrix4fv(matrixLocation, false, matrix);

        // texture
        gl.uniform1i(textureLocation, 0);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
}

function setRectangle(gl, x, y, width, height) {
    const x1 = x;
    const x2 = x + width;
    const y1 = y;
    const y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
       x1, y1,
       x2, y1,
       x1, y2,
       x1, y2,
       x2, y1,
       x2, y2,
    ]), gl.STATIC_DRAW);
}

