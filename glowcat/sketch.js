var img1;
var img2;
var img3;
var pic
var value

function preload() {
  img1= loadImage("cat-noglow.jpg");
  img2= loadImage("cat-glow.jpg");
  img3= loadImage("switch.png");
}

function setup() {
  createCanvas(600, 600);
  clicks = 0;
  value = 220;
  pic = img1;
  
}


function draw() {
  background (value);
  image(pic,75,50);
  image(img3,537.5,50);
}

function mouseClicked() {
  if (mouseX > 537.5 && mouseX < 587.5 && mouseY > 50 && mouseY < 133 && value == 220) {
    value = 0;
  	pic = img2
  }
    
    else if (mouseX > 537.5 && mouseX < 587.5 && mouseY > 50 && mouseY < 133){
  		value = 220;
      pic = img1;
    }
  }