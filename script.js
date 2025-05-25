// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialiser la carte Leaflet
    var map = L.map('map').setView([48.8566, 2.3522], 12);

    // 2. Ajouter un fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var quartiersLayer;
    var quartiersData;

    // Couleurs de base pour les 20 arrondissements (vous pouvez les personnaliser)
    // Source: https://medialab.github.io/iwanthue/ (par exemple, pour générer des couleurs distinctes)
    const arrondissementColors = {
        1: '#d44a7a',  2: '#5ad44a',  3: '#4a7ad4',  4: '#d4a04a',
        5: '#FF2F00',  6: '#a04ad4',  7: '#d4d44a',  8: '#4a91d4',
        9: '#d44a4a', 10: '#4ad47a', 11: '#7a4ad4', 12: '#2274a5',
        13: '#D70A0A', 14: '#1FB34E', 15: '#A21DA7', 16: '#4a4ad4',
        17: '#c1d44a', 18: '#FF0000', 19: '#4ad4a0', 20: '#d4a0d4'
    };

    // Fonction pour ajuster la luminosité d'une couleur HEX
    // amount < 0 pour foncer, amount > 0 pour éclaircir
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

    // Pour stocker un index de quartier par arrondissement (pour le dégradé)
    let quartierIndexByArrondissement = {};

    // 3. Charger les données GeoJSON des quartiers
    fetch('data/quartier_paris.json')
        .then(response => response.json())
        .then(data => {
            var features = data.map(function(item) {
                var feature = item.geom;
                if (!feature.properties) {
                    feature.properties = {};
                }
                feature.properties.l_qu = item.l_qu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.c_ar, 10); // Assurez-vous que c_ar est un nombre
                feature.properties.c_qu = item.c_qu; // On aura besoin du code quartier pour le dégradé
                return feature;
            });

            var geoJsonData = {
                "type": "FeatureCollection",
                "features": features
            };

            quartiersData = geoJsonData;
            console.log("Données des quartiers transformées :", quartiersData);

            quartiersLayer = L.geoJSON(quartiersData, {
                style: function(feature) {
                    const arrondissement = feature.properties.c_ar;
                    const codeQuartier = feature.properties.c_qu; // Ou un autre identifiant unique du quartier dans l'arrondissement

                    let baseColor = arrondissementColors[arrondissement] || '#cccccc'; // Couleur par défaut grise

                    // Initialiser le compteur pour cet arrondissement s'il n'existe pas
                    if (!quartierIndexByArrondissement[arrondissement]) {
                        quartierIndexByArrondissement[arrondissement] = 0;
                    }

                    // Obtenir les quartiers de cet arrondissement et les trier (par c_qu par exemple)
                    // pour avoir un ordre consistent pour le dégradé
                    const quartiersDeLArrondissement = quartiersData.features
                        .filter(f => f.properties.c_ar === arrondissement)
                        .sort((a, b) => (a.properties.c_qu || "").localeCompare(b.properties.c_qu || ""));

                    // Trouver l'index de ce quartier dans la liste triée des quartiers de son arrondissement
                    let quartierRank = quartiersDeLArrondissement.findIndex(q => q.properties.c_qu === codeQuartier);
                    if (quartierRank === -1) quartierRank = 0; // fallback

                    // Créer un dégradé simple (4 teintes)
                    // Par exemple, on va de -60 (plus foncé) à +60 (plus clair) par pas de 40
                    // Teinte 0: -60, Teinte 1: -20, Teinte 2: +20, Teinte 3: +60
                    let teinteAdjustment = -60 + (quartierRank * 40);
                    // S'assurer qu'on ne dépasse pas 3 teintes, au cas où il y aurait plus de 4 quartiers par erreur
                    if (quartierRank > 3) teinteAdjustment = 60;


                    let finalColor = adjustColor(baseColor, teinteAdjustment);

                    return {
                        fillColor: finalColor,
                        weight: 1, // Bordure plus fine
                        opacity: 1,
                        color: 'white',
                        fillOpacity: 0.7 // Un peu plus opaque pour mieux voir les couleurs
                    };
                },
                onEachFeature: function(feature, layer) {
    var props = feature.properties; // Raccourci pour accéder aux propriétés
    var nomQuartier = props.l_qu || "Nom Indisponible";
    var arrondissement = props.c_ar || "N/A";

    // Slugifier le nom du quartier pour les liens et noms d'images
    var nomPourLienEtImage = (nomQuartier).toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlever les accents
        .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
        .replace(/[.'()]/g, '') // Enlever apostrophes, points, parenthèses
        .replace(/[^a-z0-9-]/g, ''); // Enlever les caractères non alphanumériques (sauf tiret)

    // Construire le chemin de l'image (adaptez l'extension si besoin, ex: .png)
    var imagePath = 'images/' + nomPourLienEtImage + '.jpg'; // Ou .png, etc.

    // Texte pour le lien vers l'article
    var lienTexte = "En savoir plus sur " + nomQuartier;
    var articlePath = 'articles/' + nomPourLienEtImage + '.html';

    // Contenu HTML pour le popup
    var popupContent = `
        <div class="custom-popup">
            <div class="popup-image-container">
                <img src="${imagePath}" alt="Image du quartier ${nomQuartier}" style="width:100%; height:auto; display:block;">
            </div>
            <div class="popup-text-container">
                <h3>${nomQuartier}</h3>
                <p>Arrondissement : ${arrondissement}</p>
                <p><a href="${articlePath}">Découvrir ce quartier →</a></p>
            </div>
        </div>
    `;

    layer.bindPopup(popupContent, {
        maxWidth: "auto" // Permet au popup de s'adapter à son contenu
        // Vous pouvez aussi définir une largeur fixe si vous préférez, ex: maxWidth: 350
    });

    // ... (le reste de onEachFeature : mouseover, mouseout, click comme avant)
    // Si vous avez une action de clic qui redirige déjà, vous pouvez la laisser
    // ou la commenter si le lien dans le popup suffit.
    // Pour l'instant, le layer.on('click', ...) que vous aviez peut être redondant
    // si le lien dans le popup est ce que vous voulez.
    // Vous pourriez le supprimer ou le modifier pour faire autre chose,
    // comme centrer la carte sur le quartier cliqué.
    /*
    layer.on('click', function(e) {
        // Exemple : centrer la carte sur le polygone cliqué
        // map.fitBounds(e.target.getBounds());
        // alert("Vous avez cliqué sur : " + props.l_qu);
    });
    */
}
            }).addTo(map);

             if (quartiersLayer.getBounds().isValid()) {
                 // map.fitBounds(quartiersLayer.getBounds());
             }
        })
        .catch(error => console.error('Erreur de chargement du GeoJSON:', error));

    // --- DÉBUT DE LA FONCTIONNALITÉ "OÙ SUIS-JE ?" ---

    var userMarker; // Pour garder une référence au marqueur de l'utilisateur
    var previousHighlightedLayer = null; // Pour se souvenir du dernier quartier mis en évidence

    const geolocateButton = document.getElementById('geolocate-btn');
    const userQuartierInfoDiv = document.getElementById('user-quartier-info');

    if (geolocateButton) {
        geolocateButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                // Afficher un message de chargement
                if (userQuartierInfoDiv) {
                    userQuartierInfoDiv.innerHTML = "Recherche de votre position...";
                }
                // Options pour la géolocalisation
                var geoOptions = {
                    enableHighAccuracy: true, // Demander une position plus précise
                    timeout: 10000,           // Attendre 10 secondes maximum
                    maximumAge: 0             // Ne pas utiliser une position en cache
                };
                navigator.geolocation.getCurrentPosition(showPosition, showError, geoOptions);
            } else {
                if (userQuartierInfoDiv) {
                    userQuartierInfoDiv.textContent = "La géolocalisation n'est pas supportée par ce navigateur.";
                }
                alert("La géolocalisation n'est pas supportée par ce navigateur.");
            }
        });
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        console.log("Position utilisateur:", lat, lng);

        // Supprimer l'ancien marqueur s'il existe
        if (userMarker) {
            map.removeLayer(userMarker);
        }

        // Ajouter un nouveau marqueur pour la position de l'utilisateur
        // Utiliser une icône personnalisée si vous le souhaitez
        userMarker = L.marker([lat, lng]).addTo(map)
            .bindPopup("Vous êtes approximativement ici !")
            .openPopup();

        // Centrer la carte sur la position de l'utilisateur
        map.setView([lat, lng], 15); // Zoom plus rapproché (ajustez si besoin)

        // Trouver dans quel quartier se trouve l'utilisateur
        findUserQuartier(lat, lng);
    }

    function showError(error) {
        let message = "Impossible d'obtenir votre position : ";
        switch(error.code) {
            case error.PERMISSION_DENIED:
                message += "Vous avez refusé la demande de géolocalisation.";
                break;
            case error.POSITION_UNAVAILABLE:
                message += "Les informations de localisation ne sont pas disponibles.";
                break;
            case error.TIMEOUT:
                message += "La demande de localisation a expiré.";
                break;
            case error.UNKNOWN_ERROR:
                message += "Une erreur inconnue s'est produite.";
                break;
        }
        if (userQuartierInfoDiv) {
            userQuartierInfoDiv.textContent = message;
        }
        console.error(message, error);
        alert(message);
    }

    function findUserQuartier(lat, lng) {
        if (!quartiersData || !quartiersData.features || !quartiersLayer) {
            if (userQuartierInfoDiv) {
                userQuartierInfoDiv.textContent = "Les données des quartiers ne sont pas encore chargées. Veuillez patienter.";
            }
            return;
        }

        var userPoint = turf.point([lng, lat]); // Turf.js utilise [longitude, latitude]
        var foundQuartierName = null;
        var foundQuartierFeature = null;

        // Réinitialiser le style du quartier précédemment mis en évidence
        if (previousHighlightedLayer) {
            quartiersLayer.resetStyle(previousHighlightedLayer);
            previousHighlightedLayer = null;
        }

        for (var i = 0; i < quartiersData.features.length; i++) {
            var quartierFeature = quartiersData.features[i];
            // turf.booleanPointInPolygon gère les Polygons et les MultiPolygons
            if (turf.booleanPointInPolygon(userPoint, quartierFeature.geometry)) {
                foundQuartierFeature = quartierFeature;
                foundQuartierName = quartierFeature.properties.l_qu || "Quartier inconnu";
                break; // Sortir de la boucle dès qu'un quartier est trouvé
            }
        }

        if (foundQuartierName && userQuartierInfoDiv) {
            userQuartierInfoDiv.innerHTML = `Vous êtes dans le quartier : <strong>${foundQuartierName}</strong> (${foundQuartierFeature.properties.c_ar}<sup>e</sup> arr.).`;

            // Mettre en évidence le quartier trouvé
            quartiersLayer.eachLayer(function(layer) {
                // Comparer une propriété unique pour s'assurer que c'est la bonne feature
                if (layer.feature.properties.c_quinsee === foundQuartierFeature.properties.c_quinsee) {
                    layer.setStyle({
                        fillColor: '#ffc107', // Couleur de mise en évidence (jaune/orange)
                        fillOpacity: 0.8,
                        weight: 3,
                        color: '#000' // Bordure plus épaisse et noire
                    });
                    previousHighlightedLayer = layer; // Se souvenir de cette couche
                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront(); // Mettre le quartier au premier plan
                    }
                }
            });

        } else if (userQuartierInfoDiv) {
            userQuartierInfoDiv.textContent = "Vous ne semblez pas être dans un quartier de Paris répertorié ou la détection a échoué.";
        }
    }
    // --- FIN DE LA FONCTIONNALITÉ "OÙ SUIS-JE ?" ---
});