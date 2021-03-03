//códigos dos carrinhos
let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [40, 96, 146, 210, 270, 318];
let velocidadeDosCarrinhos = [2, 2.5, 3.2, 5, 3, 4];
  
function mostraCarrinhos() {
  for (let i = 0; i < imagemCarros.length; i ++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }  
}

function movimentaCarrinho() {
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeDosCarrinhos[i];
  } 
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i ++) {
    if(saiuDaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function saiuDaTela(xCarros) {
  
  return xCarros < -50
}