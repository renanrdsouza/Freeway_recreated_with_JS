//imagens do jogo
let imagemDaEstradinha;
let imagemDaVaquinha;
let imagemDosCarrinhos1;
let imagemDosCarrinhos2;
let imagemDosCarrinhos3;

//sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstradinha =   loadImage("imagens/estrada.png");
  imagemDaVaquinha = loadImage("imagens/ator-1.png");
  imagemDosCarrinhos1 = loadImage("imagens/carro-1.png");
  imagemDosCarrinhos2 = loadImage("imagens/carro-2.png");
  imagemDosCarrinhos3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemDosCarrinhos1, imagemDosCarrinhos2, imagemDosCarrinhos3, imagemDosCarrinhos1, imagemDosCarrinhos2, imagemDosCarrinhos3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}