var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playButton,playButtonImage;

var form, player, game;

var formBg,gamePageBg;
var fightMusic;
var playerIndicate;



function preload()
{
  	formBg=loadImage("backgrounds/game open image.jpg");
    gamePageBg=loadImage("backgrounds/game open image2.jpg");
    playButtonImage= loadImage("buttonStock1h.png");
}

function setup(){
  canvas=createCanvas(displayWidth-50,displayHeight-160);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  background(formBg);
 
  if(playerCount === 2){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
   
  }
  drawSprites();
}
