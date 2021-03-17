var balloon, balloonImage;

function preload(){
balloonImage = loadImage("kids.png");
bgi=loadImage("bg.jpg");
}

function setup() {
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage);
}

function draw() {
  background(bgi);
  if (keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x-5
  }  
  if (keyDown(UP_ARROW)) {
    balloon.y = balloon.y-5
  }  
  if (keyDown(RIGHT_ARROW)) {
    balloon.x = balloon.x+5
  }  
  if (keyDown(DOWN_ARROW)) {
    balloon.y = balloon.y+5
  }  
  drawSprites();
}