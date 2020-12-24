
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 450, 20);

	box1 = new Trash(700, 690, 20, 100);
	
	box2 = new Trash(650, 660, 50, 20);
	
	box3 = new Trash(750, 660, 50, 20);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyWentDown(UP_ARROW)) {
	Matter.Body.applyForce(paper.body, {x: 200, y: 450}, {x: 500, y: 600});
  }


  paper.display();
  box2.display();
  box3.display();
  box1.display();
}





