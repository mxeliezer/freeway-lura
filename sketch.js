function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  moveAtor();
  mostraCarros();
  moveCarros();
  loopCarros();
  colideAtor();
  incluiPontos();
  marcaPontos();
}