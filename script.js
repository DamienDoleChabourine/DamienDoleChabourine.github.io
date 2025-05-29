// Le code principal s'exécute une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', function () {

    // --- VARIABLES ET CONFIGURATIONS GLOBALES (pour ce scope) ---
    var map;
    var quartiersLayer;
    var quartiersData; // Sera notre FeatureCollection après transformation
    var userMarker;    // Pour le marqueur de l'utilisateur

    const arrondissementColors = {
        1: '#d44a7a',  2: '#7B6E6B',  3: '#4a7ad4',  4: '#d4a04a',
        5: '#DE7F11',  6: '#a04ad4',  7: '#d4d44a',  8: '#4a91d4',
        9: '#d44a4a', 10: '#7a4ad4', 11: '#4ad47a', 12: '#0F39D2',
        13: '#A4181B', 14: '#7ad44a', 15: '#d44ac1', 16: '#4a4ad4',
        17: '#c1d44a', 18: '#d44a91', 19: '#FF4400', 20: '#882D17',
        'default': '#cccccc' // Couleur par défaut
    };

    const descriptionsQuartiers = {
    };


    // --- FONCTIONS UTILITAIRES ---
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

    // (La variable quartierIndexByArrondissement n'est plus nécessaire avec la nouvelle logique de styleQuartier)

    function styleQuartier(feature) {
        const arrondissement = feature.properties.c_ar;
        const codeQuartier = feature.properties.c_qu; // Code du quartier (ex: "29" pour Champs-Elysées)
        let baseColor = arrondissementColors[arrondissement] || arrondissementColors['default'];

        // Assurer que quartiersData (la FeatureCollection) est disponible
        if (!quartiersData || !quartiersData.features) {
            return { fillColor: baseColor, weight: 1, opacity: 1, color: 'white', fillOpacity: 0.5 };
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


    // --- INITIALISATION DE LA CARTE ---
    var southWest = L.latLng(48.70, 2.10); // Point Sud-Ouest (un peu plus large que Paris strict)
var northEast = L.latLng(49.00, 2.65); // Point Nord-Est
var parisBounds = L.latLngBounds(southWest, northEast);

map = L.map('map', {
    // Options de la carte
    maxBounds: parisBounds,         // Limite le défilement à ces bornes
    maxBoundsViscosity: 0.9,        // Rend difficile de sortir des bornes (0.0 à 1.0)
    minZoom: 10,                    // Niveau de zoom minimum (Paris sera encore visible)
    // maxZoom: 18                   // Vous l'avez peut-être déjà sur le tileLayer, mais ici c'est pour la carte
}).setView([48.8566, 2.3522], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Carte Leaflet initialisée.");


   // --- CHARGEMENT ET AFFICHAGE DES QUARTIERS ---
    console.log("Début du fetch pour quartier_paris.json"); // NOUVEAU LOG

    fetch('data/quartier_paris.json')
        .then(response => {
            console.log("Fetch - Première réponse reçue:", response); // NOUVEAU LOG
            if (!response.ok) {
                console.error("Fetch - Erreur réseau:", response.status, response.statusText); // NOUVEAU LOG
                throw new Error('Erreur réseau GeoJSON: ' + response.statusText + ' (' + response.status + ')');
            }
            console.log("Fetch - Réponse OK, tentative de response.json()"); // NOUVEAU LOG
            return response.json(); // Tente de parser la réponse comme JSON
        })
        .then(rawData => {
            console.log("Fetch - Données parsées (rawData):", rawData); // NOUVEAU LOG
            if (rawData === undefined || rawData === null) { // Vérification plus stricte
                console.error("Fetch - rawData est undefined ou null après response.json()");
                throw new TypeError("rawData est invalide après le parsing JSON.");
            }

            // Transformation des données en FeatureCollection
            var features = rawData.map(function(item) {
                if (!item || !item.geom) { // Vérification que item et item.geom existent
                    console.warn("Item ou item.geom manquant dans rawData:", item);
                    return null; // Retourner null pour les items invalides
                }
                var feature = item.geom;
                if (!feature.properties) { feature.properties = {}; }
                feature.properties.l_qu = item.l_qu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.c_ar, 10);
                feature.properties.c_qu = String(item.c_qu);
                feature.properties.c_quinsee = item.c_quinsee;
                return feature;
            }).filter(feature => feature !== null); // Filtrer les features nulles

            if (features.length === 0 && rawData.length > 0) {
                console.error("Aucune feature valide n'a pu être extraite de rawData, vérifiez la structure item.geom.");
            }

            quartiersData = {
                "type": "FeatureCollection",
                "features": features
            };
            console.log("Données des quartiers transformées :", quartiersData); // Ce log est important

            if (!map) { // Vérification que la carte est initialisée
                console.error("L'objet 'map' n'est pas initialisé avant d'ajouter quartiersLayer.");
                return;
            }

            quartiersLayer = L.geoJSON(quartiersData, {
                style: styleQuartier,
                onEachFeature: function(feature, layer) {
    var props = feature.properties;
    var nomQuartierOriginal = props.l_qu || "Nom Indisponible";

var clePourLesRecherches = (nomQuartierOriginal).toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/[.'()]/g, '') // Enlève apostrophes, points, parenthèses
    .replace(/[^a-z0-9-]/g, ''); // Enlève autres caractères non alphanumériques (sauf tiret)

console.log(`Quartier original: "${nomQuartierOriginal}", Clé générée pour les recherches: "${clePourLesRecherches}"`);

var imagePath = 'images/' + clePourLesRecherches + '.jpg';
var articlePath = 'articles/' + clePourLesRecherches + '.html';
var arrondissement = props.c_ar || "N/A";

var descriptionDuThread;
if (typeof threadDetails !== 'undefined' && threadDetails.hasOwnProperty(clePourLesRecherches)) { // << UTILISEZ clePourLesRecherches ICI
    descriptionDuThread = threadDetails[clePourLesRecherches];
    console.log(`Description trouvée dans threadDetails pour la clé "${clePourLesRecherches}".`);
} else {
    descriptionDuThread = `<p><i>(Commentaire pour ${nomQuartierOriginal} non trouvé avec la clé "${clePourLesRecherches}")</i></p>`;
    if (typeof threadDetails !== 'undefined') {
         console.warn(`Clé "${clePourLesRecherches}" (générée depuis "${nomQuartierOriginal}") non trouvée dans threadDetails. Les 10 premières clés dispo sont:`, Object.keys(threadDetails).slice(0, 10));
    } else {
         console.warn(`threadDetails est undefined lors de la recherche pour la clé "${clePourLesRecherches}".`);
    }
}
    
    var popupContent = `
        <div class="custom-popup">
            <div class="popup-image-container">
                <img src="${imagePath}" alt="Image du quartier ${nomQuartierOriginal}" style="width:100%; height:auto; display:block;" onerror="this.outerHTML='<p style=\\'text-align:center; color:grey; padding:10px;\\'><i>Image non disponible pour ${nomQuartierOriginal}</i></p>';">
            </div>
            <div class="popup-text-container">
                <h3>${nomQuartierOriginal} (${arrondissement}<sup>e</sup> arr.)</h3>
                <div class="quartier-description">
                    ${descriptionDuThread}
                </div>
                <p style="margin-top:10px;"><a href="${articlePath}" target="_blank">Lire l'article complet sur ${nomQuartierOriginal} →</a></p>
            </div>
        </div>
    `;

    layer.bindPopup(popupContent, {
        maxWidth: 280,
        maxHeight: 350,
        className: 'custom-leaflet-popup'
    });

    layer.on('mouseover', function (e) {
        var currentLayer = e.target;
        currentLayer.setStyle({ weight: 3, color: '#000', fillOpacity: 0.9 });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            currentLayer.bringToFront();
        }
    });
    layer.on('mouseout', function (e) {
        e.target.setStyle(styleQuartier(e.target.feature));
    });
    layer.on('click', function(e) {
        map.fitBounds(e.target.getBounds(), {padding: [50, 50]});
    });
}
            }).addTo(map);
            console.log("Couche des quartiers ajoutée à la carte."); // Ce log est important
        })
        .catch(error => {
            console.error('Erreur DÉFINITIVE dans le traitement GeoJSON:', error); // Message d'erreur final
            var mapDiv = document.getElementById('map');
            if (mapDiv) {
                 mapDiv.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger/traiter les données des quartiers. (Détails dans la console)</p>';
            }
        });


    // --- FONCTIONNALITÉ "OÙ SUIS-JE ?" ---
    const geolocateButton = document.getElementById('geolocate-btn');
    const userQuartierInfoDiv = document.getElementById('user-quartier-info');

    if (geolocateButton && userQuartierInfoDiv) {
        console.log("Bouton et div d'info trouvés. Attachement de l'écouteur.");
        geolocateButton.addEventListener('click', function() {
            console.log("Clic sur le bouton 'Où suis-je ?' DÉTECTÉ !");
            userQuartierInfoDiv.innerHTML = "Tentative de géolocalisation...";

            if (navigator.geolocation) {
                console.log("navigator.geolocation est supporté.");
                userQuartierInfoDiv.innerHTML = "Recherche de votre position...";
                var geoOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
                navigator.geolocation.getCurrentPosition(showPosition, showError, geoOptions);
            } else {
                console.warn("navigator.geolocation NON supporté.");
                userQuartierInfoDiv.textContent = "La géolocalisation n'est pas supportée par ce navigateur.";
                alert("La géolocalisation n'est pas supportée par ce navigateur.");
            }
        });
    } else {
        console.warn("Bouton de géolocalisation ou div d'info non trouvés dans le DOM.");
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log("Position utilisateur trouvée :", lat, lng);
        if (userMarker) { map.removeLayer(userMarker); }
        userMarker = L.marker([lat, lng]).addTo(map)
            .bindPopup("Vous êtes approximativement ici !")
            .openPopup();
        map.setView([lat, lng], 15);
        findUserQuartier(lat, lng);
    }

    function showError(error) {
        let message = "Impossible d'obtenir votre position : ";
        switch(error.code) {
            case error.PERMISSION_DENIED: message += "Vous avez refusé la demande."; break;
            case error.POSITION_UNAVAILABLE: message += "Position non disponible."; break;
            case error.TIMEOUT: message += "La demande a expiré."; break;
            default: message += "Erreur inconnue."; break;
        }
        if (userQuartierInfoDiv) { userQuartierInfoDiv.textContent = message; }
        console.error("Erreur de géolocalisation:", message, error);
    }

    function findUserQuartier(lat, lng) {
        if (!quartiersData || !quartiersData.features || !quartiersLayer) {
            if (userQuartierInfoDiv) { userQuartierInfoDiv.textContent = "Données quartiers non prêtes."; }
            console.warn("findUserQuartier appelé avant que les données ne soient prêtes.");
            return;
        }
        var userPoint = turf.point([lng, lat]);
        var foundQuartierName = null;
        var foundQuartierArrondissement = null;

        // Pas besoin de réinitialiser les styles ici si on ne les change pas pour la géoloc

        for (var i = 0; i < quartiersData.features.length; i++) {
            var qFeature = quartiersData.features[i];
            if (turf.booleanPointInPolygon(userPoint, qFeature.geometry)) {
                foundQuartierName = qFeature.properties.l_qu || "Quartier inconnu";
                foundQuartierArrondissement = qFeature.properties.c_ar || "N/A";
                break;
            }
        }
        if (foundQuartierName) {
            if (userQuartierInfoDiv) {
                userQuartierInfoDiv.innerHTML = `Vous êtes dans : <strong>${foundQuartierName}</strong> (${foundQuartierArrondissement}<sup>e</sup> arr.).`;
            }
            console.log(`Utilisateur localisé dans : ${foundQuartierName} (${foundQuartierArrondissement}e)`);
        } else {
            if (userQuartierInfoDiv) {
                userQuartierInfoDiv.textContent = "Vous ne semblez pas être dans un quartier de Paris répertorié.";
            }
            console.log("Utilisateur non localisé dans un quartier listé.");
        }
    }
    // --- FIN DE LA FONCTIONNALITÉ "OÙ SUIS-JE ?" ---

}); // Fin de L'UNIQUE DOMContentLoaded