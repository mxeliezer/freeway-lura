//Sobre Ator
let xAtor = 100;
let yAtor = 364;
let comprimentoAtor = 38;
let larguraAtor = 38;
let velocidadeAtor = 2;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, larguraAtor);
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
  yAtor -= velocidadeAtor;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeseMover()){
    yAtor += velocidadeAtor;
    }
  }
}

// importada biblioteca: collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function colideAtor(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, larguraCarros, xAtor, yAtor, 15);
    if (colisao){
    voltaPosicaoInicialAtor();
    somDaColisao.play();
      if (pontosMaiorqueZero()){
      meusPontos -= 1;
      }
    } 
  }
}

function voltaPosicaoInicialAtor(){
  yAtor = 364;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize (25);
  fill(color(255, 240, 60));
  text(meusPontos, width/5, 25);
}

function marcaPontos(){
  if (yAtor < 10){
  somDoPonto.play();
  meusPontos +=1;
  voltaPosicaoInicialAtor();
  }
}

function pontosMaiorqueZero(){
  return meusPontos > 0;
}

function podeseMover(){
  return yAtor < 365;
}
