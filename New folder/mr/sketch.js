var PLAY = 1;
var END = 0;
var gameState = PLAY;

var runner, runner_running, runner_collided;
var runner2, runner_running2, runner_collided2;
var ground2, invisibleGround2, groundImage2;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;
var score1=0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){
  runner_running =   loadImage("r.png");
  runner_running2 =   loadImage("r.png");
  
  groundImage = loadImage("ground2.png");
  groundImage2 = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("h.png");
  obstacle2 = loadImage("h.png");
  obstacle3 = loadImage("h.png");
  obstacle4 = loadImage("h.png");
  obstacle5 = loadImage("h.png");
  obstacle6 = loadImage("h.png");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(600, 400);
  
  
}

function draw() {
  
  background(255);
  text("Score: "+ score, 500,50);
  text("Score: "+ score1, 500,250);
  
  
    
  
  
  
  drawSprites();
}


