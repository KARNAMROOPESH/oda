
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
     ground = new Ground(200,height,400,20)
    d1 = new Rain(100,0);
    d2 = new Rain(200,10);
    d3 = new Rain(300,20);
    d4 = new Rain(150,30);
    d5 = new Rain(250,40);
    d6 = new Rain(350,50);
    d7 = new Rain(125,60);
    d8 = new Rain(225,70);
    d9 = new Rain(325,80);
    d10 = new Rain(375,90);
    d11 = new Rain(275,100);
    d12 = new Rain(375,110);
    d13 = new Rain(25,120);
    d14 = new Rain(50,130);
    d15 = new Rain(75,140);
    d16 = new Rain(100,150);
    }

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    d1.display();
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
    d8.display();
    d9.display();
    d10.display();
    d11.display();
    d12.display();
    d13.display();
    d14.display();
    d15.display();
    d16.display();
    ground.display();
}