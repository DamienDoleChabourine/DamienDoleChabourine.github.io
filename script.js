DOMContentLoaded', function () {

    // --- VARIABLESa0', 20: '#d4a0d4',
    // Ajoutez une couleur par défaut si un arrondissement n'est pas trouvé
    'default': '#cccccc'
};

// Fonction pour ajuster la luminosité GLOBALES ET CONFIGURATION ---
    var map; // Sera initialisée plus tard
    var quartiersLayer; // d'une couleur HEX
function adjustColor(color, amount) {
    let usePound = false; Pour la couche des quartiers
    var quartiersData;  // Pour stocker les données GeoJSON brutes après transformation
    if (color[0] === "#") {
        color = color.slice(1);
        
    var userMarker; // Pour le marqueur de l'utilisateur
    // var previousHighlightedLayer = nullusePound = true;
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255); // Plus utilisé avec la nouvelle logique de reset

    // Couleurs de base pour les 20 arrondissements ( r = 255; else if (r < 0) r = 0;
    let bpersonnalisez-les !)
    const arrondissementColors = {
        1: '#d44a7a = ((num >> 8) & 0x00FF) + amount;
    if (b >',  2: '#5ad44a',  3: '#4a7ad4',  4: '#d4a04a',
        5: '#4ad4c1',  6: '#a04 255) b = 255; else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amount;
    ifad4',  7: '#d4d44a',  8: '#4a91d4', (g > 255) g = 255; else if (g < 0) g = 0;
    return (usePound ? "#" : "") + String("000000"
        9: '#d44a4a', 10: '#4ad47a', 11: '#7a4ad4', 12: '#d47a4a',
        13 + (g | (b << 8) | (r << 16)).toString(16)).slice: '#4a9fd4', 14: '#d44ac1', 15: '#7(-6);
}

// Fonction de style principale pour les polygones des quartiers
function styleQuartier(feature) {
    const arrondissement = feature.properties.c_ar;
    const codeQuartier =ad44a', 16: '#4a4ad4',
        17: '#c1d44a', 18: '#d44a91', 19: '#4ad4a0',  feature.properties.c_qu; // Code du quartier (ex: "01", "02", etc.)20: '#d4a0d4'
    };

    // Données textuelles pour les pop

    let baseColor = arrondissementColors[arrondissement] || arrondissementColors['default'];

    // Assurer que quartiersData estups (à compléter pour les 80 quartiers)
    const descriptionsQuartiers = {
        "gare": disponible (il le sera après le fetch)
    if (!quartiersData || !quartiersData.features) {
 `<ul><li>Les + belles vues sont dans ses tours</li><li>...</li></ul>`,
        "pere-lachaise        return { fillColor: arrondissementColors['default'], weight: 1, opacity: 1, color: 'white', fill": `<ul><li>Le Père-Lachaise est objectivement le cimetière le + ouf de Paris</li><li>Opacity: 0.5 };
    }

    // Obtenir les quartiers de cet arrondissement et les trier par c_qu (code quartier)
    // pour avoir un ordre constant pour le dégradé.
    const quartiersDe...</li></ul>`,
        // ... AJOUTEZ TOUTES VOS DESCRIPTIONS ICI ...
        "sainte-margLArrondissement = quartiersData.features
        .filter(f => f.properties.c_ar === arrondissementuerite": `<ul><li>L'un des endroits les + chouettes de Paris pour manger le soir...</li><li>...)
        .sort((a, b) => (String(a.properties.c_qu) || "").locale</li></ul>`
    };


    // --- FONCTIONS UTILITAIRES ---

    // Fonction pour ajuster la luminosité d'une couleur HEX
    function adjustColor(color, amount) {
        let usePCompare(String(b.properties.c_qu) || ""));

    // Trouver le rang (0,ound = false;
        if (color[0] === "#") {
            color = color.slice( 1, 2, 3) de ce quartier dans son arrondissement
    let quartierRank = quartiersDeLArrondissement1);
            usePound = true;
        }
        const num = parseInt(color, 1.findIndex(q => q.properties.c_qu === codeQuartier);
    if (quartierRank === -6);
        let r = (num >> 16) + amount;
        if (r > 255) r = 255; else if (r < 0) r = 0;1) quartierRank = 0; // Fallback

    // Ajustement pour le dégradé (4 teintes)
        let b = ((num >> 8) & 0x00FF) + amount;
        if (
    let teinteAdjustment = -60 + (quartierRank * 40); // Ex: -60, -20, +20, +60
    if (quartierRank > 3) teinteAdjustment =b > 255) b = 255; else if (b < 0) b = 60; // Au cas où il y aurait plus de 4 "rangs"

    let finalColor = 0;
        let g = (num & 0x0000FF) + amount;
        if (g > 255) g = 255; else if (g < 0 adjustColor(baseColor, teinteAdjustment);

    return {
        fillColor: finalColor,
        weight) g = 0;
        return (usePound ? "#" : "") + String("000000: 1,
        opacity: 1,
        color: 'white', // Couleur de la bordure
        fillOpacity: 0.7
    };
}


// Objet contenant les descriptions des quartiers (à compléter !)" + (g | (b << 8) | (r << 16)).toString(16)).
const descriptionsQuartiers = {
    "gare": `<ul><li>Les + belles vues sont dans ses tours</li>...slice(-6);
    }

    // Fonction de style principale pour les quartiers
    function styleQuartier(feature) {
        const arrondissement = feature.properties.c_ar;
        const codeQuartier = feature</ul>`,
    "pere-lachaise": `<ul><li>Le Père-Lachaise est objectivement le cim.properties.c_qu;
        let baseColor = arrondissementColors[arrondissement] || '#cccccc';

etière le + ouf de Paris</li>...</ul>`,
    // ... Remplissez ceci pour TOUS les 8        if (!quartiersData || !quartiersData.features) { // quartiersData sera la FeatureCollection
            return { fillColor: '#cccccc', weight: 1, opacity: 1, color: 'white', fillOpacity: 00 quartiers avec leurs noms slugifiés comme clés
    // et le HTML de la description comme valeur.
    "s.5 };
        }

        const quartiersDeLArrondissement = quartiersData.features
            .filter(f =>ainte-marguerite": `
        <ul>
            <li>L'un des endroits les + chouettes de Paris f.properties.c_ar === arrondissement)
            .sort((a, b) => (a.properties.c_ pour manger le soir (si on veut lâcher 30 euros et qu'on prend pas d'alcool)</li>qu || "").localeCompare(b.properties.c_qu || ""));

        let quartierRank = quartiersDeLArrondissement
            <li>Les crêpes jusqu'au bout de la nuit</li>
            <li>Pourquoi sa partie de la place.findIndex(q => q.properties.c_qu === codeQuartier);
        if (quartier de la Nation a + de gens bizarres que celle d'en face ?</li>
        </ul>`
    Rank === -1) quartierRank = 0;

        let teinteAdjustment = -60 + (quartierRank * 40);
        if (quartierRank > 3) teinteAdjustment = 60;

        let finalColor// ... etc.
};


// --- Le code principal s'exécute une fois que le DOM est prêt = adjustColor(baseColor, teinteAdjustment);

        return {
            fillColor: finalColor,
             ---
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialiser la carte Leaflet
weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity:    map = L.map('map').setView([48.8566, 2.35 0.7
        };
    }


    // --- INITIALISATION DE LA CARTE ---
    map22], 12);

    // 2. Ajouter un fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        max = L.map('map').setView([48.8566, 2.3522], 1Zoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 3. Charger les données Geo', {
        maxZoom: 19,
        attribution: '© <a href="http://JSON des quartiers
    fetch('data/quartier_paris.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau lors du chargement du GeoJSON :www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Carte Leaflet initialisée.");


    // --- CHARGEMENT ET AFFICHAGE DES QUARTIERS ---
     ' + response.statusText);
            }
            return response.json();
        })
        .thenfetch('data/quartier_paris.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur réseau lors du chargement du GeoJSON : ' + response(data => { // 'data' est le tableau d'objets original de votre JSON
            // Transformation des données en.statusText);
            }
            return response.json();
        })
        .then(rawData => { // une FeatureCollection valide pour Leaflet
            var features = data.map(function(item) {
                var feature rawData est le tableau d'objets original
            // Transformation des données en FeatureCollection
            var features = raw = item.geom; // item.geom est déjà une Feature GeoJSON
                if (!feature.properties) { //Data.map(function(item) {
                var feature = item.geom; // item.geom EST déjà une Feature Geo S'assurer que properties existe
                    feature.properties = {};
                }
                // Copier les propriétés utilesJSON
                if (!feature.properties) { // S'assurer que feature.properties existe
                    feature.properties = {};
 de l'objet 'item' vers 'feature.properties'
                feature.properties.l_qu = item.                }
                // Copier les propriétés de haut niveau de 'item' dans 'feature.properties'
                feature.l_qu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.properties.l_qu = item.l_qu || "Nom Indisponible";
                feature.properties.c_ar, 10);
                feature.properties.c_qu = String(item.c_qu); //c_ar = parseInt(item.c_ar, 10);
                feature.properties.c_ S'assurer que c_qu est une chaîne pour le tri
                feature.properties.c_quinsee =qu = item.c_qu;
                feature.properties.c_quinsee = item.c_quin item.c_quinsee;
                // feature.properties.habitants = item.habitants; // Décommentez sisee; // Important pour l'identification unique
                // feature.properties.habitants = item.habitants; // Dé vous ajoutez la population
                return feature;
            });

            var geoJsonData = {
                "commentez si vous avez les habitants
                return feature;
            });

            quartiersData = { //type": "FeatureCollection",
                "features": features
            };

            quartiersData = geoJsonData Ceci est maintenant notre FeatureCollection
                "type": "FeatureCollection",
                "features": features
            };; // Stocker la FeatureCollection transformée globalement
            console.log("Données des quartiers transformées et
            console.log("Données des quartiers transformées en FeatureCollection:", quartiersData);

            // Création de la couche prêtes pour Leaflet.");

            quartiersLayer = L.geoJSON(quartiersData, {
                style: styleQuartier, // Utilise la fonction de style définie plus haut
                onEachFeature: function GeoJSON avec les données transformées
            quartiersLayer = L.geoJSON(quartiersData, {
                (feature, layer) {
                    var props = feature.properties;
                    var nomQuartier = propsstyle: styleQuartier, // Utilise la fonction de style définie plus haut
                onEachFeature: function(feature, layer) {
                    var props = feature.properties;
                    var nomQuartier = props.l_.l_qu || "Nom Indisponible";
                    var arrondissement = props.c_ar || "Nqu || "Nom Indisponible";
                    var arrondissement = props.c_ar || "N/A";/A";
                    // var habitants = props.habitants !== undefined ? props.habitants.toLocaleString('fr-FR
                    // var habitants = props.habitants !== undefined ? props.habitants.toLocaleString('fr-FR') : "') : "Donnée non disponible";

                    var nomPourLienEtImage = (nomQuartier).toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g,Donnée non disponible"; // Décommentez si vous avez les habitants

                    var nomPourLienEtImage = ( "")
                        .replace(/\s+/g, '-')
                        .replace(/[.'()]/g, '')
                        nomQuartier).toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, '-')
                        .replace(/[.replace(/[^a-z0-9-]/g, '');

                    var imagePath = 'images/'.'()]/g, '')
                        .replace(/[^a-z0-9-]/g, '');

 + nomPourLienEtImage + '.jpg';
                    var articlePath = 'articles/' + nomPourL                    var imagePath = 'images/' + nomPourLienEtImage + '.jpg';
                    var articlePathienEtImage + '.html';
                    var descriptionHtml = descriptionsQuartiers[nomPourLienEtImage = 'articles/' + nomPourLienEtImage + '.html';
                    var descriptionHtml = descriptionsQuart] || ""; // "<p>Description à venir.</p>";

                    var popupContent = `
                        <diviers[nomPourLienEtImage] || "<p>Informations à venir.</p>";

                    var popupContent = class="custom-popup">
                            <div class="popup-image-container">
                                <img src="${imagePath}" alt="Image du quartier ${nomQuartier}" style="width:100%; height: `
                        <div class="custom-popup">
                            <div class="popup-image-container">
auto; display:block;" onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend                                <img src="${imagePath}" alt="Image du quartier ${nomQuartier}" style="width:100%; height:auto; display:block;" onerror="this.style.display='none'; this.parentElement', '<p style=\\'text-align:center; font-style:italic;\\'>Image non disponible</.innerHTML+='<p style=\\'text-align:center; color:grey;\\'><i>Image non disponible</i>p>');">
                            </div>
                            <div class="popup-text-container">
                                <h3>${nomQuartier} (${arrondissement}<sup>e</sup> arr.)</h3>
                                <!-- <p><strong>Population :</strong></p>';">
                            </div>
                            <div class="popup-text-container">
                                <h3>${ ${habitants} habitants</p> -->
                                <div class="quartier-description">
                                    ${descriptionnomQuartier} (${arrondissement}<sup>e</sup> arr.)</h3>
                                <!-- <p><strong>Population :</strong> ${habitants} habitants</p> -->
                                <div class="quartier-description">
                                    ${descriptionHtml}
Html}
                                </div>
                                <p style="margin-top:10px;"><a href="${article                                </div>
                                <p style="margin-top:10px;"><a href="${articlePath}">LirePath}" target="_blank">Lire l'article complet sur ${nomQuartier} →</a></p>
                            </div>
                        </div>
                    `;
                    layer.bindPopup(popupContent, { maxWidth: 350, maxHeight: l'article complet sur ${nomQuartier} →</a></p>
                            </div>
                        </div>
                    `;
                    layer.bindPopup(popupContent, { maxWidth: 350, maxHeight: 400 400 });

                    layer.on('mouseover', function (e) {
                        var currentLayer = e });

                    layer.on('mouseover', function (e) {
                        var currentLayer = e.target;.target;
                        currentLayer.setStyle({ weight: 3, color: '#000', fillOpacity: 0.9 });
                        if (!L.Browser.ie && !L.Browser.opera && !L.Browser
                        currentLayer.setStyle({ weight: 3, color: '#000', fillOpacity: 0.9 });
                        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                            currentLayer.bringToFront();
                        }
                    });
                    layer.on.edge) {
                            currentLayer.bringToFront();
                        }
                    });
                    layer.on('mouseout', function (e) {
                        // Réapplique le style original calculé
                        e.target.setStyle(style('mouseout', function (e) {
                        // Réapplique le style original calculé pour ce feature
                        e.Quartier(e.target.feature));
                    });

                    layer.on('click', function(e) {
                        map.fitBounds(e.target.getBounds(), {padding: [50, 50]});
                    target.setStyle(styleQuartier(e.target.feature));
                    });
                    layer.on('click', function(e) {
                        map.fitBounds(e.target.getBounds(), {padding:});
                }
            }).addTo(map);

            // Optionnel: ajuster le zoom pour voir tous [50, 50]});
                    });
                }
            }).addTo(map);
            console.log les quartiers
            // if (quartiersLayer.getBounds().isValid()) {
            //     map.fitBounds(("Couche des quartiers ajoutée à la carte.");

        })
        .catch(error => {
            quartiersLayer.getBounds());
            // }
        })
        .catch(error => {
            console.error('Erreur lors du chargement ou du traitement du GeoJSON:', error);
            var mapDiv = document.getElementById('map');
            mapDiv.innerHTML = '<p style="color: red; text-console.error('Erreur lors du chargement ou du traitement du GeoJSON:', error);
            var mapDiv = document.getElementById('map');
            mapDiv.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger/traiter les données des quartiers. Vérifiez la console.</p>';
        align: center;">Impossible de charger les données des quartiers. Vérifiez la console.</p>';
        });

    //});


    // --- FONCTIONNALITÉ "OÙ SUIS-JE ?" ---
    const geolocateButton = document.getElementById('geolocate-btn');
    const userQuartierInfoDiv = document.getElementById('user --- Logique pour le bouton "Où suis-je ?" ---
    const geolocateButton = document.getElementById('ge-quartier-info');

    if (geolocateButton) {
        geolocateButton.addEventListenerolocate-btn');
    const userQuartierInfoDiv = document.getElementById('user-quartier-info');

    if (geolocateButton) {
        geolocateButton.addEventListener('click', function('click', function() {
            if (navigator.geolocation) {
                if (userQuartierInfo() {
            if (navigator.geolocation) {
                if (userQuartierInfoDiv) userQuartierInfoDiv.innerHTML = "Recherche de votre position...";
                var geoOptions = { enableHighAccuracyDiv) userQuartierInfoDiv.innerHTML = "Recherche de votre position...";
                var geoOptions = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
                : true, timeout: 10000, maximumAge: 0 };
                navigator.geolocation.navigator.geolocation.getCurrentPosition(showPosition, showError, geoOptions);
            } else {
                if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = "Géolocalisation non supportée.";
getCurrentPosition(showPosition, showError, geoOptions);
            } else {
                if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = "La géolocalisation n'est pas supportée                alert("La géolocalisation n'est pas supportée par ce navigateur.");
            }
        });
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
.";
                alert("La géolocalisation n'est pas supportée par ce navigateur.");
            }
        });
    }

    function showPosition(position) {
        var lat = position.coords.latitude;        var lng = position.coords.longitude;
        console.log("Position utilisateur:", lat, lng);

        if (userMarker) map.removeLayer(userMarker);
        userMarker = L.marker([lat
        var lng = position.coords.longitude;

        if (userMarker) map.removeLayer(userMarker);
        userMarker = L.marker([lat, lng]).addTo(map)
            .bindPopup("Vous, lng]).addTo(map)
            .bindPopup("Vous êtes approximativement ici !")
            .openPopup();
        map.setView([lat, lng], 15);
        findUserQuartier(lat êtes approximativement ici !")
            .openPopup();
        map.setView([lat, lng], 15);
        findUserQuartier(lat, lng);
    }

    function showError(error) {
        , lng);
    }

    function showError(error) {
        let message = "Impossible d'obtenir votrelet message = "Impossible d'obtenir votre position : ";
        switch(error.code) {
            case error position : ";
        switch(error.code) {
            case error.PERMISSION_DENIED: message +=.PERMISSION_DENIED: message += "Vous avez refusé la demande."; break;
            case error.POSITION_UNAVAILABLE: message += "Position non disponible."; break;
            case error.TIMEOUT: message += "La "Permission refusée."; break;
            case error.POSITION_UNAVAILABLE: message += "Position indisponible."; break;
 demande a expiré."; break;
            default: message += "Erreur inconnue."; break;
        }
        if            case error.TIMEOUT: message += "Timeout."; break;
            case error.UNKNOWN_ERROR: message += "Erreur inconnue."; break;
        }
        if (userQuartierInfoDiv) userQuartier (userQuartierInfoDiv) userQuartierInfoDiv.textContent = message;
        console.errorInfoDiv.textContent = message;
        console.error(message, error);
        alert(message);
    }

    function findUserQuartier(lat, lng) {
        if (!quartiersData ||(message, error);
        alert(message);
    }

    function findUserQuartier(lat, lng) {
        if (!quartiersData || !quartiersData.features || !quartiersLayer) !quartiersData.features || !quartiersLayer) {
            if (userQuartierInfoDiv) {
            if (userQuartierInfoDiv) userQuartierInfoDiv.textContent = "Données des quartiers non chargées.";
            return;
        }

        var userPoint = turf.point([lng, lat]); userQuartierInfoDiv.textContent = "Données des quartiers non chargées.";
            return;
        }

        var userPoint = turf.point([lng, lat]);
        var foundQuartierName = null;

        var foundQuartierName = null;
        var foundQuartierFeature = null;

                var foundQuartierFeature = null;

        // Réinitialiser le style de TOUS les quartiers à leur style original
        quartiersLayer.eachLayer(function(layer) {
            layer.setStyle(style// Réinitialiser le style de TOUS les quartiers à leur style original
        quartiersLayer.eachLayer(function(layerQuartier(layer.feature));
        });

        for (var i = 0; i < quartiersData.) {
            layer.setStyle(styleQuartier(layer.feature));
        });

        for (var i = 0; i < quartiersData.features.length; i++) {
            var quartierFeature = quartiersData.features.length; i++) {
            var quartierFeature = quartiersData.features[i];
            if (turf.features[i];
            if (turf.booleanPointInPolygon(userPoint, quartierFeature.geometry)) {
                foundQuartierFeature = quartierFeature;
                foundQuartierName = quartierFeature.propertiesbooleanPointInPolygon(userPoint, quartierFeature.geometry)) {
                foundQuartierFeature = quartierFeature;
                foundQuartierName = quartierFeature.properties.l_qu || "Quartier inconnu.l_qu || "Quartier inconnu";
                break;
            }
        }

        if (found";
                break;
            }
        }

        if (foundQuartierFeature && userQuartierInfoDiv) { // Modifié pour vérifier foundQuartierFeature
            userQuartierInfoDiv.innerHTML = `QuartierName && userQuartierInfoDiv) {
            userQuartierInfoDiv.innerHTML = `Vous êtes dans le quartier : <strong>${foundQuartierName}</strong> (${foundQuartierFeature.properties.cVous êtes dans le quartier : <strong>${foundQuartierName}</strong> (${foundQuartierFeature.properties.c_ar}<sup>e</sup> arr.).`;

            // Mettre en évidence le quartier trouvé
            quartiersLayer.eachLayer(function(layer) {
                if (layer.feature.properties.c_quinsee === foundQu_ar}<sup>e</sup> arr.).`;

            // Mettre en évidence le quartier trouvé
            quartiersLayer.eachartierFeature.properties.c_quinsee) { // Utilisez un identifiant unique
                    layer.setStyle({
                        Layer(function(layer) {
                // Utiliser un identifiant unique, c_quinsee est bon sfillColor: '#ffc107', // Jaune pour la mise en évidence
                        fillOpacity: 0'il est dans feature.properties
                if (layer.feature.properties.c_quinsee === foundQuartierFeature.properties.c_quinsee) {
                    layer.setStyle({
                        fillColor: '#ff.8,
                        weight: 3,
                        color: '#000'
                    });
                    c107', // Couleur de mise en évidence (jaune vif)
                        fillOpacity: 0.8,
if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer                        weight: 3,
                        color: '#000'
                    });
                    if (!L.Browser..bringToFront();
                    }
                }
            });
        } else if (userQuartierInfoDiv)ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront {
            userQuartierInfoDiv.textContent = "Vous ne semblez pas être dans un quartier de Paris répertorié.";
        }
    }

}); // Fin de DOMContentLoaded