
const block_size = 20;
const block_count = 20;
const game_height = block_size * block_count;
const game_width = 2*block_size * block_count;

const highscore_width = Math.floor(game_width / 2)
const highscore_height = game_height

//var snake = require('./snake.js')
//import * as snake from './snake.js';

function setup() {
  createCanvas(game_width + highscore_width, Math.max(highscore_height, game_height));

  leftBuffer = createGraphics(game_width, game_height)
  rightBuffer = createGraphics(highscore_width, highscore_height)
}

var loss_condition = false;
var my_direction = [1, 0]


function keyPressed() {
}


function drawLeftBuffer(){

}

function drawRightBuffer(){
}

function draw() {


  drawLeftBuffer();
  drawRightBuffer();


  image(leftBuffer, 0,0 );
  image(rightBuffer, game_width, 0);
}
