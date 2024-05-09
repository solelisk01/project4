var backgroundImage;
var notesimg;
var myFont;
var hand;
var showNotes= false;
var message = "";
var messageIndex = 0;
var lastKeyPressTime = 0;
var keyPressDelay = 100;
var paperimg;

function preload() {
  backgroundImage = loadImage('img/maelaptop.jpeg');
  notesimg = loadImage('img/notes.png');
  paperimg = loadImage('img/paper.jpg');
  hand = loadImage('img/maehand.png');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(255);
  image(backgroundImage, 0, 0, width, height);
  image(notesimg, windowWidth*0.05, windowHeight * 0.1, windowWidth / 8, windowHeight / 8);

  let handSize = windowHeight;
  let handX = mouseX - handSize / 2.3;
  let handY = mouseY - handSize / 5;
  image(hand, handX, handY, handSize, handSize);

  fill(0);
  textSize(windowWidth*0.04);
  textFont(myFont);
  text("Notes", windowWidth*0.08, windowHeight*0.26);
  
  if (showNotes) {
    rect(windowWidth * 0.2, windowHeight * 0.2, windowWidth * 0.6, windowHeight * 0.6);
    image(paperimg, windowWidth * 0.2, windowHeight * 0.2, windowWidth * 0.6, windowHeight * 0.6);
    fill(0);
    textSize(windowWidth*0.04);
    //chatgpt
    textAlign(CENTER, CENTER);
    text(message.substring(0, messageIndex), windowWidth * 0.5, windowHeight * 0.5);

    if (keyIsPressed && millis() - lastKeyPressTime > keyPressDelay && messageIndex < message.length) {
      messageIndex++;
      lastKeyPressTime = millis();
    }
  }
}

function mouseClicked() {
  if (mouseX > windowWidth*0.05 && mouseX < windowWidth * 0.07 + windowWidth / 8 &&
    mouseY > windowHeight * 0.1 && mouseY < windowHeight * 0.30 + windowHeight / 8) {
    showNotes= !showNotes;
    message = "i have the worst face i have a nightmare face :c";
    messageIndex = 0;
    lastKeyPressTime = millis(); 
  }
}
