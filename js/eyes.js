//fix relative sizing
var eyeXposition;
var backgroundimg;
var font;
var showText =false;
var shakeOffset = 2;

function setup() {
  createCanvas(400, 400);
}
function preload(){
  backgroundimg=loadImage('img/mae.png');
  font = loadFont('font/Nitw.otf');
}
function draw() {
  background(0);
  image(backgroundimg, 0, 0, width, height);

  eyeXposition = constrain(map(mouseX, mouseY, width, 230, 260), 230, 260);
  eyeRposition = constrain(map(mouseX, mouseY, width, 350, 390), 350, 390);
  fill(140, 37, 28); 
  circle(eyeXposition/2, height/1.83, 100);
  fill(140, 37, 28); 
  circle(eyeXposition/2 + 150, height/1.83, 100);

if (showText) {
    fill(255); 
    textSize(40);
    let offsetX = random(-shakeOffset, shakeOffset); // Random x offset
    let offsetY = random(-shakeOffset, shakeOffset);
    text("N I G H T M A R E  E Y E S", map(30, 0, width, 0, windowWidth) + offsetX, map(50, 0, height, 0, windowHeight) + offsetY);
    textFont(font);
  }

}

function mouseClicked() {
  showText = !showText;
}
