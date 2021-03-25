var movingrect, fixedrect;

var r1, r2, r3;

function setup() {
  createCanvas(1000, 1000);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red";

  fixedrect = createSprite(600, 200, 50, 50);
  fixedrect.shapeColor = "red";

  r1 = createSprite(100, 100, 50, 50);
  r1.shapeColor = "red";
  r1.velocityX = 10;

  r2 = createSprite(1000, 100, 50, 50);
  r2.shapeColor = "red";
  r2.velocityX = -10;

  r3 = createSprite(700, 300, 50, 50);
  r3.shapeColor = "red";

}

function draw() {
  background(255, 255, 255);

  if (bounceOff(r1, r2)) {
    r1.shapeColor = "yellow";
    r2.shapeColor = "yellow";
  }

  /*if (isTouching(r1, r2)) {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }*/

  movingrect.y = mouseY;
  movingrect.x = mouseX;

  if (isTouching(movingrect, fixedrect)) {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  else {
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }

  drawSprites();
}