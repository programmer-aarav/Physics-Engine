const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world
var ball, ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var ballOptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20, ballOptions)
  World.add(world, ball)
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(50, 380, 700, 20, options)
  World.add(world, ground)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  fill ("cyan")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 500, 20)
  drawSprites();
}