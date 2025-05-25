// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialiser la carte Leaflet
    var map = L.map('map').setView([48.8566, 2.3522], 12); // Centré sur Paris

    // 2. Ajouter un fond de carte (Tile Layer)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var quartiersLayer; // Variable pour stocker la couche des quartiers
    var quartiersData;  // Variable pour stocker les données GeoJSON brutes

    // 3. Charger les données GeoJSON des quartiers
    // Assurez-vous que le chemin est correct par rapport à votre index.html
    fetch('data/quartier_paris.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau lors du chargement du GeoJSON : ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            quartiersData = data; // Stocker les données pour un usage ultérieur (ex: avec Turf.js)
            console.log("Données des quartiers chargées :", quartiersData);

            // Si votre JSON est un tableau de Features et non une FeatureCollection,
            // il faudra peut-être l'encapsuler :
            // var geoJsonData = { "type": "FeatureCollection", "features": data };
            // Mais essayons d'abord avec 'data' directement. Si Leaflet s'en plaint, on ajustera.

            quartiersLayer = L.geoJSON(data, { // Ou geoJsonData si vous avez fait l'encapsulation
                style: function(feature) {
                    // Style par défaut pour chaque quartier
                    return {
                        fillColor: getRandomColor(), // Une couleur aléatoire pour chaque quartier
                        weight: 2,
                        opacity: 1,
                        color: 'white',  // Couleur de la bordure
                        dashArray: '3',
                        fillOpacity: 0.5
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Actions pour chaque quartier (popup, clic, etc.)
                    var nomQuartier = feature.properties.l_qu || "Nom Indisponible"; // 'l_qu' est le nom du quartier dans votre JSON
                    layer.bindPopup("<b>Quartier :</b> " + nomQuartier + "<br>Arrondissement : " + feature.properties.c_ar);

                    // Optionnel : effet au survol
                    layer.on('mouseover', function (e) {
                        var currentLayer = e.target;
                        currentLayer.setStyle({
                            weight: 3,
                            color: '#666',
                            fillOpacity: 0.7
                        });
                        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                            currentLayer.bringToFront();
                        }
                    });
                    layer.on('mouseout', function (e) {
                        quartiersLayer.resetStyle(e.target); // Réinitialise au style défini dans L.geoJSON
                    });

                    // Gérer le clic sur un quartier (pour rediriger vers une page article)
                    layer.on('click', function(e) {
                        var props = e.target.feature.properties;
                        var nomPourLien = (props.l_qu || "quartier-inconnu").toLowerCase()
                            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlever les accents
                            .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
                            .replace(/[^a-z0-9-]/g, ''); // Enlever les caractères non alphanumériques (sauf tiret)

                        // Alert pour tester, avant de créer les pages articles
                        alert("Vous avez cliqué sur : " + props.l_qu + "\nLien futur : articles/" + nomPourLien + ".html");
                        // Plus tard : window.location.href = 'articles/' + nomPourLien + '.html';
                    });
                }
            }).addTo(map);

            // Ajuster le zoom pour voir tous les quartiers si nécessaire
            if (quartiersLayer.getBounds().isValid()) {
                // map.fitBounds(quartiersLayer.getBounds()); // Décommentez si vous voulez que la carte zoome automatiquement sur les quartiers
            }

        })
        .catch(error => {
            console.error('Erreur lors du chargement ou du traitement du GeoJSON:', error);
            // Afficher une erreur à l'utilisateur si le chargement échoue
            var mapDiv = document.getElementById('map');
            mapDiv.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger les données des quartiers. Veuillez vérifier la console pour plus de détails.</p>';
        });

    // Fonction pour générer une couleur aléatoire (pour la démo)
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Le code pour la géolocalisation ("Où suis-je ?") sera ajouté ici plus tard
    // ...

}); // Fin de DOMContentLoaded