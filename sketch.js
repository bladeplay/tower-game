const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var platform;
var catapult;
var box,box2,box3,box4,box5,box6,box7,box7,box8
var box9,box10,box11,box12,box13,box14,box15,box16;
var score = 0;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ball=new Ball(200,200);
  var options={
  isStasic:true
  }
  platform = new Ground(700, 799, 10000, 170);
 
  box = new Box(900,780, 20, 170);
  box2 = new Box(900,790, 20, 170);
  box3 = new Box(900,780, 20, 170);
  box4 = new Box(900,790, 20, 170);
  box5 = new Box(890,780, 20, 170);
  box6 = new Box(890,790, 20, 170);
  box7 = new Box(890,780, 20, 170);
  box8 = new Box(890,790, 20, 170);
  
  box9 = new Box(910,780, 20, 170);
  box10 = new Box(910,790, 20, 170);
  box11 = new Box(910,780, 20, 170);
  box12 = new Box(910,790, 20, 170);
  box13 = new Box(920,780, 20, 170);
  box14 = new Box(920,790, 20, 170);
  box15 = new Box(920,780, 20, 170);
  box16 = new Box(920,790, 20, 170);
  catapult = new SlingShot(ball.body,{x:200, y:650});
}
function draw() {
  background("black");

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  Engine.update(engine);
  platform.display();
  ball.display(); 
  catapult.display();
  box.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 

  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display();
  box.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  catapult.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&& ball.body.speed<1){
      Matter.Body.setPosition(ball.body, {x: 200 , y: 50});
     catapult.attach(ball.body);
     ball.trajectory=[];
  }
}