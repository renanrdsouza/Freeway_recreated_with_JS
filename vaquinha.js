//variáveis da vaquinha
let yVaquinha = 370;
let xVaquinha = 100;
let colisao = false;
let comprimentoCarro = 50;
let alturaCarro = 40;
let pontos = 0;

function mostraVaquinha() { 
  image(imagemDaVaquinha, xVaquinha, yVaquinha, 28, 28);
}

function movimentaVaquinha() {
  
  if(keyIsDown(UP_ARROW)) {
      yVaquinha -= 2;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeMover()) {
      yVaquinha += 2;
  }
}
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i ++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xVaquinha, yVaquinha, 14)
    if (colisao) {
      colidiu();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        pontos -= 1;
      }
    }
  }
}

function colidiu() {
  yVaquinha = 370;
}

function mostraPonto() {
  textAlign(CENTER);
  textSize(25);
  fill(color(128, 0, 128));
  text(pontos, width / 3, 27);
}

function pontua(){
  if(yVaquinha < 15){
    pontos += 1;
    yVaquinha = 370;
    somDoPonto.play();
  }
}

function pontosMaiorQueZero() {
  return pontos > 0;
}

function podeMover() {
  return yVaquinha < 366;
}