let posX=0;              //Cirklens position
let posY=0;

let angle,hast;          //Hastighedsvektoren i polære-koordinater
let velX = 1, velY =1;   //Hastighedsvektoren i kartesiske-koordinater 

let in_velX;             //Inputfelt velX

function setup() {
  createCanvas(400, 400);
  
  createSpan("Hastighedsvektor data:").position(10,10); 
  
  createSpan("x=").position(10,30);
  createSpan("y=").position(80,30);
  
  in_velX = createInput('');
  in_velX.position(30,30);  
  in_velX.input(inChanged);
  in_velX.size(20,15);
  in_velX.value(velX);
}

function inChanged(){
  velX = Number(in_velX.value());
}

function draw() {
  background(220);
  circle(posX,posY,10);
  rect(5,5,200,50);
  posX += velX;      posY += velY;
  posX= posX%width;  posY = posY%height;
}