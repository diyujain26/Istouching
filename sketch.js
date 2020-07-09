function setup() {
  createCanvas(1200,800);
  fixed = createSprite(600, 400, 50, 80);
  fixed.shapeColor="green";
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  fixed.debug = true;
  moving.debug = true;
  moving.x = mouseX;
  moving.y = mouseY;
  console.log(moving.x - fixed.x);
  if (moving.x - fixed.x<moving.width/2+fixed.width/2 &&
  fixed.x - moving.x<moving.width/2+fixed.width/2 &&
  fixed.y - moving.y<moving.height/2+fixed.height/2 &&
  moving.y - fixed.y<moving.height/2+fixed.height/2 )
  {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
drawSprites();
}