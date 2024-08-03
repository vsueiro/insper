class Bolinha {
  constructor() {
    this.x = random(0, 300);
    this.y = random(0, 200);

    this.passoX = random(-1, 1);
    this.passoY = random(-1, 1);
  }

  atualiza() {
    this.x = this.x + this.passoX;
    this.y = this.y + this.passoY;

    // Checar se bati nas paredes e ir pro outro lado
  }

  desenha() {
    circle(this.x, this.y, 6);
  }
}

let bolinhas = [];

function setup() {
  createCanvas(300, 200);
  noStroke();
  fill("#aac6ca");

  for (let i = 0; i < 400; i++) {
    let bolinha = new Bolinha();
    bolinhas.push(bolinha);
  }
}

function draw() {
  background("rgba(255,255,255,1)");

  for (let bolinha of bolinhas) {
    bolinha.atualiza();
    bolinha.desenha();
  }
}
