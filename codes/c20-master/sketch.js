
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var mp ;

function setup(){

  createCanvas(1200,400);

  mp = createSprite(100,100,20,20);
}


function draw(){

  mp.x = mouseX;
  mp.y = mouseY;
  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  
   if(  mp.x < 400){
   background(250);
   }
   if( mp.x > 400 && mp.x < 800 ){
    background(130);
   }
   if( mp.x > 800 && mp.x < 1200 ){
    background(0);
   }
   
   

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}