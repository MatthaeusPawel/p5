
function distanceSquare(x,y, w, v){
  return (x -w)**2 + (y - v)**2
}

function norm_squared(x,y){ return distanceSquare(x,y,0,0); }


function drawPongs(){
  stroke(2)
  leftBuffer.fill(255, 255, 255)
  leftBuffer.rect(stickLeft.posX, stickLeft.posY, stickLeft.width, stickLeft.height)
  leftBuffer.rect(stickRight.posX, stickRight.posY, stickRight.width, stickRight.height)

  stroke(0)
  leftBuffer.fill(255,255,255)
  leftBuffer.line(900,0, 900, 500)
}


function updatePong(pong, direction){
  pong.posY += direction

  pong.posY = constrain(pong.posY, 0, gameHeight-pong.height)
}

function trackBall()
{
  stickLeft.posY = ball.pos[1] - stickLeft.height/2;
  stickLeft.posY = constrain(stickLeft.posY, 0, gameHeight-stickLeft.height)
  //stickRight.posY = ball.pos[1] - stickRight.height/2;
  //stickRight.posY = constrain(stickRight.posY, 0, gameHeight-stickRight.height)
}


function drawBall(){
  leftBuffer.fill(255, 255, 255)

  for (let k = 0; k < ballArray.length; k+=2)
    leftBuffer.ellipse(
      ballArray[k][0],
      ballArray[k][1],
      (2 * ball.radius) / (k===ballArray.length-1? 1: 3-k/5)
    );
}

function resetBall(){
  if ((ball.pos[0] < 0) || (ball.pos[0] > gameWidth)) {
    ball.pos[0] = gameWidth / 2;
  }

}

function updateBallArray(){
  for(let k = 0; k < ballArray.length-1; ++k)
    ballArray[k] = Array.from(ballArray[k+1]);
  ballArray[ballArray.length -1] = ball.pos
}

function updateBall(){
  const puffer =0.3 *ball.radius;
  const speed = 10;


  ball.pos[0] += speed*ball.direction[0]
  ball.pos[1] += speed*ball.direction[1]
  updateBallArray()

  if ( ball.pos[1] + speed*ball.direction[1] - ball.radius < 0 || ball.pos[1] +speed*ball.direction[1] + ball.radius > gameHeight)
    ball.direction[1] = -ball.direction[1]

  if (
    ball.pos[0] + speed*ball.direction[0] - ball.radius < stickLeft.posX &&
    ball.pos[0] + ball.radius > stickLeft.posX &&
    ball.pos[1] > stickLeft.posY &&
    ball.pos[1] < stickLeft.posY + stickLeft.height
  ) {
    ball.direction[0] = -ball.direction[0];
    ball.direction[1] += (ball.pos[1] - (stickLeft.posY + stickLeft.height / 2))/stickLeft.height;
  }

  if (
    ball.pos[0] + speed*ball.direction[0] + ball.radius > stickRight.posX &&
    ball.pos[0] + ball.radius < stickRight.posX + puffer &&
    ball.pos[1] > stickRight.posY &&
    ball.pos[1] < stickRight.posY + stickRight.height
  ) {
    ball.direction[0] = -ball.direction[0];
    ball.direction[1] += (ball.pos[1] - (stickRight.posY + stickRight.height / 2))/stickRight.height;
  }
  ball.direction[1] = constrain(ball.direction[1], -1, 1);

  resetBall()
}
