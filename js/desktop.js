let backgroundImage;
let myFont;
let hand;
let letters = [];

function preload() {
  backgroundImage = loadImage('img/maelaptop.jpeg');
  hand = loadImage('img/maehand.png');
  myFont = loadFont('font/Nitw.otf');
}

function setup() {
  createCanvas(600, 600);
  noCursor();

  let textToReveal = 'i have a nightmare face';
  let fontSize = 40;
  let xPos = 10;
  let letterSpacing = 10; // Adjust the spacing between letters
  for (let i = 0; i < textToReveal.length; i++) {
    letters.push(new Letter(xPos, 300, textToReveal.charAt(i), fontSize));
    xPos += textWidth(textToReveal.charAt(i)) + letterSpacing; // Add the spacing
  }
}

function draw() {
  background(255);
  image(backgroundImage, 0, 0, width, height);
  image(hand, mouseX, mouseY, 400, 600);

  // Display and update the position of each letter
  for (let i = 0; i < letters.length; i++) {
    letters[i].display();
    if (dist(mouseX, mouseY, letters[i].x, letters[i].y) < 50) {
      letters[i].scatter();
    } else {
      letters[i].moveToOriginal();
    }
  }
}

class Letter {
  constructor(x, y, char, size) {
    this.originalX = x;
    this.originalY = y;
    this.x = x;
    this.y = y;
    this.char = char;
    this.size = size;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
  }

  display() {
    textFont(myFont);
    fill(0);
    textSize(this.size);
    textAlign(CENTER, CENTER);
    text(this.char, this.x, this.y);
  }

  scatter() {
    this.x += this.vx;
    this.y += this.vy;
  }

  moveToOriginal() {
    let dx = this.originalX - this.x;
    let dy = this.originalY - this.y;
    this.x += dx * 0.1;
    this.y += dy * 0.1;
  }
}
