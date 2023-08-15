var foliumMap = L.map('foliumMap').setView([43.6, 1.4], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(foliumMap);

var existingPoints = [];

function addPoint(lat, lon, name) {
    // Add point to map
    L.marker([lat, lon]).bindPopup(name).addTo(foliumMap);

    // Add point to existingPoints array
    existingPoints.push({ lat: lat, lon: lon, name: name });
}

document.getElementById('addButton').addEventListener('click', function() {
    var lat = parseFloat(document.getElementById('latitude').value);
    var lon = parseFloat(document.getElementById('longitude').value);
    var name = document.getElementById('pointName').value;

    addPoint(lat, lon, name);
});

document.getElementById('saveButton').addEventListener('click', function() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(existingPoints));
    var anchor = document.createElement('a');
    anchor.setAttribute('href', dataStr);
    anchor.setAttribute('download', 'points.json');
    anchor.click();
});
