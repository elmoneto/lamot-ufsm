var meuMapa = L.map('mapa').setView([-29.714,-53.720], 13);
var tiles = L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );

tiles.addTo(meuMapa);
var selectedPoint;

var sourceMarker = L.marker([-29.714,-53.720]);
sourceMarker.addTo(meuMapa).bindPopup("I am a green leaf.").openPopup();

//TODO adicionar lógica de query
