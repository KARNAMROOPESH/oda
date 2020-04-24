var sun,p1,p2,p3,p4,p5,p6,p7,p8;

function setup() {

  createCanvas(1500,1500);

  sun = createSprite(750, 350, 50, 50);
  sun.shapeColor="yellow";

  p1 = createSprite(750,420,10,10);
  p1.shapeColor="white";

  p2 = createSprite(720,450,10,10);
  p2.shapeColor="red";

  p3 = createSprite(780,490,10,10);
  p3.shapeColor="blue";

  p4 = createSprite(690,530,10,10);
  p4.shapeColor="pink";

  p5 = createSprite(900,570,10,10);
  p5.shapeColor="grey";

  p6 = createSprite(750,610,10,10);
  p6.shapeColor="yellow";

  p7 = createSprite(780,650,10,10);
  p7.shapeColor=" blue";

  p8 = createSprite(730,690,10,10);
  p8.shapeColor=" red";

}

function draw() {
  background(0);
  
  p1.velocityX=3;
  p2.velocityX=3;
  p3.velocityX=3;
  p4.velocityX=3;
  p5.velocityX=3;
  p6.velocityX=3;
  p7.velocityX=3;
  p8.velocityX=3;

  if(p1.x > 810){
     p1.velocityY=-3;
     p1.velocityX=0;
  }
  else{
     p1.velocityX=3;
     p1.velocityY=0;
  }
  if(p1.y < 290){
     p1.velocityX=-3;
     p1.velocityY=0;
  }
  else{
     p1.velocityx=3;
  }
  if(p1.x < 690){
     p1.velocityX=0;
    p1.velocityY=3;
  }
  if(p1.y>420
    && p1.x<750){
    p1.velocityX=3;
    p1.velocityY=0;
  }



  if(p2.x > 850){
    p2.velocityY=-3;
    p2.velocityX=0;
 }
 else{
    p2.velocityX=3;
    p2.velocityY=0;
 }
 if(p2.y < 250){
    p2.velocityX=-3;
    p2.velocityY=0;
 }
 else{
    p2.velocityx=3;
 }
 if(p2.x < 650){
    p2.velocityX=0;
   p2.velocityY=3;
 }
 if(p2.y>450
   && p2.x<790){
   p2.velocityX=3;
   p2.velocityY=0;
 }
  


 if(p3.x > 890){
  p3.velocityY=-3;
  p3.velocityX=0;
}
else{
  p3.velocityX=3;
  p3.velocityY=0;
}
if(p3.y < 210){
  p3.velocityX=-3;
  p3.velocityY=0;
}
else{
  p3.velocityx=3;
}
if(p3.x < 610){
  p3.velocityX=0;
 p3.velocityY=3;
}
if(p3.y>490
 && p3.x<830){
 p3.velocityX=3;
 p3.velocityY=0;
}



if(p4.x > 930){
  p4.velocityY=-3;
  p4.velocityX=0;
}
else{
  p4.velocityX=3;
  p4.velocityY=0;
}
if(p4.y < 170){
  p4.velocityX=-3;
  p4.velocityY=0;
}
else{
  p4.velocityx=3;
}
if(p4.x < 570){
  p4.velocityX=0;
 p4.velocityY=3;
}
if(p4.y>530
 && p4.x<870){
 p4.velocityX=3;
 p4.velocityY=0;
}



if(p5.x > 970){
  p5.velocityY=-3;
  p5.velocityX=0;
}
else{
  p5.velocityX=3;
  p5.velocityY=0;
}
if(p5.y < 130){
  p5.velocityX=-3;
  p5.velocityY=0;
}
else{
  p5.velocityx=3;
}
if(p5.x < 530){
  p5.velocityX=0;
 p5.velocityY=3;
}
if(p5.y>570
 && p5.x<900){
 p5.velocityX=3;
 p5.velocityY=0;
}



if(p6.x > 1000){
  p6.velocityY=-3;
  p6.velocityX=0;
}
else{
  p6.velocityX=3;
  p6.velocityY=0;
}
if(p6.y < 90){
  p6.velocityX=-3;
  p6.velocityY=0;
}
else{
  p6.velocityx=3;
}
if(p6.x < 490){
  p6.velocityX=0;
 p6.velocityY=3;
}
if(p6.y>610
 && p6.x<940){
 p6.velocityX=3;
 p6.velocityY=0;
}



if(p7.x > 1040){
  p7.velocityY=-3;
  p7.velocityX=0;
}
else{
  p7.velocityX=3;
  p7.velocityY=0;
}
if(p7.y < 50){
  p7.velocityX=-3;
  p7.velocityY=0;
}
else{
  p7.velocityx=3;
}
if(p7.x < 450){
  p7.velocityX=0;
 p7.velocityY=3;
}
if(p7.y>650
 && p7.x<980){
 p7.velocityX=3;
 p7.velocityY=0;
}



if(p8.x > 1080){
  p8.velocityY=-3;
  p8.velocityX=0;
}
else{
  p8.velocityX=3;
  p8.velocityY=0;
}
if(p8.y < 10){
  p8.velocityX=-3;
  p8.velocityY=0;
}
else{
  p8.velocityx=3;
}
if(p8.x < 410){
  p8.velocityX=0;
 p8.velocityY=3;
}
if(p8.y>690
 && p8.x<1020){
 p8.velocityX=3;
 p8.velocityY=0;
}

if(frameCount/10===0){
  sun.lenght+1000;
  sun.width+1000;
}

  drawSprites();
}