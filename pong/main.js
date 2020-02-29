

const gameHeight = 500;
const gameWidth = 1000;

const highscoreWidth = Math.floor(gameWidth / 2)
const highscoreHeight = gameHeight



const pongHeight = 100;
const pongWidth = 10;

let ball = {
  pos: [gameWidth/2, gameHeight/2],
  direction: [1,0],
  radius: 10
}

let ballArray = [
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos),
  Array.from(ball.pos)
];

let stickLeft = {
  posX: Math.floor(gameWidth/10),
  posY: 0,
  height: pongHeight,
  width: pongWidth 
}

let stickRight = {
  posX: Math.floor(9*gameWidth/10),
  posY: 100,
  height: pongHeight,
  width: pongWidth 
}

let leftBuffer;
let rightBuffer;

function setup() {
  createCanvas(gameWidth + highscoreWidth, Math.max(highscoreHeight, gameHeight));

  leftBuffer = createGraphics(gameWidth, gameHeight);
  rightBuffer = createGraphics(highscoreWidth, highscoreHeight);
}


let up = 0;
let down = 0;
const speed = 10;
let direction = up - down;

function keyReleased() {
  switch (keyCode) {
    case UP_ARROW:
      up = 0
      break;
    case DOWN_ARROW:
      down = 0
      break;
  }
}
function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      up -= 1
      break;
    case DOWN_ARROW:
      down += 1
      break;
  }
}

function keyDown(){
}

function drawLeftBuffer(){
  leftBuffer.background(0);

  updatePong(stickRight, direction);
  updateBall();

  if (true)
    trackBall();

  drawPongs();
  drawBall();
}

function drawRightBuffer(){
  rightBuffer.background(255, 255,255, 255)
}

function draw() {


  drawLeftBuffer();
  drawRightBuffer();

  direction = (down+up)*speed

  image(leftBuffer, 0,0 );
  image(rightBuffer, gameWidth, 0);
}
