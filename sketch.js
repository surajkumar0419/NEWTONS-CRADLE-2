
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup() {

  createCanvas(800,550);

  engine=Engine.create();
  world = engine.world;

  bob1 = new Bob(240,500,40);
  bob2 = new Bob(300,500,40);
  bob3 = new Bob(360,500,40);
  bob4 = new Bob(420,500,40);
  bob5 = new Bob(480,500,40);
  sling1 = new Sling(bob1.body,{x:240,y:100});
  sling2 = new Sling(bob2.body,{x:300,y:100});
  sling3 = new Sling(bob3.body,{x:360,y:100});
  sling4 = new Sling(bob4.body,{x:420,y:100});
  sling5 = new Sling(bob5.body,{x:480,y:100});

}

function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}