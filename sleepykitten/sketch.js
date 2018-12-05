var img1;
var img2;
var img3;
var song;

function preload() {
  img1= loadImage("redbed.png");
  img2= loadImage("sleepykitten.png");
  img3= loadImage("kittenshadow.png");
  song= loadSound("purr.mp3");
}
  
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img1,0,0);
  image(img2,115,180);
  image(img3,115,180);
  
	if (mouseX > 140 && mouseX < 480 && mouseY > 250 && mouseY < 380) {
  
  	if (song.isPlaying() == false) {
  		song.play();
		}
  }
  
  else {
    song.pause();
  }
}
