var circle,ground1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1250, 650);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(500, 2300, 2250, 50 , true );
 	World.add(world, ground);

	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);
	
	ball1 = new Ball (200,555,70);
	
	Engine.run(engine);
  
}


function draw() {
	
	background("yellow");
	
    rectMode(CENTER);
	rect(ground.position.x,600,2000,20);
	
	ball1.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
   
  }
  
  function keyPressed(){
    if(keyCode===UP_ARROW){
	  Matter.Body.setStatic(ball1.body, false);	
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:130,y:-145})
    }
}




