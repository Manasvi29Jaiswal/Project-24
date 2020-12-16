const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height,width,20);
	paper = new Paper(50,680,20);
	box1 = new Dustbin(570,630,20,100);
	box2 = new Dustbin(750,630,20,100);
	box3 = new Dustbin(660,675,160,20);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  keyPressed();
  
  drawSprites();
 
}


function keyPressed(){

if(keyDown("UP_ARROW")){

Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-32})

}

}

