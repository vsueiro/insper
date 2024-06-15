let url = "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=";

async function buscarURL() {
  let local = campo.value;
  let resposta = await fetch(url + local);
  let dados = await resposta.json();

  let texto = dados[0].display_name;
  // let texto = dados[0].lat + ", " + dados[0].lon;

  resultado.textContent = texto;

  console.log(dados);
}
