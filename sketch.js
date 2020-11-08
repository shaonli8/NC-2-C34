const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 1.5, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Bob(340, 450, "blue");
  bob2 = new Bob(400, 450, "red");
  bob3 = new Bob(460, 450, "green");
  bob4 = new Bob(520, 450, "yellow");
  bob5 = new Bob(580, 450, "magenta");

  string1 = new String(bob1.body, { x: 340, y: 200 });
  string2 = new String(bob2.body, { x: 400, y: 200 });
  string3 = new String(bob3.body, { x: 460, y: 200 });
  string4 = new String(bob4.body, { x: 520, y: 200 });
  string5 = new String(bob5.body, { x: 580, y: 200 });
}

function draw() {
  background(220);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}