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
    "desert-map-2.jpg",
  ], render);
}


function render(images) {
  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  var canvas = document.querySelector(".js-canvas");
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  // setup GLSL program
  var program = webglUtils.createProgramFromScripts(gl, [".js-vertex-shader", ".js-fragment-shader"]);
  gl.useProgram(program);

  // look up where the vertex data needs to go.
  var positionLocation = gl.getAttribLocation(program, "a_position");
  var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");

  // Create a position buffer.
  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  setRectangle(gl, 0, 0, images[0].width, images[0].height);

  // Create a buffer for texture coords
  var texcoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
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

  // creates a texture info { width: w, height: h, texture: tex }
  // The texture will start with 1x1 pixels and be updated
  // when the image has loaded
  // function loadImageAndCreateTextureInfo(url) {
  //   var tex = gl.createTexture();
  //   gl.bindTexture(gl.TEXTURE_2D, tex);
  //   // Fill the texture with a 1x1 blue pixel.
  //   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
  //                 new Uint8Array([0, 0, 255, 255]));

  //   // let's assume all images are not a power of 2
  //   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  //   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  //   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  //   var textureInfo = {
  //     width: 1,   // we don't know the size until it loads
  //     height: 1,
  //     texture: tex,
  //   };
  //   var img = new Image();
  //   img.addEventListener('load', function() {
  //     textureInfo.width = img.width;
  //     textureInfo.height = img.height;

  //     gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
  //     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  //   });
  //   img.src = url;

  //   return textureInfo;
  // }

  // var textureInfos = [
  //   loadImageAndCreateTextureInfo('gny.jpg'),
  // ];

  // const map = loadImageAndCreateTextureInfo('map.jpg');

  // var drawInfos = [];
  // var numToDraw = 1;
  // var speed = 60;
  // for (var ii = 0; ii < numToDraw; ++ii) {
  //   var drawInfo = {
  //     x: Math.random() * gl.canvas.width,
  //     y: Math.random() * gl.canvas.height,
  //     dx: Math.random() > 0.5 ? -1 : 1,
  //     dy: Math.random() > 0.5 ? -1 : 1,
  //     textureInfo: textureInfos[Math.random() * textureInfos.length | 0],
  //   };
  //   drawInfos.push(drawInfo);
  // }

  // lookup uniforms
  var matrixLocation = gl.getUniformLocation(program, "u_matrix");
  var textureLocation = gl.getUniformLocation(program, "u_texture");
  const mapLocation = gl.getUniformLocation(program, "u_map");
  const timeLocation = gl.getUniformLocation(program, 'u_time');
  const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

  function draw() {
    // webglUtils.resizeCanvasToDisplaySize(gl.canvas);
    canvas.width = images[0].width;
    canvas.height = images[0].height;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    // position
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // position
    gl.enableVertexAttribArray(texcoordLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    // matrix
    var matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
    // matrix = m4.translate(matrix, dstX, dstY, 0);
    // matrix = m4.scale(matrix, texWidth, texHeight, 1);
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



  document.addEventListener('mousemove', function(e) {
    gl.uniform2f(mouseLocation, e.clientX/canvas.width - 0.5, e.clientY/canvas.height - 0.5);
  });








  const fps = 60;
  const frameDuration = 1000 / fps;
  let time = 0;
  let lastTime = 0;
  function render(elapsed) {
    const delta = elapsed - lastTime;
    lastTime = elapsed;

    const step = delta / frameDuration;

    time += step;
    gl.uniform1f(timeLocation, time);

    draw();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // // Unlike images, textures do not have a width and height associated
  // // with them so we'll pass in the width and height of the texture
  // function drawImage(tex, texWidth, texHeight, dstX, dstY) {
  //   gl.bindTexture(gl.TEXTURE_2D, tex);

  //   // Tell WebGL to use our shader program pair
  //   gl.useProgram(program);

  //   // Setup the attributes to pull data from our buffers
  //   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  //   gl.enableVertexAttribArray(positionLocation);
  //   gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  //   gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
  //   gl.enableVertexAttribArray(texcoordLocation);
  //   gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

  //   // this matrix will convert from pixels to clip space
  //   var matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);

  //   // this matrix will translate our quad to dstX, dstY
  //   matrix = m4.translate(matrix, dstX, dstY, 0);

  //   // this matrix will scale our 1 unit quad
  //   // from 1 unit to texWidth, texHeight units
  //   matrix = m4.scale(matrix, texWidth, texHeight, 1);

  //   // Set the matrix.
  //   gl.uniformMatrix4fv(matrixLocation, false, matrix);

  //   // Tell the shader to get the texture from texture unit 0
  //   gl.uniform1i(textureLocation, 0);
  //   gl.uniform1i(mapLocation, 1);

  //   // draw the quad (2 triangles, 6 vertices)
  //   gl.drawArrays(gl.TRIANGLES, 0, 6);
  // }

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
