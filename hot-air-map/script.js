"use strict";




function loadImage(url, callback) {
  var image = new Image();
  image.src = url;
  image.onload = callback;
  return image;
}

function loadImages(urls, callback) {
  var images = [];
  var imagesToLoad = urls.length;

  // Called each time an image finished
  // loading.
  var onImageLoad = function() {
    --imagesToLoad;
    // If all the images are loaded call the callback.
    if (imagesToLoad === 0) {
      callback(images);
    }
  };

  for (var ii = 0; ii < imagesToLoad; ++ii) {
    var image = loadImage(urls[ii], onImageLoad);
    images.push(image);
  }
}

function main() {
  loadImages([
    "desert.jpg",
    "map.jpg",
  ], render);
}

function render(images) {
  const canvas = document.querySelector(".js-canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  const program = webglUtils.createProgramFromScripts(gl, [".js-vertex-shader", `.js-fragment-shader`]);
  // gl.useProgram(program);

  // переменные
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
  const matrixLocation = gl.getUniformLocation(program, "u_matrix");
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const mapLocation = gl.getUniformLocation(program, 'u_map');
  const textureLocation = gl.getUniformLocation(program, "u_texture");

  // position buffer
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  setRectangle(gl, 0, 0, images[0].width, images[0].height);

  // texture

  // texture coords buffer
  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  setRectangle(gl, 0, 0, 1, 1);

  const textures = images.map(img => {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    // загрузить в текстуру
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

    return texture
  });


  draw();

  function draw() {
    canvas.width = images[0].width;
    canvas.height = images[0].height;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    //position
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // texture position
    gl.enableVertexAttribArray(texcoordLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    // matrix
    const matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
    gl.uniformMatrix4fv(matrixLocation, false, matrix);

    // textures
    gl.uniform1i(textureLocation, 0);
    gl.uniform1i(mapLocation, 1);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, textures[1]);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  const fps = 60;
  const frameDuration = 1000 / fps;
  let time = 0;
  let lastTime = 0;
  requestAnimationFrame(renderAnimation)

  function renderAnimation(elapsed) {
    const delta = elapsed - lastTime;
    lastTime = elapsed;

    const step = delta / frameDuration;

    time += step;
    gl.uniform1f(timeLocation, time);

    draw();
    requestAnimationFrame(renderAnimation);
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

main();



// let step = 0;
// const next = document.querySelector('.js-next');
// const prev = document.querySelector('.js-prev');

// next.addEventListener('click', function() {
//   step++;
//   main_();
  
//   if(step > 3)
//     step = 3;
// });

// prev.addEventListener('click', function() {
//   step--;
//   main_();

//   if(step < 0)
//     step = 0;
// });
