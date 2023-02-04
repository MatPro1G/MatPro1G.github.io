# 1G - matematik og programmeringsdag
I dag skal vi arbejde med at kombinere matematik og programmering ved at skrive et program i p5.js, der simulerer en bold, der bevæger sig rundt på skærmen. Vi vil bruge vektorklasserne i p5.js til at styre boldens position og hastighed, og vi vil anvende trigonometriske funktioner og matematiske formler for at ændre boldens retning og hastighed. Opgaverne, som I skal arbejde med, er designet til at give jer mulighed for at eksperimentere med matematiske koncepter og anvende dem i et konkret program. Der vil være vejledning tilgængelig undervejs, så I kan få hjælp, hvis I har brug for det.    
God arbejdslyst!

## om p5js
p5.js er et JavaScript bibliotek, der er baseret på Processing og har en lignende syntaks og funktioner. Det er designet til at gøre det nemt at skrive interaktive og visuelle programmer og er et populært valg for kunstnere, designere og elever. Med p5.js kan du nemt skabe interaktive og visuelle projekter ved hjælp af en enkel og intuitiv syntaks. Det har også en række indbyggede funktioner og biblioteker til at hjælpe med at tegne og animere forme, håndtere input fra mus og tastatur og arbejde med video og lyd.   

## udleveret kode
Koden er en animation af en cirkel, der bevæger sig rundt på skærmen. Cirklen bevæger sig med en bestemt hastighed og vinkel, som kan ændres af brugeren via inputfeltet. Variablerne posX, posY repræsenterer cirklens position på x- og y-aksen, hastighedsvektoren er sat i kartesiske koordinater(velX, velY) og i polære (angle,hast). Hastighedsvektoren kan ændres via inputfeltet 'hastInput' i setup funktionen og i draw funktionen bliver positionen på cirklen opdateret og tegnet på canvas.   

[link til udleveret kode](https://editor.p5js.org/ajrp/sketches/9tmny3Eio)

<!-- [prøv programmet](programmet/index.html) -->

## opgaver
1. Tilføj inputfelter til hastighedsvektorens y-koordinat 
2. Tilføj inputfelter til Hastighedsvektorens vinkel og størrelse. (husk polære input ændrer selvfølgelig kartesisk og omvendt)
3. Tilføj kode, der gør, at bolden bouncer af på væggen ved at ændre hastighedsvektoren.
4. Tilføj et inputfelt, der giver mulighed for at vælge, om bolden skal bounce eller komme igen fra den anden side.
