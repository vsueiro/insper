const brasil = [-53.2, -10.3333333];

// Define token de acesso do Mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoidnN1ZWlybyIsImEiOiJja2F4YXgxeG4wNWVqMnZxdGo2YzBwazh1In0.KwE44b2R9axBHzT9ybktoQ";

// Cria mapa
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/vsueiro/cm4hkra7l01sz01qr0egobzep",
  center: brasil,
  zoom: 3,
});

// disable map zoom when using scroll
map.scrollZoom.disable();

// Função para calcular o quadrado usando Turf.js
function quadrado(centro, lado) {
  const metade = lado / 2;
  const diagonal = metade * Math.sqrt(2);

  // Criar pontos nos 4 cantos
  const topLeft = turf.destination(centro, diagonal, -135, { units: "meters" });
  const topRight = turf.destination(centro, diagonal, -45, { units: "meters" });
  const bottomRight = turf.destination(centro, diagonal, 45, { units: "meters" });
  const bottomLeft = turf.destination(centro, diagonal, 135, { units: "meters" });

  // Retornar o polígono
  return turf.polygon([
    [
      topLeft.geometry.coordinates,
      topRight.geometry.coordinates,
      bottomRight.geometry.coordinates,
      bottomLeft.geometry.coordinates,
      topLeft.geometry.coordinates, // Fechar o polígono
    ],
  ]);
}
