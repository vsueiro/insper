let largura = 600;
let altura = 400;
let bolinhas = [];

class Bolinha {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.passoX = random(-4, 4);
    this.passoY = random(-4, 4);

    this.diametro = 16;
    this.raio = this.diametro / 2;
  }

  atualizaX() {
    this.x += this.passoX;

    let bateuNaDireita = this.x + this.raio >= largura;
    let bateuNaEsquerda = this.x - this.raio <= 0;

    if (bateuNaDireita) {
      this.x = largura - this.raio;
      this.passoX *= -1;
    }

    if (bateuNaEsquerda) {
      this.x = this.raio;
      this.passoX *= -1;
    }
  }

  atualizaY() {
    this.y += this.passoY;

    let bateuEmbaixo = this.y + this.raio >= altura;
    let bateuEmCima = this.y - this.raio <= 0;

    if (bateuEmbaixo) {
      this.y = altura - this.raio;
      this.passoY *= -1;
    }

    if (bateuEmCima) {
      this.y = this.raio;
      this.passoY *= -1;
    }
  }

  desenha() {
    circle(this.x, this.y, this.diametro);
  }

  atualiza() {
    this.atualizaX();
    this.atualizaY();
    this.desenha();
  }
}

function setup() {
  createCanvas(largura, altura);
  noStroke();
  fill("#aac6ca");

  let bolinha = new Bolinha(0, 0);
  bolinhas.push(bolinha);
}

function draw() {
  background("rgba(255,255,255,.25)");

  for (let bolinha of bolinhas) {
    bolinha.atualiza();
  }
}

function mouseClicked() {
  let bolinha = new Bolinha(mouseX, mouseY);
  bolinhas.push(bolinha);
}
