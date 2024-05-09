var next;
var backgroundImg;
var myFont;
var lineColor;
var lineThickness;
var lines = [];

function preload() {
  backgroundImg = loadImage('img/journal.png');
  myFont = loadFont('font/Nitw.otf');
  next=loadImage('img/next.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lineColor = color(140, 37, 28);
  lineThickness = 10; 
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, windowWidth *1.1, windowHeight);
  stroke(lineColor);
  strokeWeight(lineThickness);
  
  //from chatgpt
  for (let i = 1; i < lines.length; i++) {
    line(lines[i-1].x, lines[i-1].y, lines[i].x, lines[i].y);
  }
  //end of chatgpt

  textFont(myFont);
  textSize(windowWidth / 7);
  strokeWeight(1); 
  fill(140, 37, 28); 
  text("And", windowWidth*(55/80), windowHeight*(0.9/3));
  text("You'll", windowWidth*(52/80), windowHeight*(1/2.2));
  text("Know.", windowWidth*(53/80), windowHeight*(2/3.2));
  
  fill(255, 100);
  textSize(windowWidth*0.04);
  strokeWeight(0);
  fill(246,240,229);
  text("n i g h t m a r e  e y e s", windowWidth*0.65, windowHeight*0.49);
  fill(0);
  text("Next page", windowWidth * 0.8, windowHeight * (7 / 8));
  image(next, windowWidth * 0.8, windowHeight * 0.7, windowWidth / 8, windowHeight / 7);
}

//from chatgpt
function mouseDragged() {
  lines.push({x: mouseX, y: mouseY});
}
//end of chatgpt
function mouseClicked() {
  if (mouseX > windowWidth * 0.8 && mouseX < windowWidth * 0.9 + windowWidth / 8 &&
    mouseY > windowHeight * 0.7 && mouseY < windowHeight * 0.8 + windowHeight / 8) 
    window.location.href = 'eyes.html';
  }

