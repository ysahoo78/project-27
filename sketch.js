
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bob1, bob2, bob3, bob4, bob5, roof, constraint1, constraint2, constraint3, constraint2, constraint4, constraint5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 675, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Create the Bodies Here.
	bob1 = new Bob(200, 400,50);
	bob2 = new Bob(300, 400, 50);
	bob3 = new Bob(400, 400, 50);
	bob4 = new Bob(500, 400, 50);
	bob5 = new Bob(600, 400, 50);
	roof = new Roof();
	constraint1 = new Rope(bob1.body, {x:200, y: 200});
	constraint2 = new Rope(bob2.body, {x:300, y: 200});
	constraint3 = new Rope(bob3.body, {x:400, y: 200});
	constraint4 = new Rope(bob4.body, {x:500, y: 200});
	constraint5 = new Rope(bob5.body, {x:600, y: 200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
  if(keyDown(UP_ARROW)){
	  console.log("reached");
	  Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -2, y: -2})
  }

}





