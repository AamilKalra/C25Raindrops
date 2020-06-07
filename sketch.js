const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 var drops=[]
function setup() {
  var cansvas=createCanvas(800,400);
   engine = Engine.create();
   world = engine.world;
  
}
 
function draw() {
  background(255,237,61); 
  Engine.update(engine);
  drops.push(new Raindrop(random(10,790),0,2,7));
  for (var i=0; i<drops.length;i=i+1){
    drops[i].display();

  }
  
}