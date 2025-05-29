// descriptions_thread.js

const threadDetails = {
    "champs-elysees": `
        <strong>XXe/ Champs-Elysées, VIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "hopital-saint-louis": `
        <strong>XXe/ Hôpital-Saint-Louis, Xe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-thomas-daquin": `
        <strong>XXe/ Saint-Thomas-d'Aquin, VIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "sainte-avoie": `
        <strong>XXe/ Sainte-Avoie, IIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "pere-lachaise": `
        <strong>2e/ Père-Lachaise, XXe :</strong>
        <ul>
            <li>Le Père-Lachaise est objectivement le cimetière le + ouf de Paris</li>
            <li>Les admirateurs de la Commune y sont chaque année (+500 points)</li>
            <li>Saint-Sauveur</li>
            <li>Plein de lieux sympas (bars, restos, théâtre de La Colline, rues etc.)</li>
        </ul>`,
    "folie-mericourt": `
        <strong>9e/ Folie-Méricourt, XIe :</strong>
        <ul>
            <li>Le quartier qui se transforme la nuit</li>
            <li>Quand on ne sait pas quoi faire, on peut toujours "aller à Oberkampf"</li>
            <li>Restos de ouf</li>
            <li>Dernière barricade de la Commune de Paris (enfin pas vraiment mais y a une plaque donc +1000 points)</li>
        </ul>`,
    "saint-gervais": `
        <strong>XXe/ Saint-Gervais, IVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "grandes-carrieres": `
        <strong>XXe/ Grandes-Carrières, XVIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "necker": `
        <strong>XXe/ Necker, XVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-germain-des-pres": `
        <strong>XXe/ Saint-Germain-des-Prés, VIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "javel": `
        <strong>XXe/ Javel, XVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "odeon": `
        <strong>XXe/ Odéon, VIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "porte-saint-martin": `
        <strong>13e/ Porte Saint-Martin, Xe :</strong>
        <ul>
            <li>Les quais du canal sont drôles (et beau en hiver le matin)</li>
            <li>On va dire que Répu est dans ce quartier (elle est dans 4 en fait) et donc ben c'est mortel depuis ses travaux (pas assez d'arbres mais les voitures ont jarté)</li>
            <li>On y mange bien</li>
        </ul>`,
    "goutte-dor": `
        <strong>XXe/ Goutte-d'Or, XVIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "chaussee-dantin": `
        <strong>XXe/ Chaussée-d'Antin, IXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "rochechouart": `
        <strong>XXe/ Rochechouart, IXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "clignancourt": `
        <strong>8e/ Clignancourt, XVIIIe :</strong>
        <ul>
            <li>Basilique du Sacré-Cœur = haine de Paris...</li>
            <li>... MAIS square Louise-Michel = amour de Paris</li>
            <li>Des touristes à la pelle...</li>
            <li>... mais qui n'a pas dragué quelqu'un sur ces marches ?</li>
            <li>Restos et bars stylés quand on sort de la Butte</li>
        </ul>`,
    "la-chapelle": `
        <strong>XXe/ La Chapelle, XVIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "amerique": `
        <strong>6e/ Amérique, XIXe :</strong>
        <ul>
            <li>La Mouzaïa, rêve des Instragameurs et des Parisiens qui aimeraient une maison (avec 5 m2 de jardin). Et c'est beau.</li>
            <li>Parc de la butte-du-Chapeau-Rouge = Jaurès</li>
            <li>On peut y manger pour des prix normaux, presque y habiter aussi</li>
            <li>Glorieuse place des Fêtes</li>
        </ul>`,
    "val-de-grace": `
        <strong>XXe/ Val-de-Grace, Ve :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "villette": `
        <strong>3e/ Villette, XIXe :</strong>
        <ul>
            <li>Le canal est BEAU</li>
            <li>Des cinés, des bars, des grecs, le Centquatre, des grandes tours etc. etc.</li>
            <li>Les prix des loyers permettent aux gens normaux d'y habiter encore un peu</li>
            <li>La gentrification ne passera pas (trop) par là (on a le droit de rêver, nan ?)</li>
        </ul>`,
    "saint-fargeau": `
        <strong>XXe/ Saint-Fargeau, XXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "charonne": `
        <strong>XXe/ Charonne, XXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "palais-royal": `
        <strong>14e/ Palais-Royal, Ier :</strong>
        <ul>
            <li>Perspective magique de l'avenue de l'Opéra</li>
            <li>Jardin du Palais royal injustement moins connu que d'autres</li>
            <li>Comédie-Française et colonnes de Buren</li>
            <li>Plus chiant que ses voisins mais tellement beau</li>
            <li>Moitié des restos du quartier japonais</li>
        </ul>`,
    "gros-caillou": `
        <strong>XXe/ Gros-Caillou, VIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "plaisance": `
        <strong>XXe/ Plaisance, XIVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "enfants-rouges": `
        <strong>XXe/ Enfants-Rouges, IIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "petit-montrouge": `
        <strong>XXe/ Petit-Montrouge, XIVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "muette": `
        <strong>XXe/ Muette, XVIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "batignolles": `
        <strong>19e/ Batignolles, XVIIe :</strong>
        <ul>
            <li>Des restos assez ouf (le quartier va de l'autre côté des voies)</li>
            <li>Quand on surplombe les voies de Saint-Lazare, c'est cool</li>
            <li>Le parc des Batignolles est mignon</li>
            <li>Si la gentrification achevée à Paris avait un nom, ce serait Batignolles</li>
        </ul>`,
    "epinettes": `
        <strong>XXe/ Epinettes, XVIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "jardin-des-plantes": `
        <strong>XXe/ Jardin-des-Plantes, Ve :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-merri": `
        <strong>12e/ Saint-Merri, IVe :</strong>
        <ul>
            <li>L'église de Saint-Merri est dingue et l'histoire de Médéric/Merri géniale (numéro 2 derrière Sainte-Geneviève)</li>
            <li>L'Hôtel de ville et sa place sont juste trop belles</li>
            <li>Place de GREVE</li>
            <li>Partie du Marais assez sympa</li>
        </ul>`,
    "saint-victor": `
        <strong>18e/ Saint-Victor, Ve :</strong>
        <ul>
            <li>Parmi les plus beaux quais de Seine, ambiance dingo le soir avec tous les danseurs</li>
            <li>Quelques restos pas mal</li>
            <li>Arènes de Lutèce trop sous-cotées</li>
        </ul>`,
    "invalides": `
        <strong>XXe/ Invalides, VIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "roquette": `
        <strong>17e/ Roquette, XIe :</strong>
        <ul>
            <li>Enormément de bons restos</li>
            <li>Seul endroit de Paris où tu peux te faire recaler de 5 bars de suite</li>
            <li>Théorème de la rue de Lappe : "Si tu restes une heure dehors dans cette rue, tu assisteras au moins à une bagarre à partir de 22 heures" (donc endroit drôle)</li>
        </ul>`,
    "sainte-marguerite": `
        <strong>20e/ Sainte-Marguerite, XIe :</strong>
        <ul>
            <li>L'un des endroits les + chouettes de Paris pour manger le soir (si on veut lâcher 30 euros et qu'on prend pas d'alcool)</li>
            <li>Les crêpes jusqu'au bout de la nuit</li>
            <li>Pourquoi sa partie de la place de la Nation a + de gens bizarres que celle d'en face ?</li>
        </ul>`,
    "gaillon": `
        <strong>XXe/ Gaillon, IIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "vivienne": `
        <strong>XXe/ Vivienne, IIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "arsenal": `
        <strong>XXe/ Arsenal, IVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "plaine-de-monceaux": `
        <strong>XXe/ Plaine de Monceaux, XVIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-lambert": `
        <strong>XXe/ Saint-Lambert, XVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "notre-dame-des-champs": `
        <strong>XXe/ Notre-Dame-des-Champs, VIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "porte-dauphine": `
        <strong>XXe/ Porte-Dauphine, XVIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "picpus": `
        <strong>XXe/ Picpus, XIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "maison-blanche": ` 
        <strong>4e/ Maison-Blanche, XIIIe :</strong> 
        <ul>
            <li>Butte-aux-Cailles = quartier sous-coté pour sortir en termes de restos et bars</li>
            <li>Siège des Amis de la Commune (+1500 points)</li>
            <li>Quartier de la poterne injustement méconnu même si un peu mort</li>
            <li>Commerces de bouches de haute qualité</li>
            <li>Trois parcs dingos</li>
        </ul>`,
    "gare": ` 
        <strong>1er/ Gare, XIIIe :</strong>
        <ul>
            <li>Les + belles vues sont dans ses tours</li>
            <li>Les photographes l'adorent (vues, perspectives, street-art, bouffe)</li>
            <li>Seul et unique quartier asiat</li>
            <li>L'un ds derniers quartiers mixtes socialement</li>
            <li>Meilleur quartier de Paris (j'y habite, vous pouvez me faire confiance)</li>
        </ul>`,
    "croulebarbe": `
        <strong>XXe/ Croulebarbe, XIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "plaine-de-monceaux": ` 
        <strong>XXe/ Plaine-de-Monceaux, XVIIe :</strong> 
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "epinettes": `
        <strong>XXe/ Epinettes, XVIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "pont-de-flandre": `
        <strong>11e/ Pont-de-Flandre, XIXe :</strong>
        <ul>
            <li>Des salles de concert partout</li>
            <li>Ambiance dans le Parc de la Villette géniale, surtout l'été</li>
            <li>La Cité des enfants a sauvé la vie de milliers de parents franciliens</li>
            <li>La débile rue de grands magasins à Rosa Parks lui fait louper le top 10</li>
        </ul>`,
    "combat": `
        <strong>XXe/ Combat, XIXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "bercy": `
        <strong>XXe/ Bercy, XIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "parc-de-montsouris": `
        <strong>XXe/ Parc-de-Montsouris, XIVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-germain-lauxerrois": `
        <strong>XXe/ Saint-Germain-l'Auxerrois, Ier :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "halles": ` 
        <strong>5e/ Halles, Ier :</strong>
        <ul>
            <li>Si Paris avait un centre symbolique, ce serait celui-là</li>
            <li>Trois lignes de RER = on rigole plus qu'ailleurs</li>
            <li>Capitale délocalisée de la banlieue (ça ennuie les droitards donc + 300 points)</li>
            <li>600 restos + bars</li>
            <li>Paris EST sa banlieue donc top 5, oui.</li>
        </ul>`,
    // Pour les suivants, je vais juste mettre la clé slugifiée et le nom original
    // Vous devrez ajouter le numéro de classement, l'arrondissement et le texte.
    // J'ai pris les noms de votre GeoJSON pour générer les slugs.

    "faubourg-du-roule": `
        <strong>XXe/ Faubourg-du-Roule, VIIIe :</strong>
        <ul><li>[VOTRE TEXTE ICI]</li></ul>`,
    "europe": `
        <strong>XXe/ Europe, VIIIe :</strong>
        <ul><li>[VOTRE TEXTE ICI]</li></ul>`,
    "saint-georges": `
        <strong>XXe/ Saint-Georges, IXe :</strong>
        <ul><li>[VOTRE TEXTE ICI]</li></ul>`,
    "faubourg-montmartre": `
        <strong>XXe/ Faubourg-Montmartre, IXe :</strong>
        <ul><li>[VOTRE TEXTE ICI]</li></ul>`,
    "porte-saint-denis": ` 
        <strong>16e/ Porte Saint-Denis, Xe :</strong>
        <ul>
            <li>L'un des quartiers les plus sympas pour sortir le soir à Paris</li>
            <li>Restos turques, kurdes ou syriens dingos</li>
            <li>Si t'y habites, vaut mieux avoir du triple vitrage (ou ne revenir qu'à 2 heures du matin)</li>
        </ul>`,
    "saint-ambroise": `
        <strong>XXe/ Saint-Ambroise, XIe :</strong>
        <ul><li>[VOTRE TEXTE ICI]</li></ul>`,
    // ... et ainsi de suite pour les 80.
};