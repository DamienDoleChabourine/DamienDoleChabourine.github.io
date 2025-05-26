// Le code principal s'exécute une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', function () {

    // --- VARIABLES QUI SERONT UTILISÉES DANS CE SCOPE ---
    var map;
    var quartiersLayer;
    var quartiersData;
    var userMarker;

    // --- CONFIGURATION DES COULEURS ---
    const arrondissementColors = {
        1: '#d44a7a', 2: '#5ad44a', 3: '#4a7ad4', 4: '#d4a04a',
        5: '#4ad4c1', 6: '#a04ad4', 7: '#d4d44a', 8: '#4a91d4',
        9: '#d44a4a', 10: '#4ad47a', 11: '#7a4ad4', 12: '#d47a4a',
        13: '#4a9fd4', 14: '#d44ac1', 15: '#7ad44a', 16: '#4a4ad4',
        17: '#c1d44a', 18: '#d44a91', 19: '#4ad4a0', 20: '#d4a0d4',
        'default': '#cccccc' // Couleur par défaut si un arrondissement n'est pas trouvé
    };

    // --- FONCTIONS UTILITAIRES ---

    // Fonction pour ajuster la luminosité d'une couleur HEX
    function adjustColor(color, amount) {
        let usePound = false;
        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }
        const num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;

        let b = ((num >> 8) & 0x00FF) + amount;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;

        let g = (num & 0x0000FF) + amount;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
    }

    // Fonction de style principale pour les polygones des quartiers
    function styleQuartier(feature) {
        // ... (le reste de la fonction styleQuartier comme dans l'exemple précédent)
        const arrondissement = feature.properties.c_ar;
        const codeQuartier = feature.properties.c_qu;
        let baseColor = arrondissementColors[arrondissement] || arrondissementColors['default'];

        if (!quartiersData || !quartiersData.features) {
            return { fillColor: arrondissementColors['default'], weight: 1, opacity: 1, color: 'white', fillOpacity: 0.5 };
        }

        const quartiersDeLArrondissement = quartiersData.features
            .filter(f => f.properties.c_ar === arrondissement)
            .sort((a, b) => (String(a.properties.c_qu) || "").localeCompare(String(b.properties.c_qu) || ""));

        let quartierRank = quartiersDeLArrondissement.findIndex(q => q.properties.c_qu === codeQuartier);
        if (quartierRank === -1) quartierRank = 0;

        let teinteAdjustment = -60 + (quartierRank * 40);
        if (quartierRank > 3) teinteAdjustment = 60;

        let finalColor = adjustColor(baseColor, teinteAdjustment);

        return {
            fillColor: finalColor,
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    // Données textuelles pour les popups (à compléter pour les 80 quartiers)
    const descriptionsQuartiers = {
        "gare": `<ul><li>Les + belles vues sont dans ses tours</li><li>...</li></ul>`,
        "pere-lachaise": `<ul><li>Le Père-Lachaise est objectivement le cimetière le + ouf de Paris</li><li>...</li></ul>`,
        // ... AJOUTEZ TOUTES VOS DESCRIPTIONS ICI ...
        "sainte-marguerite": `<ul><li>L'un des endroits les + chouettes de Paris...</li><li>...</li></ul>`
    };


    // --- INITIALISATION DE LA CARTE ---
    map = L.map('map').setView([48.8566, 2.3522], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Carte Leaflet initialisée.");


    // --- CHARGEMENT ET AFFICHAGE DES QUARTIERS ---
    fetch('data/quartier_paris.json')
        .then(response => {
            // ... (code du fetch comme dans l'exemple précédent)
        })
        .then(rawData => {
            // ... (transformation de rawData en FeatureCollection, assignation à quartiersData)
            var features = rawData.map(function(item) {
                var feature = item.geom;
                if (!feature.properties) {
                    feature.properties = {};
                }
                feature.properties.l_qu = item.l_qu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.c_ar, 10);
                feature.properties.c_qu = String(item.c_qu);
                feature.properties.c_quinsee = item.c_quinsee;
                // feature.properties.habitants = item.habitants;
                return feature;
            });

            quartiersData = {
                "type": "FeatureCollection",
                "features": features
            };
            console.log("Données des quartiers transformées:", quartiersData);

            quartiersLayer = L.geoJSON(quartiersData, {
                style: styleQuartier,
                onEachFeature: function(feature, layer) {
                    // ... (votre logique onEachFeature pour les popups, mouseover, mouseout, click)
                    var props = feature.properties;
                    var nomQuartier = props.l_qu || "Nom Indisponible";
                    var arrondissement = props.c_ar || "N/A";
                    var nomPourLienEtImage = (nomQuartier).toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, '-')
                        .replace(/[.'()]/g, '')
                        .replace(/[^a-z0-9-]/g, '');
                    var imagePath = 'images/' + nomPourLienEtImage + '.jpg';
                    var articlePath = 'articles/' + nomPourLienEtImage + '.html';
                    var descriptionHtml = descriptionsQuartiers[nomPourLienEtImage] || "<p>Informations à venir.</p>";
                    var popupContent = `
                        <div class="custom-popup">
                            <div class="popup-image-container">
                                <img src="${imagePath}" alt="${nomQuartier}" style="width:100%;" onerror="this.style.display='none'; this.parentElement.innerHTML+='<p style=\\'text-align:center; color:grey;\\'><i>Image non disponible</i></p>';">
                            </div>
                            <div class="popup-text-container">
                                <h3>${nomQuartier} (${arrondissement}<sup>e</sup> arr.)</h3>
                                <div class="quartier-description">${descriptionHtml}</div>
                                <p style="margin-top:10px;"><a href="${articlePath}" target="_blank">Lire l'article →</a></p>
                            </div>
                        </div>`;
                    layer.bindPopup(popupContent, { maxWidth: 350, maxHeight: 400 });
                    layer.on('mouseover', function(e){ e.target.setStyle({ weight: 3, color: '#000', fillOpacity: 0.9 }); if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){e.target.bringToFront();}});
                    layer.on('mouseout', function(e){ e.target.setStyle(styleQuartier(e.target.feature)); });
                    layer.on('click', function(e){ map.fitBounds(e.target.getBounds(), {padding: [50,50]}); });
                }
            }).addTo(map);
            console.log("Couche des quartiers ajoutée.");
        })
        .catch(error => {
            console.error('Erreur GeoJSON:', error);
            document.getElementById('map').innerHTML = '<p style="color:red;text-align:center;">Erreur chargement données quartiers.</p>';
        });

    // --- FONCTIONNALITÉ "OÙ SUIS-JE ?" ---
    const geolocateButton = document.getElementById('geolocate-btn');
    const userQuartierInfoDiv = document.getElementById('user-quartier-info');

    if (geolocateButton) {
        geolocateButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                // ... (code de la géolocalisation comme dans l'exemple précédent)
                if (userQuartierInfoDiv) userQuartierInfoDiv.innerHTML = "Recherche...";
                var geoOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
                navigator.geolocation.getCurrentPosition(showPosition, showError, geoOptions);
            } else {
                if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = "Géoloc non supportée.";
                alert("Géolocalisation non supportée.");
            }
        });
    }

    function showPosition(position) {
        // ... (code de showPosition comme avant)
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        if (userMarker) map.removeLayer(userMarker);
        userMarker = L.marker([lat, lng]).addTo(map).bindPopup("Vous êtes ici !").openPopup();
        map.setView([lat, lng], 15);
        findUserQuartier(lat, lng);
    }

    function showError(error) {
        // ... (code de showError comme avant)
        let message = "Erreur géoloc: ";
        switch(error.code) {
            case error.PERMISSION_DENIED: message += "Permission refusée."; break;
            case error.POSITION_UNAVAILABLE: message += "Position indisponible."; break;
            case error.TIMEOUT: message += "Timeout."; break;
            default: message += "Erreur inconnue."; break;
        }
        if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = message;
        console.error(message, error);
        alert(message);
    }

    function findUserQuartier(lat, lng) {
        // ... (code de findUserQuartier comme avant, utilisant styleQuartier pour le reset)
        if (!quartiersData || !quartiersData.features || !quartiersLayer) {
            if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = "Données quartiers non chargées.";
            return;
        }
        var userPoint = turf.point([lng, lat]);
        var foundQuartierName = null;
        var foundQuartierFeature = null;

        quartiersLayer.eachLayer(function(layer) {
            layer.setStyle(styleQuartier(layer.feature));
        });

        for (var i = 0; i < quartiersData.features.length; i++) {
            var qFeature = quartiersData.features[i];
            if (turf.booleanPointInPolygon(userPoint, qFeature.geometry)) {
                foundQuartierFeature = qFeature;
                foundQuartierName = qFeature.properties.l_qu || "Quartier inconnu";
                break;
            }
        }

        if (foundQuartierFeature && userQuartierInfoDiv) {
            userQuartierInfoDiv.innerHTML = `Vous êtes : <strong>${foundQuartierName}</strong> (${foundQuartierFeature.properties.c_ar}<sup>e</sup>).`;
            quartiersLayer.eachLayer(function(layer) {
                if (layer.feature.properties.c_quinsee === foundQuartierFeature.properties.c_quinsee) {
                    layer.setStyle({ fillColor: '#ffc107', fillOpacity: 0.8, weight: 3, color: '#000' });
                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) { layer.bringToFront(); }
                }
            });
        } else if (userQuartierInfoDiv) {
            userQuartierInfoDiv.textContent = "Hors de Paris ou quartier non détecté.";
        }
    }

}); // Fin de DOMContentLoaded