//variaveis e listas
let cor;
let valorcor;
let valorcor1 = 1;
let thick = [20, 35, 50, 75, 100];
let thickness = 0;

function setup() {

  //setup das cores
  cor = ["white", "black", "red", "blue", "green", "yellow", "gray", "brown"];
  valorcor = 0;
  
  //setup da área de desenho
  createCanvas(4000, 4000);
  background(cor[valorcor]);
  textSize(20)
}


function draw() {
  
  stroke(cor[valorcor1])
  fill(cor[valorcor1])
  rectMode(CORNER)
  rect(0,0,20,20)
  //checa se o mouse está clicado, se sim, cria um circulo
  if(mouseIsPressed){
    
    stroke(cor[valorcor1])
    fill(cor[valorcor1]);
    circle(mouseX, mouseY, thick[thickness]);
  
  }
  fill("white");
  rect(25,3, 35, 20)
  fill("black")
  text(thick[thickness], 25, 20)
}

//verifica se uma tecla está apertada, se sim verifique qual e mude o efeito 
function keyPressed(){
  if(key === 'c') {
    if(valorcor >= 7){
      valorcor = 0
    }
    else
      valorcor ++
    background(cor[valorcor]);
    return false;
  }
  if(key === 't') {
    if(thickness >= 4){
      thickness = 0
    }
    else
      thickness ++
    return false;
  }
    if(key === 'p') {
    if(valorcor1 >= 7){
      valorcor1 = 0
    }
    else
      valorcor1 ++
    return false;
  }
}
