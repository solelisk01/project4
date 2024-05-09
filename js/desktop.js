var next;
var backgroundImage;
var notesimg;
var myFont;
var hand;
var showNotes = false;
var message1 = "";
var message2 = "";
var messageIndex1 = 0;
var messageIndex2 = 0;
var lastKeyPressTime = 0;
var keyPressDelay = 100;
var paperimg;

function preload() {
  backgroundImage = loadImage('img/maelaptop.jpeg');
  notesimg = loadImage('img/notes.png');
  paperimg = loadImage('img/paper.jpg');
  hand = loadImage('img/maehand.png');
  next = loadImage('img/next.png');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(255);
  image(backgroundImage, 0, 0, width, height);
  image(notesimg, windowWidth * 0.05, windowHeight * 0.1, windowWidth / 8, windowHeight / 8);
  image(next, windowWidth * 0.7, windowHeight * 0.83, windowWidth / 8, windowHeight / 8);

  let handSize = windowHeight;
  let handX = mouseX - handSize / 2.3;
  let handY = mouseY - handSize / 5;
  image(hand, handX, handY, handSize, handSize);

  fill(0);
  textSize(windowWidth * 0.04);
  textFont(myFont);
  text("Notes", windowWidth * 0.08, windowHeight * 0.26);
  text("Next page", windowWidth * 0.71, windowHeight * (7.9 / 8));

  if (showNotes) {
    rect(windowWidth * 0.2, windowHeight * 0.2, windowWidth * 0.6, windowHeight * 0.6);
    image(paperimg, windowWidth * 0.2, windowHeight * 0.2, windowWidth * 0.6, windowHeight * 0.6);
    fill(0);
    textSize(windowWidth * 0.04);

    //chatgpt
    textAlign(CENTER, CENTER);
    text(message1.substring(0, messageIndex1), windowWidth * 0.5, windowHeight * 0.23);
    text(message2.substring(0, messageIndex2), windowWidth * 0.5, windowHeight * 0.33);
    if (keyIsPressed && millis() - lastKeyPressTime > keyPressDelay) {
      if (messageIndex1 < message1.length) {
        messageIndex1++;
        lastKeyPressTime = millis();
      } else if (messageIndex2 < message2.length) {
        messageIndex2++;
        lastKeyPressTime = millis();
          //end of chatgpt
      }
    }
  }
}

function mouseClicked() {
  if (mouseX > windowWidth * 0.7 && mouseX < windowWidth * 0.7 + windowWidth / 8 &&
    mouseY > windowHeight * 0.85 && mouseY < windowHeight * 0.85 + windowHeight / 8) {
    window.location.href = 'window.html';
  }
  if (mouseX > windowWidth * 0.05 && mouseX < windowWidth * 0.07 + windowWidth / 8 &&
    mouseY > windowHeight * 0.1 && mouseY < windowHeight * 0.30 + windowHeight / 8) {
    showNotes = !showNotes;
    message1 = "i have the worst face i have a nightmare face :c";
    message2 = "my big dumb eyes my nightmare eyes!!!";
    messageIndex1 = 0;
    messageIndex2 = 0;
    lastKeyPressTime = millis();
  }
}
