var fixedRect, movingRect,frect,mrect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  frect= createSprite(400, 100, 50, 80);
  frect.shapeColor = "green";
  frect.debug = true;
  mrect = createSprite(600, 300,80,30);
  mrect.shapeColor = "green";
  mrect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  bounceoff(movingRect,fixedRect);

  if (isTouching(movingRect,fixedRect)==true){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if (isTouching(mrect,frect)==true){
    mrect.shapeColor = "yellow";
    frect.shapeColor = "yellow";
  }
  else{
    mrect.shapeColor = "green";
    frect.shapeColor = "green";
  }

  drawSprites();
}
 