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
var ponto;

var sourceMarker = L.marker([-29.714,-53.720],{
    draggable: true
  },)

ponto = sourceMarker.getLatLng();

sourceMarker.on("dragend", function(e){
    ponto = e.target.getLatLng();
});

sourceMarker.addTo(meuMapa);

var mySelect = document.getElementById('tipo_problema');
var x, y;
var myTextArea = document.getElementById('assunto');

const botao = document.getElementById("enviar");
  botao.addEventListener('click', async event => {
    x = mySelect.value;
    y = myTextArea.value;
    console.log(`Valor selecionado: ${x}`);
    console.log(`Texto: ${y}`);
    console.log(`Lat/long do ponto selecionado: ${ponto}`);
    const data = {x, y, ponto};
    options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    }
    const response = await fetch('/api', options);
    const data_json = await response.json();
    console.log(data_json);
    form = document.getElementById("formulario");
    form.reset();
    window.alert("Registrado com sucesso!");
});