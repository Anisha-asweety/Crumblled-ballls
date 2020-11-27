
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      paper=new Paper(50,650,20,20)
	   paper.shapeColor=color("pink")

	   dustbin=new Dustbin(655,622,50,80)
	   
	   ground=createSprite(width/2, height-35, width,10);
	   ground.shapeColor=color("yellow")
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  dustbin.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position.x,{x:85,y:85})
	}
}

