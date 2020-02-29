
const block_size = 20;
const block_count = 20;
const game_height = block_size * block_count;
const game_width = block_size * block_count;

const highscore_width = Math.floor(game_width / 2)
const highscore_height = game_height

//var snake = require('./snake.js')
//import * as snake from './snake.js';

function setup() {
  createCanvas(game_width + highscore_width, Math.max(highscore_height, game_height));

  leftBuffer = createGraphics(game_width, game_height)
  rightBuffer = createGraphics(highscore_width, highscore_height)
}

var my_snake = snake()
var loss_condition = false;
var my_direction = [1, 0]


function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      my_direction = [0, -1];
      break;
    case DOWN_ARROW:
      my_direction = [0, 1];
      break;
    case LEFT_ARROW:
      my_direction = [-1, 0];
      break;
    case RIGHT_ARROW:
      my_direction = [1, 0];
      break;
  }
}

var fade_to_black = 0

function drawLeftBuffer(){
  frameRate(10);
  if (loss_condition == false) {
    leftBuffer.background(100);

    var current_body = my_snake.move_body(my_direction).get_body();
    var body_length = current_body.length;


    leftBuffer.fill(57, 255, 20)
    for (var k = 0; k < body_length; ++k)
      leftBuffer.rect(block_count * current_body[k][0], block_count * current_body[k][1], block_size, block_size);

    leftBuffer.fill(255, 0, 0, 255)
    var food = my_snake.get_food_position()

    leftBuffer.rect(block_count * food[0], block_count * food[1], block_size, block_size);
  }
  else {
    fade_to_black += 10
    leftBuffer.background(Math.max(100 - fade_to_black, 0));
  }

}

function drawRightBuffer(){
  rightBuffer.background(255,255,255)
  rightBuffer.textSize(Math.min(32+fade_to_black, 100))
  rightBuffer.text(my_snake.get_body().length, Math.floor(highscore_width/3), Math.floor(highscore_height/2))
}

function draw() {


  drawLeftBuffer();
  drawRightBuffer();


  image(leftBuffer, 0,0 );
  image(rightBuffer, game_width, 0);
}
