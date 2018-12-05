var img1;
var img2;

var x=1;
var targetX;
var y=1;
var targetY;
var easing = 0.05;

var bx;
var by;
var boxSize = 45;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0;
var rect1 = bx, by, boxSize, boxSize;


function preload() {
  img1=loadImage("kittenpounce.png");
  img2=loadImage("mouse.png");
}

function setup() {
  createCanvas(800, 600);
  bx=700;
  by=500;
}

function draw() {
  background(220);
  fill(200);
  rect(175,0,350,200);
  image(img2, bx-boxSize, by-boxSize);
  fill(0,0,0);
  rect(0,0,175,200);
  
  if (mouseIsPressed && bx > 150 && bx < 600 && by > 200 && by < 500) {
      
  	targetX = bx-110;
  	var dx = targetX - x;
  	x += dx * easing/1;
  
  	targetY = by-180;
  	var dy = targetY - y;
  	y += dy * easing/1;
    
  	image(img1,x,y)
  }
  
  else {
    
    targetX=430
    var dx = targetX - x;
  	x += dx * easing/1;
    
    targetY=55
    var dy = targetY - y;
  	y += dy * easing/1;
    
  	image(img1,x,y);
  }
  
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    
    if(!locked) { 
      stroke(255); 
      noFill();
      noStroke();
    	}
  	} 
  
  	else {
    	noStroke();
    	noFill();
    	overBox = false;
  	}
  
  fill(0,0,0);
  rect(525,0,275,200);
  noFill();
  rect(rect1);
  
}

function mousePressed() {
  if(overBox) { 
    locked = true; 
    noFill();
  } 
  
  else {
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