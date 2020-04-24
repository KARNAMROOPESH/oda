// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

  Engine = Matter.Engine;
  World= Matter.World;
  Bodies = Matter.Bodies;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    tank = new Tanker(200,360,200,50);
    tank1 = new Tanker(200,335,100,50);
    tank2 = new Tanker(200,310,50,50);
    tank3 = new Tanker(275,295,100,10);
    ball = new Ball(500,10,20);
    ball1 = new Ball(550,50,20);
    ball2 = new Ball(600,100,20);
    ball3 = new Ball(650,150,20);
    ball4 = new Ball(700,100,20);
    ball5 = new Ball(750,10,20);
    ball6 = new Ball(800,50,20);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
    Engine.update(engine);
   ground.display();
   tank.display();
   tank1.display();
   tank2.display();
   tank3.display();
   ball.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   ball6.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}