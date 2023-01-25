## Udleveret kode

[https://editor.p5js.org/ajrp/sketches/9tmny3Eio](https://editor.p5js.org/ajrp/sketches/9tmny3Eio)

```
let posX=0;              //Cirklens position
let posY=0;

let angle,hast;          //Hastighedsvektoren i polære-koordinater
let velX, velY;          //Hastighedsvektoren i kartesiske-koordinater

let hastInput;           //Inputfelt til magnitude af hastighedsvektoren (polær koordinat)

function setup() {
  createCanvas(400, 400);
  hastInput = createInput('');
  hastInput.position(300,10);
  hastInput.input(hastInputChanged);
  hastInput.size(50,15);
  changePolarVelocity(PI/8,1);
}

function hastInputChanged(){
  hast = this.value();
  changePolarVelocity(angle,hast);
}

function draw() {
  background(220);
  text("Hast mag.: "+hast,10,25);
  circle(posX,posY,10);
  posX += velX;      posY += velY;
  posX= posX%width;  posY = posY%height;
}

function changePolarVelocity(a,h){
  angle = a;hast = h;
  velX = hast*cos(angle);
  velY = hast*sin(angle);
}

function changeCartesianVelocity(x,y){
  velX = x; velY = y;
  angle = atan2(y,x);
  hast = sqrt(x*x + y*y);
}
```
