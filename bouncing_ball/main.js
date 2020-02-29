

const gameHeight = 500;
const gameWidth = 1000;

const highscoreHeight = 500;
const highscoreWidth = 1000;



let ball = {
  pos: [gameWidth/2, gameHeight/2],
  speed: [0,1],
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

let leftBuffer;
let rightBuffer;

let gravity = [0,.20];
let direction = 0;
let left = 0;
let right = 0;

const airResistance = 1;

const rectPosX = -1;
const rectPosY = Math.floor(0.9 * gameHeight);
const rectHeight = gameHeight - rectPosY;
const rectWidth = 2*gameHeight -rectPosX;

function drawGround(){
  leftBuffer.fill(0, 255, 255)
  leftBuffer.stroke(0);
  leftBuffer.strokeWeight(4);
  leftBuffer.rect(rectPosX, rectPosY, rectWidth, rectHeight);
}

function setup() {
  createCanvas(gameWidth + highscoreWidth, Math.max(highscoreHeight, gameHeight));

  leftBuffer = createGraphics(gameWidth, gameHeight);
  rightBuffer = createGraphics(highscoreWidth, highscoreHeight);
}


function keyReleased() {
  switch (keyCode) {
    case LEFT_ARROW:
      left = 0
      break;
    case RIGHT_ARROW:
      right = 0
      break;
  }
}
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      left += 1
      break;
    case RIGHT_ARROW:
      right += 1
      break;
  }
}

function keyDown(){
}

function drawLeftBuffer(){
  leftBuffer.background(255);

  leftBuffer.textFont('Georgia');
  leftBuffer.textSize(44);
  leftBuffer.text(
    "Height:" + Math.floor((rectPosY - ball.pos[1]) / 20),
    10,
    40
  );
  leftBuffer.text("Speed:" + Math.floor(Math.sqrt(norm_squared(...ball.speed))), 10, 80);
  leftBuffer.text(4, 10, 120);
  updateBall();
  drawGround();
  drawBall();
}

function drawRightBuffer(){
  rightBuffer.background(255, 255,255, 255)
}

function draw() {

  direction = right - left;
  drawLeftBuffer();
  drawRightBuffer();

  image(leftBuffer, 0,0 );
  image(rightBuffer, gameWidth, 0);
}
