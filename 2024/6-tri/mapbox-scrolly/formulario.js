// Será um array de longitude e latitude do endereço do usuário
let local;

// Será um geojson gerado pelo Turf
let hectare1;

// Seleciona formulário
const formulario = document.querySelector("#formulario");

// Seleciona campo de endereco
const endereco = document.querySelector("#endereco");

// Manda localizar endereço
formulario.onsubmit = () => {
  localizar();
  return false;
};

async function localizar() {
  console.log(endereco.value);

  const valor = endereco.value.trim();
  const api = "https://nominatim.openstreetmap.org/search";
  const url = `${api}?q=${valor}&format=jsonv2&countrycodes=br&limit=1`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  if (dados.length === 0) {
    alert("Nenhum local encontrado");
    return;
  }

  const { lon, lat } = dados[0];

  // Atualiza local
  local = [Number(lon), Number(lat)];

  // Calcula quadrado de 1 hectare
  hectare1 = quadrado(local, 100);
  // Adiciona o quadrado ao mapa
  map.addSource("hectare1", {
    type: "geojson",
    data: hectare1,
  });
  map.addLayer({
    id: "hectare1",
    type: "fill",
    source: "hectare1",
    layout: {},
    paint: {
      "fill-color": "#ff0000",
      "fill-opacity": 0.5,
    },
  });

  // Adiciona imagem dos ônibus ao mapa
  const imagem = "onibus.png";
  const cantos = hectare1.geometry.coordinates[0].slice(0, 4);
  map.addSource("onibus", {
    type: "image",
    url: imagem,
    coordinates: cantos,
  });

  map.addLayer({
    id: "onibus",
    type: "raster",
    source: "onibus",
    paint: {
      "raster-opacity": 1, // Adjust the transparency
    },
  });
  // });

  // Rola até a narrativa

  location.hash = "";

  setTimeout(() => {
    location.hash = "narrativa";
  }, 100);
}
