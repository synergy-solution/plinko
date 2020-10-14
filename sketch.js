const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinko=[]
var division=[]

var divisionHeight=300

function setup() {
  createCanvas(480,750);
  engine = Engine.create();
  world = engine.world;


 
  ground=new Ground(width/2,740,width,20)
 

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display()
  for(var i=0;i<=width;i=i+80){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
    
  }

 drawSprites()
}