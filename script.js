// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialiser la carte Leaflet
    // Le conteneur de la carte a l'ID 'map' (défini dans index.html)
    // setView([latitude, longitude], zoomLevel)
    // Coordonnées approximatives du centre de Paris, zoom initial
    var map = L.map('map').setView([48.8566, 2.3522], 12);

    // 2. Ajouter un fond de carte (Tile Layer)
    // OpenStreetMap est une option populaire et gratuite
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Pour l'instant, c'est tout. Nous ajouterons les quartiers ensuite.
    console.log("Carte Leaflet initialisée !");

});