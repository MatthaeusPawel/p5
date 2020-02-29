
function distanceSquare(x,y, w, v){
  return (x -w)**2 + (y - v)**2
}

function norm_squared(x,y){ return distanceSquare(x,y,0,0); }


function drawBall(){
  leftBuffer.fill(255, 255, 255)
  leftBuffer.stroke(0);
  leftBuffer.strokeWeight(4);

  for (let k = 0; k < ballArray.length; k+=2)
    leftBuffer.ellipse(
      ...ballArray[k],
      (2 * ball.radius) / (k===ballArray.length-1? 1: 3-k/5)
    );
}

function resetBall(){
  ball.pos[0] = gameWidth / 2;
  ball.speed = [0,0]

}

function updateBallArray(){
  for(let k = 0; k < ballArray.length-1; ++k)
    ballArray[k] = Array.from(ballArray[k+1]);
  ballArray[ballArray.length -1] = ball.pos
}

function updateAcceleration(){
  ;
}

function updateSpeed(){
  ball.speed = ball.speed.map((x,i) => airResistance*(x+gravity[i]))
}

function updatePosition(){
  if (ball.pos[1] +ball.radius+ ball.speed[1] > rectPosY && ball.speed[1] > 0)
  {
    ball.speed[1] *= -0.8;
    if (ball.speed[1] > -1)
      ball.speed[1] = 0
  }
  for(k = 0; k < 2; ++k)
    ball.pos[k] += ball.speed[k];

  
  ball.speed[0]+=direction;
}


function updateBall(){

  
  updateAcceleration()
  updateSpeed()
  updatePosition()
  updateBallArray();
  if (ball.pos[0] < 0 || ball.pos[0] > gameWidth) resetBall();
}
