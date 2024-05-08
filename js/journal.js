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
  createCanvas(800, 600);
  lineColor = color(140, 37, 28);
  lineThickness = 10; 
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, width, height);
  
  // Draw stored lines
  stroke(lineColor);
  strokeWeight(lineThickness);
  for (let i = 1; i < lines.length; i++) {
    line(lines[i-1].x, lines[i-1].y, lines[i].x, lines[i].y);
  }

  // Draw text with a smaller stroke weight
  textFont(myFont);
  textSize(90);
  strokeWeight(1); // Set stroke weight for text
  fill(140, 37, 28); 
  text("And", 510, 200);
  text("You'll", 480, 300);
  text("Know", 490, 400);
  fill(255, 100);
}

function mouseDragged() {
  // Add current mouse position to the lines array
  lines.push({x: mouseX, y: mouseY});
}
