"use strict";
function main() {
    var image = new Image();
    image.src = "dinozavr.jpg";
    image.onload = function() {
        render(image);
    };
}

function render(image) {
    const canvas = document.querySelector(".js-canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }

    const program = webglUtils.createProgramFromScripts(gl, [".js-vertex-shader-2d", ".js-fragment-shader-2d"]);
    
    // ссылки на переменные
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const texcoordLocation = gl.getAttribLocation(program, "a_texCoord");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // прямоугольник размером с изображение
    setRectangle(gl, 0, 0, image.width, image.height);

    // координаты текстуры для изображения
    const texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        0.0,  0.0,
        1.0,  0.0,
        0.0,  1.0,
        0.0,  1.0,
        1.0,  0.0,
        1.0,  1.0,
    ]), gl.STATIC_DRAW);

    function createAndSetupTexture(gl) {
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
    
        // можем рендерить любой размер изображения
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        return texture;
    }

    const originalImageTexture = createAndSetupTexture(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    // создаем две текстуры и прикрепляем их 
    const textures = [];
    const framebuffers = [];
    for (let i = 0; i < 2; i++) {
        const texture = createAndSetupTexture(gl);
        textures.push(texture);

        // делаем текстуру размером с изображение
        gl.texImage2D(
            gl.TEXTURE_2D, 0, gl.RGBA, image.width, image.height, 0,
            gl.RGBA, gl.UNSIGNED_BYTE, null);
        
        // создаем фреймбуфер
        const fbo = gl.createFramebuffer();
        framebuffers.push(fbo);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

        // прикрепляем к нему текстуру
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    }

    // uniforms
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const textureSizeLocation = gl.getUniformLocation(program, 'u_textureSize');
    const kernelLocation = gl.getUniformLocation(program, 'u_kernel[0]');
    const kernelWeightLocation = gl.getUniformLocation(program, 'u_kernelWeight');
    const flipYLocation = gl.getUniformLocation(program, 'u_flipY');

    const kernels = {
        normal: [
          0, 0, 0,
          0, 1, 0,
          0, 0, 0
        ],
        gaussianBlur: [
          0.045, 0.122, 0.045,
          0.122, 0.332, 0.122,
          0.045, 0.122, 0.045
        ],
        gaussianBlur2: [
          1, 2, 1,
          2, 4, 2,
          1, 2, 1
        ],
        gaussianBlur3: [
          0, 1, 0,
          1, 1, 1,
          0, 1, 0
        ],
        unsharpen: [
          -1, -1, -1,
          -1,  9, -1,
          -1, -1, -1
        ],
        sharpness: [
           0,-1, 0,
          -1, 5,-1,
           0,-1, 0
        ],
        sharpen: [
           -1, -1, -1,
           -1, 16, -1,
           -1, -1, -1
        ],
        edgeDetect: [
           -0.125, -0.125, -0.125,
           -0.125,  1,     -0.125,
           -0.125, -0.125, -0.125
        ],
        edgeDetect2: [
           -1, -1, -1,
           -1,  8, -1,
           -1, -1, -1
        ],
        edgeDetect3: [
           -5, 0, 0,
            0, 0, 0,
            0, 0, 5
        ],
        edgeDetect4: [
           -1, -1, -1,
            0,  0,  0,
            1,  1,  1
        ],
        edgeDetect5: [
           -1, -1, -1,
            2,  2,  2,
           -1, -1, -1
        ],
        edgeDetect6: [
           -5, -5, -5,
           -5, 39, -5,
           -5, -5, -5
        ],
        sobelHorizontal: [
            1,  2,  1,
            0,  0,  0,
           -1, -2, -1
        ],
        sobelVertical: [
            1,  0, -1,
            2,  0, -2,
            1,  0, -1
        ],
        previtHorizontal: [
            1,  1,  1,
            0,  0,  0,
           -1, -1, -1
        ],
        previtVertical: [
            1,  0, -1,
            1,  0, -1,
            1,  0, -1
        ],
        boxBlur: [
            0.111, 0.111, 0.111,
            0.111, 0.111, 0.111,
            0.111, 0.111, 0.111
        ],
        triangleBlur: [
            0.0625, 0.125, 0.0625,
            0.125,  0.25,  0.125,
            0.0625, 0.125, 0.0625
        ],
        emboss: [
           -2, -1,  0,
           -1,  1,  1,
            0,  1,  2
        ]
    };

    const effects = [
        { name: "gaussianBlur3", on: true },
        { name: "gaussianBlur3", on: true },
        { name: "gaussianBlur3", on: true },
        { name: "sharpness", },
        { name: "sharpness", },
        { name: "sharpness", },
        { name: "sharpen", },
        { name: "sharpen", },
        { name: "sharpen", },
        { name: "unsharpen", },
        { name: "unsharpen", },
        { name: "unsharpen", },
        { name: "emboss", on: true },
        { name: "edgeDetect", },
        { name: "edgeDetect", },
        { name: "edgeDetect3", },
        { name: "edgeDetect3", },
    ];

    // ui
    const list = document.querySelector('.js-list');
    effects.forEach(effect => {
        const li = document.createElement('li');
        const check = document.createElement('input');
        check.type = 'checkbox';
        li.textContent = check.value = effect.name;
        if(effect.on) check.checked = true;
        check.onchange = drawEffects;
        li.append(check);
        list.append(li);
    });

    drawEffects();

    function computeKernelWeight(kernel) {
        const weight = kernel.reduce((prev, curr) => prev + curr);

        return weight <= 0 ? 1 : weight;
    }

    function drawEffects(name) {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        // очищаем канвас
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);
        gl.enableVertexAttribArray(positionLocation);

        // ARRAY_BUFFER = positionLocation
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // как читать из массива
        var size = 2;         
        var type = gl.FLOAT;   
        var normalize = false; 
        var stride = 0;        
        var offset = 0;        
        gl.vertexAttribPointer(
            positionLocation, size, type, normalize, stride, offset);

            
        // переключаемся на texCoord
        gl.enableVertexAttribArray(texcoordLocation);

        // ARRAY_BUFFER = texcoordLocation
        gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
        var size = 2;          
        var type = gl.FLOAT;   
        var normalize = false; 
        var stride = 0;        
        var offset = 0;        
        gl.vertexAttribPointer(
            texcoordLocation, size, type, normalize, stride, offset);

        // размер изображения
        gl.uniform2f(textureSizeLocation, image.width, image.height);

        // начинаем с оригинального
        gl.bindTexture(gl.TEXTURE_2D, originalImageTexture);
        // не переворичиваем
        gl.uniform1f(flipYLocation, 1);

        // цикл для каждого эффекта
        let count = 0;
        Array.from(list.children).forEach(item => {
            const checkbox = item.children[0];
            if(!checkbox.checked) return

            // устанавливаем фреймбуфер
            setFramebuffer(framebuffers[count % 2], image.width, image.height);
            drawWithKernel(checkbox.value);
            gl.bindTexture(gl.TEXTURE_2D, textures[count % 2]);

            count++
        });

        // рисуем в канвас
        gl.uniform1f(flipYLocation, -1);
        setFramebuffer(null, gl.canvas.width, gl.canvas.height);
        drawWithKernel('normal');
    }

    function setFramebuffer(fbo, width, height) {
        // устанавливаем фреймбуфер в который будем рендерить
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

        // сообщаем шейдеру разрешение фреймбуфера
        gl.uniform2f(resolutionLocation, width, height);

        gl.viewport(0, 0, width, height);
    }

    function drawWithKernel(name) {
        // устанавливаем ядро и его вес
        gl.uniform1fv(kernelLocation, kernels[name]);
        gl.uniform1f(kernelWeightLocation, computeKernelWeight(kernels[name]));

        // отрисовываем
        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        gl.drawArrays(primitiveType, offset, count);
    }   
}

function setRectangle(gl, x, y, width, height) {
  var x1 = x;
  var x2 = x + width;
  var y1 = y;
  var y2 = y + height;
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
