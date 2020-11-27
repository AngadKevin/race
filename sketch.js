var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var red,white,blue,black;
var ground,track;

function preload(){
red = loadImage("images/car2.png")
white = loadImage("images/car1.png")
blue =loadImage("images/car3.png")
black = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
track = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
