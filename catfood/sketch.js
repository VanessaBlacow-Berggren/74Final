var img1;
var img2;
var img3;
var img4;
var img5;

var x=1;
var y=1;
var a=1;
var b=1;
var c=1;
var d=1;
var easing1 = 0.12;
var easing2 = 0.05;
var easing3 = 0.03;

var bx;
var by;
var boxSize = 20;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0;

function preload() {
  img1= loadImage("cat1.png");
	img2= loadImage("cat2.png");
  img3= loadImage("cat3.png");
  img4= loadImage("catfood.png");
	img5= loadImage("grass.png");
}

function setup() {
  createCanvas(800, 600);
  bx = 100;
  by = 530;
  rectMode(RADIUS);
  noStroke();
}

function draw() {
  background(220);
  image(img5,0,0);
  
  if(mouseIsPressed && mouseX > bx-boxSize && mouseX < bx+boxSize && mouseY > by-boxSize && mouseY < by+boxSize){
  var targetX = bx-boxSize+40;
  var dx = targetX - x;
  x += dx * easing1;
  
  var targetY = by-boxSize;
  var dy = targetY - y;
  y += dy * easing1;
  
  image(img3,x,y);
    
  var targetA = bx-boxSize-40;
  var da = targetA - a;
  a += da * easing2;
  
  var targetB = by-boxSize-80;
  var db = targetB - b;
  b += db * easing2;
  
  image(img2,a,b);
    
  var targetC = bx-boxSize-80;
  var dc = targetC - c;
  c += dc * easing3;
  
  var targetD = by-boxSize-20;
  var dd = targetD - d;
  d += dd * easing3;
  
  image(img1,c,d);
  }
  else {
  var targetX = bx-boxSize+970;
  var dx = targetX - x;
  x += dx * easing1/8;
  
  var targetY = mouseY;
  var dy = targetY - y;
  y += dy * easing1/6;
  
  image(img3,x,y);
    
  var targetA = mouseX;
  var da = targetA - a;
  a += da * easing2/4;
  
  var targetB = by-boxSize-770;
  var db = targetB - b;
  b += db * easing2/4;
  
  image(img2,a,b);
    
  var targetC = bx-boxSize-930;
  var dc = targetC - c;
  c += dc * easing3/2;
  
  var targetD = mouseY;
  var dd = targetD - d;
  d += dd * easing3/2;
  
  image(img1,c,d);
  }
  
  image(img4, bx-boxSize, by-boxSize);
  
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    if(!locked) { 
      stroke(255); 
      noFill();
      noStroke();
    } 
  } else {
    noStroke();
    noFill();
    overBox = false;
  }
  
  // Draw the box
  rect(bx, by, boxSize, boxSize);
}

function mousePressed() {
  if(overBox) { 
    locked = true; 
    noFill();
  } else {
    locked = false;
  }
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

function mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

function mouseReleased() {
  locked = false;
}