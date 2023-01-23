# Matematik og programmeringsdag 1G
I dag skal vi arbejde med at kombinere matematik og programmering ved at skrive et program i p5.js, der simulerer en bold, der bevæger sig rundt på skærmen. Vi vil bruge vektorklasserne i p5.js til at styre boldens position og hastighed, og vi vil anvende trigonometriske funktioner og matematiske formler for at ændre boldens retning og hastighed. Opgaverne, som I skal arbejde med, er designet til at give jer mulighed for at eksperimentere med matematiske koncepter og anvende dem i et konkret program. Der vil være vejledning tilgængelig undervejs, så I kan få hjælp, hvis I har brug for det.    
God arbejdslyst!

## Om p5js
p5.js er et JavaScript bibliotek, der er baseret på Processing og har en lignende syntaks og funktioner. Det er designet til at gøre det nemt at skrive interaktive og visuelle programmer og er et populært valg for kunstnere, designere og elever. Med p5.js kan du nemt skabe interaktive og visuelle projekter ved hjælp af en enkel og intuitiv syntaks. Det har også en række indbyggede funktioner og biblioteker til at hjælpe med at tegne og animere forme, håndtere input fra mus og tastatur og arbejde med video og lyd.

Du kan prøve at arbejde med p5.js online ved at besøge følgende link: https://editor.p5js.org/

## Om PVector
p5.js har også støtte for vektorklasser, som kan bruges til at repræsentere position, hastighed eller acceleration af objekter i dit program. I stedet for PVector kan man i p5.js bruge createVector() funktionen.

Her er et eksempel på, hvordan man kan oprette en ny vektor i p5.js:
```JavaScript
let position = createVector(10, 20);
```

Her er et eksempel på, hvordan man kan tilføje to vektorer sammen i p5.js:
```JavaScript
let velocity = createVector(2, 3);
position.add(velocity);
```

Se reference for mere information: https://p5js.org/reference/#/p5.Vector

## Udleveret kode

```
let position;
let velocity;

function setup() {
  createCanvas(400, 400);
  position = createVector(width/2, height/2);
  velocity = createVector(2, 3);
}

function draw() {
  background(255);
  position.add(velocity);

  if (position.x > width || position.x < 0) {
    velocity.x = velocity.x * -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y = velocity.y * -1;
  }

  ellipse(position.x, position.y, 20, 20);
}
```
