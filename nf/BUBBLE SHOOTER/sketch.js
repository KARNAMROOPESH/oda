var shooter;
var obs=[];
var hs = [];
var score = 0;

function setup(){
createCanvas(500,500);
shooter = new Ship;
for(var i = 0; i<20;i++){
obs.push(new Obstacle())
}
}

function draw(){
  background(0);
 shooter.render();
 shooter.turn();
 shooter.update();
 shooter.edges();
 for(var i =0;i<obs.length;i++){
   obs[i].render();
   obs[i].update();
   obs[i].edges();
 }
 for(var i =hs.length-1;i>=0;i--){
  hs[i].render();
  hs[i].update();
  }

    if (hs.x - obs.x < obs.width/2 +hs.width/2
      && obs.x - hs.x < obs.width/2 + hs.width/2) {
        score = score+50;
  }
  if (shooter.x - obs.x < obs.width/2 +shooter.width/2
    && obs.x - shooter.x < obs.width/2 + shooter.width/2) {
      score = score-10;
}
console.log("score");
textSize(15);
    textFont("Georgia");
    stroke("red");
    fill("white");
    text("SCORE:"+score,400,50)
}

 
function keyReleased(){
   shooter.setRotation(0);
}

function keyPressed(){
  if (keyCode == 32  ){
    hs.push(new Hitter(shooter.pos,shooter.heading));
  }
 else if (keyCode == RIGHT_ARROW){
   shooter.setRotation(1);
 }
  else if  (keyCode == LEFT_ARROW){
  shooter.setRotation(-1);
}
else if(keyCode == UP_ARROW){
shooter.boost();
}
}