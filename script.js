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
        "gare": `<ul><li>Les + belles vues sont dans ses tours</li><li>Les photographes l'adorent (vues, perspectives, street-art, bouffe)</li><li>Seul et unique quartier asiat</li><li>L'un ds derniers quartiers mixtes socialement</li><li>Meilleur quartier de Paris (j'y habite, vous pouvez me faire confiance)</li></ul>`,
        "pere-lachaise": `<ul><li>Le Père-Lachaise est objectivement le cimetière le + ouf de Paris</li><li>Les admirateurs de la Commune y sont chaque année (+500 points)</li><li>Saint-Sauveur</li><li>Plein de lieux sympas (bars, restos, théâtre de La Colline, rues etc.)</li></ul>`,
        "villette": `<ul><li>Le canal est BEAU</li><li>Des cinés, des bars, des grecs, le Centquatre, des grandes tours etc. etc.</li><li>Les prix des loyers permettent aux gens normaux d'y habiter encore un peu</li><li>La gentrification ne passera pas (trop) par là (on a le droit de rêver, nan ?)</li></ul>`,
        "maison-blanche": `<ul><li>Butte-aux-Cailles = quartier sous-coté pour sortir en termes de restos et bars</li><li>Siège des Amis de la Commune (+1500 points)</li><li>Quartier de la poterne injustement méconnu même si un peu mort</li><li>Commerces de bouches de haute qualité</li><li>Trois parcs dingos</li></ul>`,
        "halles": `<ul><li>Si Paris avait un centre symbolique, ce serait celui-là</li><li>Trois lignes de RER = on rigole plus qu'ailleurs</li><li>Capitale délocalisée de la banlieue (ça ennuie les droitards donc + 300 points)</li><li>600 restos + bars</li><li>Paris EST sa banlieue donc top 5, oui.</li></ul>`,
        "amerique": `<ul><li>La Mouzaïa, rêve des Instragameurs et des Parisiens qui aimeraient une maison (avec 5 m2 de jardin). Et c'est beau.</li><li>Parc de la butte-du-Chapeau-Rouge = Jaurès</li><li>On peut y manger pour des prix normaux, presque y habiter aussi</li><li>Glorieuse place des Fêtes</li></ul>`,
        "notre-dame": `<ul><li>Je veux bien privilégier le Paris populairo-bobo, mais deux îles irréelles et magnifiques là, je cède</li><li>Place LOUIS-ARAGON (ceux qui ont lu "Aurélien" y vont en pèlerinage)</li><li>Les quais de Seine pour une soirée romantico-pas chère</li><li>Berthillon (c'est tout)</li></ul>`,
        "clignancourt": `<ul><li>Basilique du Sacré-Cœur = haine de Paris...</li><li>... MAIS square Louise-Michel = amour de Paris</li><li>Des touristes à la pelle...</li><li>... mais qui n'a pas dragué quelqu'un sur ces marches ?</li><li>Restos et bars stylés quand on sort de la Butte</li></ul>`,
        "folie-mericourt": `<ul><li>Le quartier qui se transforme la nuit</li><li>Quand on ne sait pas quoi faire, on peut toujours "aller à Oberkampf"</li><li>Restos de ouf</li><li>Dernière barricade de la Commune de Paris (enfin pas vraiment mais y a une plaque donc +1000 points)</li></ul>`,
        "belleville": `<ul><li>Quartier génial qui voit un Jourdain bobo proche de rues + populaires (je sais pas si c'est bien mais c'est comme ça)</li><li>Le parc de Belleville est sympa (mais trop blindé l'été, soyez honnêtes, arrêtez de trafiquer les angles de vue sur Instagram)</li></ul>`,
        "pont-de-flandre": `<ul><li>Des salles de concert partout</li><li>Ambiance dans le Parc de la Villette géniale, surtout l'été</li><li>La Cité des enfants a sauvé la vie de milliers de parents franciliens</li><li>La débile rue de grands magasins à Rosa Parks lui fait louper le top 10</li></ul>`,
        "saint-merri": `<ul><li>L'église de Saint-Merri est dingue et l'histoire de Médéric/Merri géniale (numéro 2 derrière Sainte-Geneviève)</li><li>L'Hôtel de ville et sa place sont juste trop belles</li><li>Place de GREVE</li><li>Partie du Marais assez sympa</li></ul>`,
        "porte-saint-martin": `<ul><li>Les quais du canal sont drôles (et beau en hiver le matin)</li><li>On va dire que Répu est dans ce quartier (elle est dans 4 en fait) et donc ben c'est mortel depuis ses travaux (pas assez d'arbres mais les voitures ont jarté)</li><li>On y mange bien</li></ul>`,
        "palais-royal": `<ul><li>Perspective magique de l'avenue de l'Opéra</li><li>Jardin du Palais royal injustement moins connu que d'autres</li><li>Comédie-Française et colonnes de Buren</li><li>Plus chiant que ses voisins mais tellement beau</li><li>Moitié des restos du quartier japonais</li></ul>`,
        "quinze-vingts": `<ul><li>Quartier d'Aligre toujours bien sympa</li><li>Marché d'Aligre = ROI</li><li>La gare de Lyon est BELLE</li><li>Deux hôpitaux qui prennent de la place et pourtant il y a de la vie</li></ul>`,
        "porte-saint-denis": `<ul><li>L'un des quartiers les plus sympas pour sortir le soir à Paris</li><li>Restos turques, kurdes ou syriens dingos</li><li>Si t'y habites, vaut mieux avoir du triple vitrage (ou ne revenir qu'à 2 heures du matin)</li></ul>`,
        "roquette": `<ul><li>Enormément de bons restos</li><li>Seul endroit de Paris où tu peux te faire recaler de 5 bars de suite</li><li>Théorème de la rue de Lappe : "Si tu restes une heure dehors dans cette rue, tu assisteras au moins à une bagarre à partir de 22 heures" (donc endroit drôle)</li></ul>`,
        "saint-victor": `<ul><li>Parmi les plus beaux quais de Seine, ambiance dingo le soir avec tous les danseurs</li><li>Quelques restos pas mal</li><li>Arènes de Lutèce trop sous-cotées</li></ul>`,
        "batignolles": `<ul><li>Des restos assez ouf (le quartier va de l'autre côté des voies)</li><li>Quand on surplombe les voies de Saint-Lazare, c'est cool</li><li>Le parc des Batignolles est mignon</li><li>Si la gentrification achevée à Paris avait un nom, ce serait Batignolles</li></ul>`,
        "sainte-marguerite": `<ul><li>L'un des endroits les + chouettes de Paris pour manger le soir (si on veut lâcher 30 euros et qu'on prend pas d'alcool)</li><li>Les crêpes jusqu'au bout de la nuit</li><li>Pourquoi sa partie de la place de la Nation a + de gens bizarres que celle d'en face ?</li></ul>`
        // ... Pensez à compléter pour les 80 quartiers si vous voulez que tous aient une description !
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
        if (r > 255) r = 255; // CORRIGÉ
        else if (r < 0) r = 0;
        let b = ((num >> 8) & 0x00FF) + amount;
        if (b > 255) b = 255; // CORRIGÉ
        else if (b < 0) b = 0;
        let g = (num & 0x0000FF) + amount;
        if (g > 255) g = 255; // CORRIGÉ
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
                var feature = item.geom; // item.geom est la Feature GeoJSON
                if (!feature.properties) { feature.properties = {}; }
                // Copier les propriétés de haut niveau de 'item' dans 'feature.properties'
                feature.properties.l_qu = item.l_qu || "Nom Indisponible";
                feature.properties.c_ar = parseInt(item.c_ar, 10);
                feature.properties.c_qu = String(item.c_qu); // Assurer que c_qu est une chaîne pour le tri
                feature.properties.c_quinsee = item.c_quinsee; // Important pour l'identification unique
                // feature.properties.habitants = item.habitants; // Décommentez si vous avez les habitants
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

        })
        .catch(error => {
            console.error('Erreur finale dans le traitement GeoJSON:', error);
            var mapDiv = document.getElementById('map');
            if (mapDiv) { // Vérifier que mapDiv existe
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