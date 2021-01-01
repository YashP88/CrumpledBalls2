
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3
var paper
var ground



function preload(){
    

}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20);
	
	dustbin1 = new Dustbin(660,595,15,150);
	dustbin2 = new Dustbin(595,663,120,10);
	dustbin3 = new Dustbin(535,595,15,150);
    paper = new Paper(100,250,40); 
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85});
	}
}

