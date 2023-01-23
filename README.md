# Matematik og programmeringsdag 1G
I dag skal vi arbejde med at kombinere matematik og programmering ved at skrive et program i Processing, der simulerer en bold, der bevæger sig rundt på skærmen.
Vi vil bruge PVector for at styre boldens position og hastighed, og vi vil anvende trigonometriske funktioner og matematiske formler for at ændre boldens retning og
hastighed. Opgaverne, som I skal arbejde med, er designet til at give jer mulighed for at eksperimentere med matematiske koncepter og anvende dem i et konkret program.
Der vil være vejledning tilgængelig undervejs, så I kan få hjælp, hvis I har brug for det.    
God arbejdslyst!

## Om Processing

Hjemmeside: https://processing.org/

Processing er et open source-programmeringsmiljø, der er designet til at gøre det nemt at skrive interaktive og visuelle programmer. Det er et populært valg for kunstnere, designere og elever, da det giver mulighed for nemt at skabe interaktive og visuelle projekter.

Processing er baseret på Java-sproget, men har en mere enkel og intuitiv syntaks, der gør det nemmere at komme i gang med at programmere. Det har også en række indbyggede funktioner og biblioteker til at hjælpe med at tegne og animere forme, håndtere input fra mus og tastatur og arbejde med video og lyd.

## Om PVector
Se referencen for mere info : [https://processing.org/reference/PVector.html](https://processing.org/reference/PVector.html)

PVector er en klasse i Processing, som gør det nemt at arbejde med vektorer i dit program. En vektor er en matematisk entitet, der beskriver en retning og en størrelse. I Processing kan du bruge PVector til at repræsentere position, hastighed eller acceleration af objekter i dit program.

Her er et eksempel på, hvordan man kan oprette en ny PVector:
```
PVector position;
position = new PVector(10, 20);
```

Her er et eksempel på, hvordan man kan tilføje to PVectors sammen:
```
PVector velocity;
velocity = new PVector(2, 3);
position.add(velocity);
```

## Udleveret kode

```
PVector position;
PVector velocity;

void setup() {
  size(400, 400);
  position = new PVector(width/2, height/2);
  velocity = new PVector(2, 3);
}

void draw() {
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
