let backgroundImage1;
let backgroundImage2;
let blendFactor = 0.2; // Initial blend factor
let blendSpeed = 0.2; // Speed of blending

function preload() {
  night = loadImage('img/nightmae.jpeg');
  day = loadImage('img/daymae.jpeg');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let newBlendFactor = map(mouseY, 0, height, 0, 1);
  blendFactor = lerp(blendFactor, newBlendFactor, blendSpeed);

  // Draw the blended background
  background(255);
  tint(255, 255 * (1 - blendFactor)); // Tint first image with blendFactor
  image(day, 0, 0, width, height);
  tint(255, 255 * blendFactor); // Tint second image with blendFactor
  image(night, 0, 0, width, height);
  noTint();

  // Display some text
  textFont(myFont);
  fill(222,226,167);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("you'll see the nightmare eyes outside your window", 300, 100);
}
