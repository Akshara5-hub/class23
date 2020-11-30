const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

ground = new Ground(200,400,400,50);

    box1 = new Box(230,100,40,90);
    box2 = new Box(200,200,40,50);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display()
    box2.display()
    ground.display();
}