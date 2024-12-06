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
