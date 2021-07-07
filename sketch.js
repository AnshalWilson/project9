
function setup() {
  createCanvas(400,400);
  
}

function draw() 
{ 
  background(30);
 if(keyIsDown(RIGHT_ARROW)){
   background("black")
 }

if(keyIsDown(LEFT_ARROW)){
  background("blue ")
}
if(keyIsDown(UP_ARROW)){
  background("RED")
}

if(keyIsDown(DOWN_ARROW)){
  background("PINK")
}
}