// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
let myMap = L.map("map", {
center: [37.09, -95.71],
zoom: 5 
});

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method
// Create a new marker cluster group.

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ', ' + year;
  return time;
}

// let markers = L.markerClusterGroup();

// Loop through the data.
for (let i = 0; i < html_results.length; i++) {

  let color = "";
  if (html_results[i].radio == "CDMA") {
    color = "yellow";
  }
  else if (html_results[i].radio == "GSM") {
    color = "blue";
  }
  else if (html_results[i].radio == "LTE") {
    color = "red";
  }
  else {
    color = "green";
  }

  // Add a new marker to the cluster group, and bind a popup.
  L.circle([html_results[i].lat, html_results[i].lon],{
    color:color,
    fillColor:color,
    fillOpacity:0.75,
    radius:100})
    .bindPopup(`<p><b>Mobile Country Code:</b> ${html_results[i].mcc}<br>
    <b>Network:</b> ${html_results[i].net}<br>
    <b>Cell Tower ID:</b> ${html_results[i].cell}<br>
    <b>Radio Type:</b> ${html_results[i].radio}<hr>
    <b>Latitude:</b> ${html_results[i].lat}<br>
    <b>Longitude:</b> ${html_results[i].lon}<br>
    <b>Range:</b> ${html_results[i].range} m<hr>
    <b>Created:</b> ${timeConverter(html_results[i].created)}<br>
    <b>Updated:</b> ${timeConverter(html_results[i].updated)}</p>`).addTo(myMap);
}

// Add our marker cluster layer to the map.
// myMap.addLayer(markers);
