const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall,wall1,wall2,wall3,wall4,wall5,wall6;
var cir,cir1,cir2,cir3,cir4,cir5,cir6;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    wall = new Box(200,250,50,200);
    wall1 = new Box(150,300,50,200);
    wall2 = new Box(250,300,50,200);
    wall3= new Box(100,325,50,150);
    wall4 = new Box(300,325,50,150);
    wall5 = new Box(50,350,50,100);
    wall6 = new Box(350,350,50,100);

    cir = new TRI(200,150,25,25);
    cir1 = new TRI(150,200,25,25);
    cir2 = new TRI(250,200,25,25);
    cir3 = new TRI(100,250,25,25);
    cir4 = new TRI(300,250,25,25);
    cir5= new TRI(50,300,25,25);
    cir6 = new TRI(350,300,25,25);
}

function draw(){
    background(0);
    Engine.update(engine);
    wall.display();
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();

    cir.display();
    cir1.display();
    cir2.display();
    cir3.display();
    cir4.display();
    cir5.display();
    cir6.display();
   
     
}