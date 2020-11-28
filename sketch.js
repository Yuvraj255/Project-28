const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,ground,sling;
var stone,boy,boyImage;
var rope,mango1,mango2;
var mango3,mango4,mango5,mango6;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(900,700);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(700,480);
	ground = new Ground(600,680,1200,20);
	stone = new Stone(800,350,20);
	
	boy = Matter.Bodies.rectangle(200,620,20,20);

	mango1=new Mango(750,400,25);
  mango2=new Mango(770,480,25)
 	mango3=new Mango(610,450,25);
  mango4=new Mango(640,390,25);
  mango5=new Mango(660,480,25);
  mango6=new Mango(700,350,25);

	rope = new Rope(stone.body,{x:140,y:575});
	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);

  rectMode(CENTER);
  background(225);

  imageMode(CENTER);
  image(boyImage,boy.position.x,boy.position.y,200,200);

  tree.display();
  stone.display();
  ground.display();
  rope.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  rope.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone.body,{x:140,y:575});
    rope.attacher(stone.body);
  }
}

function detectCollision(lstone,lmango){
  mangoPos = lmango.body.position;
  stonePos = lstone.body.position;

  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}


