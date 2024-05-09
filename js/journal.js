var backgroundImg;
var customFont;
var lineColor;
var lineThickness;
var lines = [];

function preload() {
  backgroundImg = loadImage('img/journal.png');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lineColor = color(140, 37, 28);
  lineThickness = windowWidth *0.01; 
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

  textFont(myFont);
  textSize(windowWidth / 7);
  strokeWeight(windowWidth *0.001); 
  fill(140, 37, 28); 
  text("And", windowWidth*(55/80), windowHeight*(0.9/3));
  text("You'll", windowWidth*(52/80), windowHeight*(1/2.2));
  text("Know.", windowWidth*(53/80), windowHeight*(2/3.3));
  
  fill(255, 100);
  textSize(windowWidth / 25);
  strokeWeight(0);
  fill(246,240,229);
  text("n i g h t m a r e  e y e s", windowWidth *(5/8), windowHeight*(15/31));
}

//from chatgpt
function mouseDragged() {
  lines.push({x: mouseX, y: mouseY});
}