var backgroundImage;
var myFont;
var circleSize = 50;
var eyeColor = '#ff0000';
var showText =false;
var shakeOffset = 2;

//chatgpt
var circle1X, circle1Y, circle2X, circle2Y;

function preload() {
  backgroundImage = loadImage('img/mae.png');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  textSize(windowWidth*0.05);
}

function draw() {
  background(backgroundImage);

  var d1 = dist(mouseX, mouseY, windowWidth * (1 / 3), windowHeight * (1 / 2));
  var d2 = dist(mouseX, mouseY, windowWidth * (4.4 / 6), windowHeight * (1 / 2));

  // Chatgpt
  if (d1 > 50) {
    var angle1 = atan2(mouseY - windowHeight * (1 / 2), mouseX - windowWidth * (1 / 3));
    circle1X = windowWidth * (1 / 3) + cos(angle1) * 15;
    circle1Y = windowHeight * (1 / 2) + sin(angle1) * 15;
  }

  if (d2 > 50) {
    var angle2 = atan2(mouseY - windowHeight * (1 / 2), mouseX - windowWidth * (4.4 / 6));
    circle2X = windowWidth * (4.4 / 6) + cos(angle2) * 15;
    circle2Y = windowHeight * (1 / 2) + sin(angle2) * 15;
  }

  fill(eyeColor);
  noStroke();
  ellipse(circle1X*0.93, circle1Y*1.1, windowWidth * (1 / 4), windowHeight * (1 / 5));
  ellipse(circle2X*0.93, circle2Y*1.1, windowWidth * (1 / 4), windowHeight * (1 / 5));
  
  if (showText) {
    fill(255); 
    textSize(windowWidth*0.06);
   
//from chatgpt
    var offsetX = random(-shakeOffset, shakeOffset); 
    var offsetY = random(-shakeOffset, shakeOffset);
    text("N I G H T M A R E  E Y E S", map(windowWidth*0.28, 0, windowWidth, 0, windowWidth) + offsetX, map(windowHeight*0.10, 0, windowHeight, 0, windowHeight) + offsetY);
    textFont(myFont);
}
}

//chatgpt
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  showText = !showText;
}
