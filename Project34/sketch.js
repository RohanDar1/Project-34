var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5, roof1;
var rope1, rope2, rope3, rope4, rope5
var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	roof1= new roof(width/2, height/4, width/7, 20)

	pendulumDiameter=40;

	pendulumPositionY=height/4+500
	pendulum1=new pendulum(width/2-pendulumDiameter*2, pendulumPositionY, pendulumDiameter);
	pendulum2=new pendulum(width/2-pendulumDiameter, pendulumPositionY, pendulumDiameter);
	pendulum3= new pendulum(width/2,pendulumPositionY,pendulumDiameter);
	pendulum4= new pendulum(width/2+pendulumDiameter, pendulumPositionY, pendulumDiameter);
	pendulum5= new pendulum(width/2+pendulumDiameter*2,pendulumPositionY,pendulumDiameter);

	rope1= new rope (pendulum1.body, roof1.body, -pendulumDiameter*2, 0)
	rope2= new rope (pendulum2.body, roof1.body, -pendulumDiameter*1, 0)
	rope3= new rope (pendulum3.body, roof1.body, 0, 0)
	rope4= new rope (pendulum4.body, roof1.body, pendulumDiameter*1, 0)
	rope5= new rope (pendulum5.body, roof1.body, pendulumDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();


 pendulum1.display();
 pendulum2.display();
 pendulum3.display();
 pendulum4.display();
 pendulum5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

/*function keyPressed()
{
	if (keyCode===RIGHT_ARROW){

		Matter.Body.applyForce(pendulum1.body, pendulum1.body.position,{x: -50, y: -20})
	}
}*/


function mouseDragged (){
	Matter.Body.setPosition (pendulum1.body, { x: mouseX, y:mouseY});
}


