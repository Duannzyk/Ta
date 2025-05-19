function setup() {
  createCanvas(400, 400);
}

  let olhoX;
  let olhoY;
  
function draw() {
  background('rgb(120,165,110)');
  fill('#03A9F4');
  stroke('#03A9F4');
  strokeWeight(4);
  circle(200,200,300); //rosto
  fill('white');
   stroke('#A3680D');
  strokeWeight(1);
  circle(250,150,60); //olho esquerdo
  circle(150,150,60); //olho direito
   stroke('#0F2468');
  strokeWeight(4)
  line(150,270,250,235); //boca
  fill('#1D32A3');
   stroke('#0F2468');
  strokeWeight(1); 
  triangle(200,130,170,220,220,220); //nariz
  strokeWeight(4);
  line(123,90,176,113); //sobrancelha esquerda
  line(225,116,276,80); //sobrancelha direita
   stroke('#0f2468'); 
  strokeWeight(1);
   //circle(150, 150, 10); //pupila esquerda
   //circle(250, 150, 10); //pupila direita
  
  //dinossauro
  triangle(174,51,212,49,188,15);
  triangle(214,49,259,60,239,18);
  triangle(259,61,291,79,287,34);
  triangle(292,80,320,108,328,55);
  triangle(321,109,339,139,367,101);
  triangle(339,139,351,179,384,143);
  triangle(351,179,351,227,392,206);
  triangle(351,227,332,277,383,268);
  triangle(332,277,298,318,359,318);
  triangle(298,318,236,350,310,364);
  triangle(174,51,137,65,130,3);
  fill('rgb(45,45,102)');
  triangle(163,56,188,52,172,36);
  triangle(247,58,264,63,260,43);
  triangle(313,99,327,119,333,95);
  triangle(280,328,308,307,317,332);
  triangle(346,240,352,216,367,229);
  triangle(343,150,351,178,363,155);
  fill('white'); //dentinho
  stroke('white');
  triangle(243,239,227,245,240,257);
  
  
  stroke('rgb(45,45,102)'); //cor pupila
  fill('rgb(45,45,102)');
   olhoX = map();

 olhoX = map(mouseX, 0, 400, 130, 170);
olhoY = map(mouseY, 0, 400, 130, 170);

circle(olhoX, olhoY, 10); // nova pupila esquerda
circle(olhoX + 100, olhoY, 10); //nova pupila direita

  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}