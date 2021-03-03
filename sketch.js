function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstradinha);
  mostraVaquinha();
  mostraCarrinhos();
  movimentaCarrinho();
  movimentaVaquinha();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  mostraPonto();
  pontua();
}
