"use strict";

main_();

function main_() {
  const image = new Image();
  image.src = './desert.jpg';
  image.onload = function() {
    render_(image);
  }
}

function render_(image) {
  const canvas = document.querySelector(".js-canvas");
  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  const program = webglUtils.createProgramFromScripts(gl, [".js-vertex-shader", `.js-fragment-shader[data-step="${demoStep}"]`]);
  // gl.useProgram(program);

  // vertex-переменные
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
  const matrixLocation = gl.getUniformLocation(program, "u_matrix");
  const timeLocation = gl.getUniformLocation(program, 'u_time');

  // shader-переменные
  const textureLocation = gl.getUniformLocation(program, "u_texture");


  // position buffer
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  setRectangle(gl, 0, 0, image.width, image.height);

  // texture
  // texture coords buffer
  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  setRectangle(gl, 0, 0, 1, 1);

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // загрузить в текстуру
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

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
    gl.enableVertexAttribArray(texcoordLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

    // matrix
    const matrix = m4.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
    gl.uniformMatrix4fv(matrixLocation, false, matrix);

    // texture
    gl.uniform1i(textureLocation, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  const fps = 60;
  const frameDuration = 1000 / fps;
  let time = 0;
  let lastTime = 0;
  if(demoStep === 3) {
    requestAnimationFrame(renderAnimation)
  }

  function renderAnimation(elapsed) {
    const delta = elapsed - lastTime;
    lastTime = elapsed;

    const step = delta / frameDuration;

    time += step;
    gl.uniform1f(timeLocation, time);

    draw();
    if(demoStep === 3)
      requestAnimationFrame(renderAnimation);
  }

}



// requestAnimationFrame(render_);

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



let demoStep = 0;
const next = document.querySelector('.js-next');
const prev = document.querySelector('.js-prev');

next.addEventListener('click', function() {
  demoStep++;
  main_();
  checkButtonActivity();
  changeTitle();
});

prev.addEventListener('click', function() {
  demoStep--;
  main_();
  checkButtonActivity();
  changeTitle();
});

checkButtonActivity();

function checkButtonActivity() {
  switch(demoStep) {
    // case -1:
    case 0:
      next.classList.remove('_disabled');
      prev.classList.add('_disabled');
      break
    case 1:
      prev.classList.remove('_disabled');
      break
    case 2:
      next.classList.remove('_disabled');
      break
    case 3:
      next.classList.add('_disabled')
      break
  }
}
const title = document.querySelector('.js-title');
function changeTitle() {
  title.textContent = title.dataset[`step-${demoStep}`]
}
