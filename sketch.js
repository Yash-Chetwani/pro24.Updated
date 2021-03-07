
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 690);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(500,345,90,30);
	plane = new Plane(500,630,1000,120);
    stone = new Stone(400,245,60,60);
    rubber = new Rubber(900,450,70);
    sand = new Sand(250,625,20,20);
    sand2 = new Sand(210,625,20,20);
    sand3 = new Sand(470,625,20,20);
    sand4 = new Sand(520,625,20,20);
    sand5 = new Sand(570,625,20,20);
    sand6 = new Sand(630,625,20,20);
    iron = new Iron(730,300,45,45);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  plane.display();
  rubber.display();
  stone.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  
  drawSprites();
 
}



