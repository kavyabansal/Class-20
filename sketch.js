var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect=createSprite(400,200,50,50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
      movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue";
    }else {
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }

  drawSprites();
}