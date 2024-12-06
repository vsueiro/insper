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

// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
const engine = Engine.create();

// create a renderer
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

// create two boxes and a ground
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);
