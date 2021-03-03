
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1050,195,20);
	mango3=new mango(1150,141,15);
	mango4=new mango(900,190,25);
	mango5=new mango(990,100,40);
	mango6=new mango(1200,235,35);
	mango7=new mango(1200,180,30);
	mango8=new mango(1000,180,25);
	mango9=new mango(950,240,30);
	mango10=new mango(1100,185,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  

  groundObject.display();
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    chain.fly();
}
/*
function keyPressed(p) {
if(keyCode===32){
  Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
  launcherObject.attach(stoneObj.body);
}
  
}
*/