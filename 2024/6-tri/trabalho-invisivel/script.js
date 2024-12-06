// Quiz

const jogo = document.querySelector("#jogo");
const elementos = document.querySelectorAll(".etapa");
const forms = document.querySelectorAll("form");
const ranges = document.querySelectorAll('input[type="range"]');

let etapa = 0;

forms.forEach((form) => {
  form.onsubmit = (event) => {
    event.preventDefault();
    checar(form, event.submitter);
  };
});

function checar(form, button) {
  const formData = button ? new FormData(form, button) : new FormData(form);
  const formProps = Object.fromEntries(formData);
  const resposta = formProps.resposta;
  const correta = resposta === form.dataset.resposta;

  if (correta) {
    alert("Acertou!");
    etapa++;
    mostrarEtapa();
  } else {
    alert("Errou");
  }
}

function mostrarValores() {
  ranges.forEach((range) => {
    const p = range.nextElementSibling;

    range.oninput = () => {
      p.textContent = range.value + "h";
    };
  });
}

mostrarValores();

function mostrarEtapa() {
  elementos.forEach((elemento, indice) => {
    elemento.hidden = indice === etapa ? false : true;
  });
}

mostrarEtapa();

// Matter

// Extrai módulos
const {
  Engine,
  Render,
  Runner,
  Bodies,
  MouseConstraint,
  Mouse,
  Events,
  World,
  Composite,
} = Matter;

// Cria engine
const engine = Engine.create();

// Cria renderer
const render = Render.create({
  element: jogo,
  engine: engine,
  options: {
    height: 640,
    width: 1280,
    background: "transparent",
    wireframes: false,
  },
});

// Inicia renderer
Render.run(render);

// Cria runner
const runner = Runner.create();

// Inicia runner
Runner.run(runner, engine);

// Cria chão
const chao = Bodies.rectangle(640, 640 + 64, 1280, 128, { isStatic: true });

// Adiciona chão ao mundo
Composite.add(engine.world, [chao]);

// Adiciona controles de mouse
const mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(engine.world, mouseConstraint);

// Sincroniza mouse com rendering
render.mouse = mouse;

// Define emojis possíveis
const emojis = ["🧹", "🧦", "🍕", "🩳"];

// Retorna textura de emoji aleatório
function emojiAleatorio() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return `https://emojicdn.elk.sh/${emoji}?style=google`;
}

// Faz um único emoji cair
function cairEmoji() {
  const raio = 80 * 0.75;
  const x = Math.random() * 1280;
  const y = raio * -1;
  const angulo = Math.random() * 2 * Math.PI;

  const circulo = Bodies.circle(x, y, raio, {
    angle: angulo,
    render: {
      sprite: {
        xScale: 1,
        yScale: 1,
        texture: emojiAleatorio(),
      },
    },
  });

  // Adiciona emoji ao mundo
  Composite.add(engine.world, [circulo]);
}

// Cria um emoji a cada 1 segundo
setInterval(cairEmoji, 1000);

// Quando clica no mundo
Events.on(mouseConstraint, "mousedown", () => {
  // Remove o corpo clicado
  if (mouseConstraint.body) {
    World.remove(engine.world, mouseConstraint.body);
  }
});
