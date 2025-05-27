// descriptions_thread.js

const threadDetails = {
    // IMPORTANT : Les clés ici doivent correspondre EXACTEMENT à la propriété feature.properties.l_qu
    // de votre GeoJSON, ou à une version slugifiée si vous préférez faire la correspondance ainsi.
    // Pour l'exemple, je vais utiliser les noms tels qu'ils étaient dans le thread.
    // Vous devrez peut-être ajuster ces clés pour qu'elles correspondent à props.l_qu.

    "Gare": `
        <strong>1er/ Gare, XIIIe :</strong>
        <ul>
            <li>Les + belles vues sont dans ses tours</li>
            <li>Les photographes l'adorent (vues, perspectives, street-art, bouffe)</li>
            <li>Seul et unique quartier asiat</li>
            <li>L'un ds derniers quartiers mixtes socialement</li>
            <li>Meilleur quartier de Paris (j'y habite, vous pouvez me faire confiance)</li>
        </ul>`,
    "Père-Lachaise": `
        <strong>2e/ Père-Lachaise, XXe :</strong>
        <ul>
            <li>Le Père-Lachaise est objectivement le cimetière le + ouf de Paris</li>
            <li>Les admirateurs de la Commune y sont chaque année (+500 points)</li>
            <li>Saint-Sauveur</li>
            <li>Plein de lieux sympas (bars, restos, théâtre de La Colline, rues etc.)</li>
        </ul>`,
    "Villette": `
        <strong>3e/ Villette, XIXe :</strong>
        <ul>
            <li>Le canal est BEAU</li>
            <li>Des cinés, des bars, des grecs, le Centquatre, des grandes tours etc. etc.</li>
            <li>Les prix des loyers permettent aux gens normaux d'y habiter encore un peu</li>
            <li>La gentrification ne passera pas (trop) par là (on a le droit de rêver, nan ?)</li>
        </ul>`,
    "Maison-Blanche": `
        <strong>4e/ Maison-Blanche, XIIIe :</strong>
        <ul>
            <li>Butte-aux-Cailles = quartier sous-coté pour sortir en termes de restos et bars</li>
            <li>Siège des Amis de la Commune (+1500 points)</li>
            <li>Quartier de la poterne injustement méconnu même si un peu mort</li>
            <li>Commerces de bouches de haute qualité</li>
            <li>Trois parcs dingos</li>
        </ul>`,
    "Halles": `
        <strong>5e/ Halles, Ier :</strong>
        <ul>
            <li>Si Paris avait un centre symbolique, ce serait celui-là</li>
            <li>Trois lignes de RER = on rigole plus qu'ailleurs</li>
            <li>Capitale délocalisée de la banlieue (ça ennuie les droitards donc + 300 points)</li>
            <li>600 restos + bars</li>
            <li>Paris EST sa banlieue donc top 5, oui.</li>
        </ul>`,
    "Amérique": `
        <strong>6e/ Amérique, XIXe :</strong>
        <ul>
            <li>La Mouzaïa, rêve des Instragameurs et des Parisiens qui aimeraient une maison (avec 5 m2 de jardin). Et c'est beau.</li>
            <li>Parc de la butte-du-Chapeau-Rouge = Jaurès</li>
            <li>On peut y manger pour des prix normaux, presque y habiter aussi</li>
            <li>Glorieuse place des Fêtes</li>
        </ul>`,
    "Notre-Dame": `
        <strong>7e/ Notre-Dame, IVe :</strong>
        <ul>
            <li>Je veux bien privilégier le Paris populairo-bobo, mais deux îles irréelles et magnifiques là, je cède</li>
            <li>Place LOUIS-ARAGON (ceux qui ont lu "Aurélien" y vont en pèlerinage)</li>
            <li>Les quais de Seine pour une soirée romantico-pas chère</li>
            <li>Berthillon (c'est tout)</li>
        </ul>`,
    "Clignancourt": `
        <strong>8e/ Clignancourt, XVIIIe :</strong>
        <ul>
            <li>Basilique du Sacré-Cœur = haine de Paris...</li>
            <li>... MAIS square Louise-Michel = amour de Paris</li>
            <li>Des touristes à la pelle...</li>
            <li>... mais qui n'a pas dragué quelqu'un sur ces marches ?</li>
            <li>Restos et bars stylés quand on sort de la Butte</li>
        </ul>`,
    "Folie-Méricourt": `
        <strong>9e/ Folie-Méricourt, XIe :</strong>
        <ul>
            <li>Le quartier qui se transforme la nuit</li>
            <li>Quand on ne sait pas quoi faire, on peut toujours "aller à Oberkampf"</li>
            <li>Restos de ouf</li>
            <li>Dernière barricade de la Commune de Paris (enfin pas vraiment mais y a une plaque donc +1000 points)</li>
        </ul>`,
    "Belleville": `
        <strong>10e/ Belleville, XXe :</strong>
        <ul>
            <li>Quartier génial qui voit un Jourdain bobo proche de rues + populaires (je sais pas si c'est bien mais c'est comme ça)</li>
            <li>Le parc de Belleville est sympa (mais trop blindé l'été, soyez honnêtes, arrêtez de trafiquer les angles de vue sur Instagram)</li>
        </ul>`,
    "Pont-de-Flandre": `
        <strong>11e/ Pont-de-Flandre, XIXe :</strong>
        <ul>
            <li>Des salles de concert partout</li>
            <li>Ambiance dans le Parc de la Villette géniale, surtout l'été</li>
            <li>La Cité des enfants a sauvé la vie de milliers de parents franciliens</li>
            <li>La débile rue de grands magasins à Rosa Parks lui fait louper le top 10</li>
        </ul>`,
    "Saint-Merri": `
        <strong>12e/ Saint-Merri, IVe :</strong>
        <ul>
            <li>L'église de Saint-Merri est dingue et l'histoire de Médéric/Merri géniale (numéro 2 derrière Sainte-Geneviève)</li>
            <li>L'Hôtel de ville et sa place sont juste trop belles</li>
            <li>Place de GREVE</li>
            <li>Partie du Marais assez sympa</li>
        </ul>`,
    "Porte Saint-Martin": ` 
        <strong>13e/ Porte Saint-Martin, Xe :</strong>
        <ul>
            <li>Les quais du canal sont drôles (et beau en hiver le matin)</li>
            <li>On va dire que Répu est dans ce quartier (elle est dans 4 en fait) et donc ben c'est mortel depuis ses travaux (pas assez d'arbres mais les voitures ont jarté)</li>
            <li>On y mange bien</li>
        </ul>`,
    "Palais-Royal": `
        <strong>14e/ Palais-Royal, Ier :</strong>
        <ul>
            <li>Perspective magique de l'avenue de l'Opéra</li>
            <li>Jardin du Palais royal injustement moins connu que d'autres</li>
            <li>Comédie-Française et colonnes de Buren</li>
            <li>Plus chiant que ses voisins mais tellement beau</li>
            <li>Moitié des restos du quartier japonais</li>
        </ul>`,
    "Quinze-Vingts": `
        <strong>15e/ Quinze-Vingts, XIIe :</strong>
        <ul>
            <li>Quartier d'Aligre toujours bien sympa</li>
            <li>Marché d'Aligre = ROI</li>
            <li>La gare de Lyon est BELLE</li>
            <li>Deux hôpitaux qui prennent de la place et pourtant il y a de la vie</li>
        </ul>`,
    "Porte Saint-Denis": `
        <strong>16e/ Porte Saint-Denis, Xe :</strong>
        <ul>
            <li>L'un des quartiers les plus sympas pour sortir le soir à Paris</li>
            <li>Restos turques, kurdes ou syriens dingos</li>
            <li>Si t'y habites, vaut mieux avoir du triple vitrage (ou ne revenir qu'à 2 heures du matin)</li>
        </ul>`,
    "Roquette": `
        <strong>17e/ Roquette, XIe :</strong>
        <ul>
            <li>Enormément de bons restos</li>
            <li>Seul endroit de Paris où tu peux te faire recaler de 5 bars de suite</li>
            <li>Théorème de la rue de Lappe : "Si tu restes une heure dehors dans cette rue, tu assisteras au moins à une bagarre à partir de 22 heures" (donc endroit drôle)</li>
        </ul>`,
    "Saint-Victor": `
        <strong>18e/ Saint-Victor, Ve :</strong>
        <ul>
            <li>Parmi les plus beaux quais de Seine, ambiance dingo le soir avec tous les danseurs</li>
            <li>Quelques restos pas mal</li>
            <li>Arènes de Lutèce trop sous-cotées</li>
        </ul>`,
    "Batignolles": `
        <strong>19e/ Batignolles, XVIIe :</strong>
        <ul>
            <li>Des restos assez ouf (le quartier va de l'autre côté des voies)</li>
            <li>Quand on surplombe les voies de Saint-Lazare, c'est cool</li>
            <li>Le parc des Batignolles est mignon</li>
            <li>Si la gentrification achevée à Paris avait un nom, ce serait Batignolles</li>
        </ul>`,
    "Sainte-Marguerite": `
        <strong>20e/ Sainte-Marguerite, XIe :</strong>
        <ul>
            <li>L'un des endroits les + chouettes de Paris pour manger le soir (si on veut lâcher 30 euros et qu'on prend pas d'alcool)</li>
            <li>Les crêpes jusqu'au bout de la nuit</li>
            <li>Pourquoi sa partie de la place de la Nation a + de gens bizarres que celle d'en face ?</li>
        </ul>`
    // Vous devrez AJOUTER les 60 autres quartiers ici, en utilisant
    // la clé exacte qui correspondra à feature.properties.l_qu
    // (ou une version slugifiée si vous normalisez les clés).
    // Pour l'instant, pour les quartiers manquants, le popup affichera le message par défaut.
};