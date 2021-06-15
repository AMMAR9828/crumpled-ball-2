const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper,ground;
var greenbin

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (600,380,1200,20)
	papper = new Papper(40,40,20)
	greenbin = new Dustbin(978,300,160,180)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");


  ground.display();
  papper.display();
  greenbin.display();

  drawSprites();
	
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(papper.body, papper.body.position,{x:38,y:-38})
	}
}



