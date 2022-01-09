
// Create layers for the base map
let street= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})

// Create a basemap object
let baseMaps={
"Street Map": street,
"Topographic Map": top
};

// Create an overlaymaps object
let towers=[]

let overlayMaps={
"Towers": towers
};

// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [street,towers]
});

// Add layers to our map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false,
  options: {
    position: 'topright'
}
}).addTo(myMap)


// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method
for (var i = 0; i < html_results.length; i++) {
  console.log(i.lat)
  L.marker([i.lat,i.lon])
    .bindPopup(`<h1>${i.cell}</h3>`)
    .addTo(myMap);
}