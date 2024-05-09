//from chatgpt
var blendFactor = 0.2; 
var blendSpeed = 0.2; 

function preload() {
  night = loadImage('img/nightmae.jpeg');
  day = loadImage('img/daymae.jpeg');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var newBlendFactor = map(mouseY, 0, height, 0, 1);
  blendFactor = lerp(blendFactor, newBlendFactor, blendSpeed);

  background(0);
  //from chatgpt
  tint(255, 255 * (1 - blendFactor)); 
  
  image(day, 0, 0, width, height);
  
  //from chatgpt
  tint(255, 255 * blendFactor);
  
  image(night, 0, 0, width, height);
  noTint();

  textFont(myFont);
  fill(222,226,167);
  textSize(windowWidth *0.04);
  textAlign(CENTER, CENTER);
  text("you'll see the nightmare eyes outside your window", windowWidth*(1/2.2), windowHeight*(1/6));
}
