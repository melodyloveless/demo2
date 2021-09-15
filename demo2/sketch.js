
var size = 400;

var r = 100;
var g = 100;

var xpos = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(r,255,0);
  //r = random(20,255);
  fill(r, g, 100);
  ellipse(xpos/2, height/2, size, size);
  ellipse(mouseX + xpos/4, mouseY + height/4, size/3, size/3);
}

function mousePressed() {
  r = random(20, 255);
  g = random(100, 255);
  size = random(50,400);
  xpos = random(0,windowWidth);
}
