

const game_height = 1000;
const game_width = 1000;

const highscore_width = Math.floor(game_width / 2)
const highscore_height = game_height


var bodies = []

const gravityConst = 2

var sun = {
  name: "sun",
  position_x: Math.floor(game_width/2),
  position_y: Math.floor(game_height/2),
  speed_x: 0,
  speed_y: 0,
  size: Math.floor(game_width/6),
  mass: 500
}

var mars = {
  name: "mars",
  position_x: sun.position_x,
  position_y: Math.floor(200),
  speed_x: 2,
  speed_y: 0,
  size: Math.floor(10),
  mass: 500
}

function setup() {
  createCanvas(game_width + highscore_width, Math.max(highscore_height, game_height));

  bodies.push(mars)
  bodies.push(sun)

  leftBuffer = createGraphics(game_width, game_height)
  rightBuffer = createGraphics(highscore_width, highscore_height)
}



function keyPressed() {
}


function drawLeftBuffer(){
  background(255)
  let F = []
  let FMagnitude = 0;
  let FNormed = []
  let newPosX = 0
  let newPosY = 0

  for (var k = 0; k < bodies.length; ++k) {
    current = bodies[k]

    
    F = compute_force(current, bodies)

    current.speed_x += F[0] / current.mass
    current.speed_y += F[1] / current.mass

    newPosX = current.position_x + current.speed_x;
    newPosY = current.position_y + current.speed_y;


    //line(current.position_x, current.position_y, newPosX+10*current.speed_x, newPosY+10*current.speed_y)

    current.position_x = newPosX;
    current.position_y = newPosY;

    ellipse(current.position_x, current.position_y, current.size, current.size)

    FMagnitude = Math.sqrt(norm_squared(F))
    if (FNormed > 0)
      FNormed = [F[0] / FMagnitude, F[1] / FMagnitude]

  }
}

function drawRightBuffer(){
}

function draw() {


  drawLeftBuffer();
  drawRightBuffer();


  image(leftBuffer, 0,0 );
  image(rightBuffer, game_width, 0);
}
