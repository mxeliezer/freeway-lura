//Carro1 = verde, Carro2 = preto, Carro3 = amarelo, 
//Carro4 = vermelho, Carro5 = azul Carro6 = cinza
//código carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [43,160,320,220,98,265];
let velocidadeCarros = [4,5,3,6,3.5,2.5];
let comprimentoCarros = 60;
let larguraCarros = 30;

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, larguraCarros);
  }
}

function moveCarros(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function loopCarros(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    if (passouTela(xCarros[i])){
      xCarros[i] = 610;
    }
  }
}

function passouTela(xCarros){
  return xCarros < -50;
}