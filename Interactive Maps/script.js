
var map = L.map('map').setView([37.7749, -122.4194], 13); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


var locations = [
    { name: "Golden bridge", lat: 37.8199, lng: -122.4783 },
    { name: "Alcatraz Island", lat: 37.8267, lng: -122.4230 },
    { name: "Union Square", lat: 37.7879, lng: -122.4074 },
    { name: "Fisherman's Wharf", lat: 37.8080, lng: -122.4177 },
    { name: "Chinatown", lat: 37.7941, lng: -122.4078 }
];


var markers = {};
locations.forEach(loc => {
    let marker = L.marker([loc.lat, loc.lng]).addTo(map)
        .bindPopup(`<b>${loc.name}</b>`);
    markers[loc.name.toLowerCase()] = marker;
});


function searchLocation() {
    let searchText = document.getElementById('search-input').value.toLowerCase();
    if (markers[searchText]) {
        map.setView(markers[searchText].getLatLng(), 15);
        markers[searchText].openPopup();
    } else {
        alert("Location not found!");
    }
}
