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
        // 'data' est ici votre tableau d'objets [ { ... geom: {Feature} ...}, { ... } ]

        // Transformer les données en une FeatureCollection valide pour Leaflet
        var features = data.map(function(item) {
            // L'objet Feature GeoJSON est dans item.geom
            // Nous devons aussi nous assurer que les propriétés que nous voulons utiliser
            // (comme l_qu, c_ar) sont dans les "properties" de la Feature.
            // Si elles sont au niveau supérieur de 'item', il faut les copier.

            var feature = item.geom; // item.geom EST déjà une Feature

            // Assurons-nous que les propriétés utiles sont bien dans feature.properties
            // Si elles sont dans item et pas dans item.geom.properties, on les copie :
            if (!feature.properties) {
                feature.properties = {};
            }
            feature.properties.l_qu = item.l_qu || "Nom Indisponible";
            feature.properties.c_ar = item.c_ar || "N/A";
            // Ajoutez d'autres propriétés de 'item' que vous voulez transférer ici

            return feature;
        });

        var geoJsonData = {
            "type": "FeatureCollection",
            "features": features
        };

        quartiersData = geoJsonData; // Stocker la FeatureCollection transformée
        console.log("Données des quartiers transformées en FeatureCollection :", quartiersData);

        quartiersLayer = L.geoJSON(quartiersData, { // Utiliser les données transformées
            style: function(feature) {
                // ... (le reste de la fonction style reste pareil) ...
                return {
                    fillColor: getRandomColor(),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.5
                };
            },
            onEachFeature: function(feature, layer) {
                // ... (le reste de onEachFeature reste pareil,
                // MAIS assurez-vous que les propriétés sont accessibles via feature.properties) ...
                var nomQuartier = feature.properties.l_qu || "Nom Indisponible";
                var arrondissement = feature.properties.c_ar || "N/A";
                layer.bindPopup("<b>Quartier :</b> " + nomQuartier + "<br>Arrondissement : " + arrondissement);

                // ... (mouseover, mouseout, click comme avant) ...
            }
        }).addTo(map);

        if (quartiersLayer.getBounds().isValid()) {
            // map.fitBounds(quartiersLayer.getBounds());
        }

    })
    .catch(error => {
        console.error('Erreur lors du chargement ou du traitement du GeoJSON:', error);
        var mapDiv = document.getElementById('map');
        mapDiv.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger/traiter les données des quartiers. Vérifiez la console.</p>';
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