/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();







// Creëer de tweede Leaflet-kaart met een willekeurig adres in Duitsland
let map2 = L.map('apMap2').setView([52.5167, 13.3833], 13); // Coördinaten voor Berlijn

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

// Bepaal de rechthoek rondom het opgegeven adres in Duitsland
let bounds2 = [[52.5175, 13.3811], [52.5162, 13.3854]]; // Coördinaten voor een rechthoek rond het opgegeven adres in Berlijn

// Kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds2, {color: "#e60005", weight: 1}).addTo(map2);

// Plaats een marker met als tekst een willekeurig adres in Duitsland
let apMarker2 = L.marker([52.5167, 13.3833]).addTo(map2); // Coördinaten voor Berlijn
apMarker2.bindPopup("<b>Stevens WIFI</b><br>Straat: Wilhelmstraße 1<br>Stad: Berlijn<br>Postcode: 10117<br>Land: Duitsland").openPopup();


















