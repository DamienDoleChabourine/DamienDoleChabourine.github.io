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

    // (L'objet descriptionsQuartiers devrait être ici aussi si vous l'utilisez pour les popups)
    const descriptionsQuartiers = {
        "gare": `<ul><li>Les + belles vues sont dans ses tours</li>...</ul>`,
        // ... VOS 80 DESCRIPTIONS ...
        "sainte-marguerite": `<ul><li>L'un des endroits les + chouettes...</li>...</ul>`
    };


    // --- FONCTIONS UTILITAIRES ---
    function adjustColor(color, amount) {
        // ... (votre code adjustColor existant, il est correct)
        let usePound = false;
        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }
        const num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        if (r > 255) r = 2 de m'avoir fourni tout le code ! J'ai repéré le problème.

Vous avez **deux** blocs `document.addEventListener('DOMContentLoaded', function () { ... });`.

*   Le premier commence au tout début de votre fichier.
*   Le second commence juste avant la section `// --- DÉBUT DE LA FONCTIONNALITÉ "OÙ SUIS-JE ?" ---`.

**Le problème :**

L'écouteur d'événement `DOMContentLoaded` est conçu pour s'exécuter une seule fois, lorsque le document HTML initial est complètement chargé et analysé. Si vous en avez deux, le comportement peut être imprévisible, ou plus probablement, seul le premier s'exécutera de manière à ce que les variables déclarées à l'intérieur soient correctement "scopées" (accessibles) pour tout le code qu'il contient.

Le code pour la géolocalisation (qui attache l'écouteur au bouton) se trouve dans le *deuxième* `DOMContentLoaded`. Si les variables comme `map`, `quartiersData`, `quartiersLayer` sont définies dans le *premier* `DOMContentLoaded`, elles ne seront pas directement accessibles dans le scope du deuxième de la manière dont le code est écrit.

**Solution : Fusionner en un seul `DOMContentLoaded`**

Vous devez avoir **un seul et unique** `document.addEventListener('DOMContentLoaded', function () {55; else if (r < 0) r = 0;
        let b = ((num >> 8) & 0x00FF) + amount;
        if (b > 255) b = 255; else if (b < 0) b = 0;
        let g = (num & 0x0000FF) + amount;
        if (g > 255) g = 255; else if (g < 0) g = 0;
        return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
    }

    let quartierIndexByArrondissement = {}; // Doit être à l'extérieur de styleQuartier si on veut qu'il persiste

    function styleQuartier(feature) {
        // ... (votre code styleQuartier existant, il semble correct, mais assurez-vous
        // que quartierIndexByArrondissement est bien géré si vous l'utilisez pour le dégradé)
        // OU la version plus simple si quartiersData est déjà la FeatureCollection :
        const arrondissement = feature.properties.c_ar;
        const codeQuartier = feature.properties.c_qu;
        let baseColor = arrondissementColors[arrondissement] || arrondissementColors['default'];

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
    map = L.map('map').setView([48.8566, 2.3522], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Carte Leaflet initialisée.");


    // --- CHARGEMENT ET AFFICHAGE DES QUARTIERS ---
    fetch('data/quartier_paris.json')
        .then(response => {
            if (!response.ok) { throw new Error('Erreur réseau GeoJSON: ' + response.statusText); }
            return response.json();
        })
        .then(rawData => { // rawData est le tableau d'objets original de votre JSON
            var features = rawData.map(function(item) {
                var feature = item.geom;
                if (!feature.properties) { feature.properties = {}; }
                feature.properties.l_qu = item.l_ ... });` qui englobe TOUT votre code JavaScript qui interagit avec le DOM ou qui doit s'exécuter après le chargement du DOM.

**Voici la structure corrigée de votre `script.js` :**

```javascript
// Attendre que le DOM soit entièrement chargé UNE SEULE FOIS
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialiser la carte Leaflet
    var map = L.map('map').setView([48.8566, 2.3522], 12);

    // 2. Ajouter un fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    console.log("Carte Leaflet initialisée."); // Log pour vérifier l'initialisation

    var quartiersLayer;
    var quartiersData; // Sera notre FeatureCollection après transformation

    // Couleurs de base pour les 20 arrondissements
    const arrondissementColors = {
        1: '#d44a7a',  2: '#7B6E6B',  3: '#4a7ad4',  4: '#d4a04a',
        5: '#DE7F11',  6: '#a04ad4',  7: '#d4d44a',  8: '#4a91d4',
        9: '#d44a4a', 10: '#7a4ad4', 11: '#4ad47a', 12: '#0F39D2',
        13: '#A4181B', 14: '#7ad44a', 15: '#d44ac1', 16: '#4a4ad4',
        17: '#c1d44a', 18: '#d44a91', 19: '#FF4400', 20: '#882D17',
        'default': '#cccccc' // Ajout d'une couleur par défaut
    };

    // Fonction pour ajuster la luminosité
    function adjustColor(color, amount) {
        let usePound = false;
        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }
        const num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        if (r > 255) r = 255; else if (r < 0) r = 0;
        let b = ((num >> 8) & 0x00FF) + amount;
        if (b > 255) b = 255; else if (b < 0) b = 0;
        let g = (num & 0x0000FF) + amount;
        if (g > 255) g = 255; else if (g < 0) g = 0;
        return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
    }

    // Fonction de style principale pour les quartiers
    function styleQuartier(feature) {
        const arrondissement = feature.properties.c_ar;
        const codeQuartier = feature.properties.c_qu;
        let baseColor = arrondissementColors[arrondissement] || arrondissementColors['default'];

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
    
    // L'objet descriptionsQuartiers (à compléter)
    const descriptionsQuartiers = {
        "gare": `<ul><li>Les + belles vues sont dans ses tours</li>...</ul>`,
        // ... Ajoutez les autres descriptions ici ...
        "sainte-marguerite": `<ul><li>L'un des endroits les + chouettes...</li></ul>`
    };


    // 3. Charger les données GeoJSON des quartiers
    fetch('data/quartier_paris.json')
        .then(response => {
            if (!response.ok) { // Vérification si le fetch a réussi
                throw new Error('Erreur réseau lors du chargement du GeoJSON: ' + response.statusText);
            }
            return response.jsonqu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.c_ar, 10);
                feature.properties.c_qu = String(item.c_qu); // Pour un tri alphabétique fiable
                feature.properties.c_quinsee = item.c_quinsee;
                // feature.properties.habitants = item.habitants; // Si vous les ajoutez
                return feature;
            });

            quartiersData = { // Ceci est maintenant notre FeatureCollection
                "type": "FeatureCollection",
                "features": features
            };
            console.log("Données des quartiers transformées :", quartiersData);

            quartiersLayer = L.geoJSON(quartiersData, {
                style: styleQuartier,
                onEachFeature: function(feature, layer) {
                    var props = feature.properties;
                    var nomQuartier = props.l_qu || "Nom Indisponible";
                    var arrondissement = props.c_ar || "N/A";
                    // var habitants = props.habitants !== undefined ? props.habitants.toLocaleString('fr-FR') : "Donnée non disponible";

                    var nomPourLienEtImage = (nomQuartier).toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, '-')
                        .replace(/[.'()]/g, '')
                        .replace(/[^a-z0-9-]/g, '');

                    var imagePath = 'images/' + nomPourLienEtImage + '.jpg';
                    var articlePath = 'articles/' + nomPourLienEtImage + '.html';
                    var descriptionHtml = descriptionsQuartiers[nomPourLienEtImage] || "<p>Informations sur ce quartier à venir.</p>";

                    var popupContent = `
                        <div class="custom-popup">
                            <div class="popup-image-container">
                                <img src="${imagePath}" alt="Image du quartier ${nomQuartier}" style="width:100%; height:auto; display:block;" onerror="this.style.display='none'; this.parentElement.innerHTML+='<p style=\\'text-align:center; color:grey;\\'><i>Image non disponible</i></p>';">
                            </div>
                            <div class="popup-text-container">
                                <h3>${nomQuartier} (${arrondissement}<sup>e</sup> arr.)</h3>
                                <!-- <p><strong>Population :</strong> ${habitants} habitants</p> -->
                                <div class="quartier-description">${descriptionHtml}</div>
                                <p style="margin-top:10px;"><a href="${articlePath}" target="_blank">Lire l'article complet sur ${nomQuartier} →</a></p>
                            </div>
                        </div>`;
                    layer.bindPopup(popupContent, { maxWidth: 350, maxHeight: 400 });

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
            console.log("Couche des quartiers ajoutée à la carte.");

            // Optionnel: ajuster le zoom pour voir tous les quartiers
            // if (quartiersLayer.getBounds().isValid()) {
            //     map.fitBounds(quartiersLayer.getBounds());
            // }
        })
        .catch(error => {
            console.error('Erreur finale dans le traitement GeoJSON:', error);
            var mapDiv = document.getElementById('map');
            mapDiv.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger/traiter les données des quartiers. (Détails dans la console)</p>';
        });


    // --- DÉBUT DE LA FONCTIONNALITÉ "OÙ SUIS-JE ?" ---
    // (Le code pour la géolocalisation que je vous ai fourni précédemment,
    // y compris la récupération de geolocateButton et userQuartierInfoDiv,
    // l'addEventListener, showPosition, showError, et findUserQuartier)

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

});