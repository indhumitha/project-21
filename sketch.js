var bullet,wall,thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,33)
  speed=random(223,321)
  weight=random(30,52)
 bullet= createSprite(50, 200, 50, 5);
 bullet.velocityX=speed
 bullet.shapeColor="white";

 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor="grey"
}

function draw() {
  background(0);  
if(hasCollide(bullet,wall)){
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  if(damage>10){
    wall.shapeColor="red"
  }else if(damage<10){
    wall.shapeColor="green"
  }
}

  drawSprites();
}
function hasCollide(b,w){
  bEdge=b.x+b.width
  if(bEdge>=w.x){
    return true
  }
  return false
}