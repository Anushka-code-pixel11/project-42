var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background(0); 

  hr = hour();
  mn = minute();
  sc = second();

  textSize(20);
  textFont("comic sans ms");
  stroke("white");
  fill("cyan");
  text("12",190,130);
  text("3",270,206);
  text("6",195,290);
  text("9",120,206);
 
  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(3);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(5);
  line(0,0,65,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(6);
  line(0,0,45,0);
  pop();

  stroke("blue");
  strokeWeight(7);
  point(0,0);
  noFill();
  arc(0, 0, 240, 240, 0, scAngle);

  stroke("red");
  arc(0,0,200,200,0,hrAngle);

  stroke("green");
  arc(0,0,280,280,0,mnAngle);

  drawSprites();

}