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
    "notre-dame-des-champs": `
        <strong>XXe/ Notre-Dame-des-Champs, VIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
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
    "jardin-des-plantes": `
        <strong>XXe/ Jardin-des-Plantes, Ve :</strong>
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
    "villette": `
        <strong>3e/ Villette, XIXe :</strong>
        <ul>
            <li>Le canal est BEAU</li>
            <li>Des cinés, des bars, des grecs, le Centquatre, des grandes tours etc. etc.</li>
            <li>Les prix des loyers permettent aux gens normaux d'y habiter encore un peu</li>
            <li>La gentrification ne passera pas (trop) par là (on a le droit de rêver, nan ?)</li>
        </ul>`,
    "place-vendome": `
        <strong>XXe/ Place-Vendôme, Ier :</strong>
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
    "saint-vincent-de-paul": `
        <strong>XXe/ Saint-Vincent-de-Paul, Xe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "picpus": `
        <strong>XXe/ Picpus, XIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
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
    "plaine-de-monceaux": ` // Note: 'Plaine de Monceaux' (avec espace) slugifié donne 'plaine-de-monceaux'
        <strong>XXe/ Plaine de Monceaux, XVIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "grenelle": `
        <strong>XXe/ Grenelle, XVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "salpetriere": `
        <strong>XXe/ Salpêtrière, XIIIe :</strong>
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
    "quinze-vingts": `
        <strong>15e/ Quinze-Vingts, XIIe :</strong>
        <ul>
            <li>Quartier d'Aligre toujours bien sympa</li>
            <li>Marché d'Aligre = ROI</li>
            <li>La gare de Lyon est BELLE</li>
            <li>Deux hôpitaux qui prennent de la place et pourtant il y a de la vie</li>
        </ul>`,
    "belleville": `
        <strong>10e/ Belleville, XXe :</strong>
        <ul>
            <li>Quartier génial qui voit un Jourdain bobo proche de rues + populaires (je sais pas si c'est bien mais c'est comme ça)</li>
            <li>Le parc de Belleville est sympa (mais trop blindé l'été, soyez honnêtes, arrêtez de trafiquer les angles de vue sur Instagram)</li>
        </ul>`,
    "petit-montrouge": `
        <strong>XXe/ Petit-Montrouge, XIVe :</strong>
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
    "montparnasse": `
        <strong>XXe/ Montparnasse, XIVe :</strong>
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
    "faubourg-du-roule": `
        <strong>XXe/ Faubourg-du-Roule, VIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "europe": `
        <strong>XXe/ Europe, VIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-georges": `
        <strong>XXe/ Saint-Georges, IXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "faubourg-montmartre": `
        <strong>XXe/ Faubourg-Montmartre, IXe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "notre-dame": `
        <strong>7e/ Notre-Dame, IVe :</strong>
        <ul>
            <li>Je veux bien privilégier le Paris populairo-bobo, mais deux îles irréelles et magnifiques là, je cède</li>
            <li>Place LOUIS-ARAGON (ceux qui ont lu "Aurélien" y vont en pèlerinage)</li>
            <li>Les quais de Seine pour une soirée romantico-pas chère</li>
            <li>Berthillon (c'est tout)</li>
        </ul>`,
    "auteuil": `
        <strong>XXe/ Auteuil, XVIe :</strong>
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
    "val-de-grace": `
        <strong>XXe/ Val-de-Grace, Ve :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "sorbonne": `
        <strong>XXe/ Sorbonne, Ve :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "porte-saint-denis": `
        <strong>16e/ Porte Saint-Denis, Xe :</strong>
        <ul>
            <li>L'un des quartiers les plus sympas pour sortir le soir à Paris</li>
            <li>Restos turques, kurdes ou syriens dingos</li>
            <li>Si t'y habites, vaut mieux avoir du triple vitrage (ou ne revenir qu'à 2 heures du matin)</li>
        </ul>`,
    "bel-air": `
        <strong>XXe/ Bel-Air, XIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-lambert": `
        <strong>XXe/ Saint-Lambert, XVe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "ternes": `
        <strong>XXe/ Ternes, XVIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-germain-lauxerrois": `
        <strong>XXe/ Saint-Germain-l'Auxerrois, Ier :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "ecole-militaire": `
        <strong>XXe/ Ecole-Militaire, VIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "monnaie": `
        <strong>XXe/ Monnaie, VIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "bonne-nouvelle": `
        <strong>XXe/ Bonne-Nouvelle, IIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "madeleine": `
        <strong>XXe/ Madeleine, VIIIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "saint-ambroise": `
        <strong>XXe/ Saint-Ambroise, XIe :</strong>
        <ul>
            <li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li>
        </ul>`,
    "sainte-marguerite": `
        <strong>20e/ Sainte-Marguerite, XIe :</strong>
        <ul>
            <li>L'un des endroits les + chouettes de Paris pour manger le soir (si on veut lâcher 30 euros et qu'on prend pas d'alcool)</li>
            <li>Les crêpes jusqu'au bout de la nuit</li>
            <li>Pourquoi sa partie de la place de la Nation a + de gens bizarres que celle d'en face ?</li>
        </ul>`,
     "combat": `
        <strong>21e/ Combat, XIXe :</strong>
        <ul>
            <li>Le Parc des Buttes-Chaumont est le plus beau parc de Paris</li>
            <li>Le siège historique du Parti COMMUNISTE</li>
            <li>Emouvante Butte Bergeyre</li>
            <li>On préfère sortir dans les quartiers qui le jouxtent</li>
        </ul>`,
    "charonne": `
        <strong>22e/ Charonne, XXe :</strong>
        <ul>
            <li>Sympathique rue des Vignoles et place de la Réunion</li>
            <li>Bonne ambiance un peu partout</li>
            <li>Buffet Dost est le meilleur grec de Paris (ouais, on est comme ça le lundi soir)</li>
        </ul>`,
    "gaillon": `
        <strong>23e/ Gaillon, IIe :</strong>
        <ul>
            <li>Monopoly a mis ce quartier tout en haut</li>
            <li>Moitié du trop chouette quartier de restos japonais</li>
            <li>C'est de là qu'on sait que l'Opéra est trop beau</li>
            <li>Book Off, les vrais savent</li>
        </ul>`,
    "odeon": `
        <strong>24e/ Odéon, VIe :</strong>
        <ul>
            <li>Toujours aussi splendide Jardin du Luxembourg, malgré le tennis bourge et des jeux d'enfants… payants (???)</li>
            <li>Église Saint-Sulpice, ma préféré de Paris, (extérieur, chapelles passionnantes, œuvres de Delacroix, irréelle chaire…)</li>
            <li>Tout est trop cher</li>
        </ul>`,
    "saint-fargeau": `
        <strong>25e/ Saint-Fargeau, XXe :</strong>
        <ul>
            <li>La fameuse "campagne à Paris" (cousine éloignée de Paris Plages), mais avouons que ça fait un truc</li>
            <li>La ligne 3 bis passe par là donc on sait que c'est un quartier tranquille (pour le meilleur ou pour le chiant)</li>
        </ul>`,
    "saint-gervais": `
        <strong>26e/ Saint-Gervais, IVe :</strong>
        <ul>
            <li>Mon bout du Marais préféré en termes architecturaux</li>
            <li>L'As du Falafel, rien à ajouter</li>
            <li>Si vous croisez un vrai habitant, prenez une photo avec lui, vous aurez plus de chance de croiser un acteur connu à Paris.</li>
            <li>on vous déteste</li>
        </ul>`,
    "invalides": `
        <strong>27e/ Invalides, VIIe :</strong>
        <ul>
            <li>Esplanade des Invalides = picnic avec une vue ROYALE</li>
            <li>Musée Rodin sous-côté, surtout l'automne</li>
            <li>Pont Alexandre-III, ça se la raconte mais plus beau pont de Paris</li>
            <li>Faut vraiment piqueniquer</li>
        </ul>`,
    "archives": `
        <strong>28e/ Archives, IIIe :</strong>
        <ul>
            <li>Musées Carnavalet + Picasso + Cognacq-Jay + galeries assez ouf hein</li>
            <li>Le jardin trop mignon des Archives nationales ; trottoirs inadaptés (virons les voitures plus personne n'y habite de toute manière)</li>
            <li>Tout est trop cher</li>
            <li>on vous déteste</li>
        </ul>`,
    "sorbonne": `
        <strong>29e/ Sorbonne, Ve :</strong>
        <ul>
            <li>Le Panthéon et le musée de Cluny me font un truc, le Bombardier aussi ;</li>
            <li>Rue de la Huchette toujours aussi drôle (ne jamais y manger)</li>
            <li>Etudiants partout</li>
            <li>Quelques librairies gauchistes subsistent mais trop sont mortes</li>
            <li>Bien trop touristique</li>
        </ul>`,
    "enfants-rouges": `
        <strong>30e/ Enfants rouges, IIIe :</strong>
        <ul>
            <li>Concentration de restos qui font rire ceux qui lisent des threads "des meilleurs restos de Paris"</li>
            <li>Passage Vendôme, peut-être le passage le plus hors-sol et anti-touristique de Paris</li>
            <li>Devenu trop bourge malgré tout</li>
        </ul>`,
    "saint-georges": `
        <strong>31e/ Saint-Georges, IXe :</strong>
        <ul>
            <li>Des restos assez stylés</li>
            <li>Pigalle déborde par là donc le samedi soir, on rigole bien</li>
            <li>Les communards y ont détruit la maison d'Adolphe Thiers (+200 points)</li>
        </ul>`,
    "goutte-dor": ` // J'ai enlevé la mention, vous pouvez la réintégrer si besoin
        <strong>32e/ Goutte d'or, XVIIIe :</strong>
        <ul>
            <li>Le quartier qui fait peur à l'extrême droite (moins à ses habitants)</li>
            <li>Quartier qui résiste tant bien que mal à la gentrification</li>
            <li>Y a LeBarCommun</li> 
            <li>Les puces de Clignancourt = nostalgie</li>
        </ul>`,
    "epinettes": `
        <strong>33e/ Epinettes, XVIIe :</strong>
        <ul>
            <li>Quartier qui sauve l'honneur social de l'arrondissement</li>
            <li>Les HBM de la rue Ernest-Roche sont juste fabuleusement beaux</li>
            <li>Seul quartier de l'ouest parisien où on peut boire une bière à un tarif normal</li>
            <li>Ca reste le XVIIe.</li>
        </ul>`,
    "bercy": `
        <strong>34e/ Bercy, XIIe :</strong>
        <ul>
            <li>UGC Bercy = royaume de la carte UGC Illimité avec les MK2</li>
            <li>Le reste de Cour Saint-Emillion est aussi naze que cher</li>
            <li>Parc de Bercy bien stylé, avec au moins trois parties bien distinctes</li>
            <li>Quais de Seine les plus inaccessibles de Paris</li>
        </ul>`,
    "saint-ambroise": `
        <strong>35e/ Saint-Amboise, XIe :</strong>
        <ul>
            <li>Pas mal de commerces de bouche bien stylés</li>
            <li>Bataclan, donc lieu de recueillement et de mémoire parisien</li>
            <li>Les gens qui habitent là sont moins sensibles au bruit (voitures, motos, fêtards)</li>
        </ul>`,
    "saint-germain-lauxerrois": `
        <strong>36e/ Saint-Germain l'Auxerrois, Ier :</strong>
        <ul>
            <li>Jardin des Tuilleries + Louvre quand même, c'est du sérieux ;</li>
            <li>Le morceau chiant mais joli de l'île de la Cité</li>
            <li>Impossible de manger correctement</li>
            <li>Inhabité, mais logique</li>
        </ul>`,
    "grandes-carrieres": ` // Attention : le thread indique XIIIe, mais Grandes Carrières est dans le XVIIIe. J'utilise XVIIIe.
        <strong>37e/ Grandes Carrières, XVIIIe :</strong> 
        <ul>
            <li>Le cimetière de Montmartre est sous-coté</li>
            <li>La place Clichy et Pigalle rendent ce quartier très drôle la nuit</li>
            <li>Des restos et bars cools</li>
        </ul>`,
    "plaisance": `
        <strong>38e/ Plaisance, XIVe :</strong>
        <ul>
            <li>Rue Raymond-Losserand bien sympa à arpenter</li>
            <li>Bon équilibre entre commerces, travail et lieux pour dormir dans le quartier</li>
        </ul>`,
    "bonne-nouvelle": `
        <strong>39e/ Bonne Nouvelle, IIe :</strong>
        <ul>
            <li>Des bars et restos sympas</li>
            <li>La glorieuse rue Saint-Denis</li>
            <li>Autoroute de vélos assez pratique et/ou drôle à regarder</li>
        </ul>`,
    "jardin-des-plantes": `
        <strong>40e/ Jardin des plantes, Ve :</strong>
        <ul>
            <li>Toujours du mal à comprendre le parc éponyme mais c'est ce qui fait son charme</li>
            <li>Rue Mouffetard qui navigue entre le super et le turbo-beauf</li>
            <li>Pas mal de rues bien mortes</li>
        </ul>`,
    "rochechouart": `
        <strong>41e/ Rochechouart, IXe :</strong>
        <ul>
            <li>Des restos et bars à vin mortels</li>
            <li>Rien d'autre à faire mais c'est déjà pas mal</li>
        </ul>`,
    "parc-de-montsouris": `
        <strong>42e/ Parc de Montsouris, XIVe :</strong> 
        <ul>
            <li>Quand on ne sait pas où piqueniquer, on va là</li>
            <li>Parc qui n'a rien à envier aux Buttes-Chaumont</li>
            <li>Cité internationale = footing</li>
            <li>Rien d'autre que ces deux parcs en fait mais quel quartier possède deux parcs aussi grands ?</li>
        </ul>`,
    "chaillot": `
        <strong>43e/ Chaillot, XVIe :</strong>
        <ul>
            <li>Des avenues franchement impressionnantes</li>
            <li>Le Trocadéro est la phase terminale du Paris touristique, mais quelle vue</li>
            <li>Des musées dingos (Palais de Tokyo, MAM, Guimet...)</li>
        </ul>`,
    
    "place-vendome": `
        <strong>44e/ Place Vendôme, Ier :</strong>
        <ul>
            <li>Quartier turbo-bourgeois mais c'est beau, faut le dire</li>
            <li>Courbet a défoncé la colonne, à l'époque où on savait rigoler, ça vaut des points en plus même si tout est hors de prix</li>
        </ul>`,
    "la-chapelle": `
        <strong>45e/ La Chapelle, XVIIIe :</strong>
        <ul>
            <li>Quartier enclavé entre les voies de chemin de fer, le périph et l'A1</li>
            <li>Grosse activité associative pour pallier ça ainsi que les problèmes sociaux mais les élus et l'Etat ne font pas assez</li>
            <li>On y mange et boit de mieux en mieux</li>
        </ul>`,
    "europe": `
        <strong>46e/ Europe, VIIIe :</strong>
        <ul>
            <li>Le Parc Monceau montre que les riches savent parfois avoir du goût</li>
            <li>Les abords de la gare de Saint-Lazare sont très drôles</li>
            <li>Des rues larges pour rien (Haussmann = assassin)</li>
        </ul>`,
    "sainte-avoie": `
        <strong>47e/ Sainte-Avoie, IIIe :</strong>
        <ul>
            <li>Le Leroy-Merlin de Beubourg a sauvé des vies (enfin des annulations de plombier à 100 euros pour un joint) ;</li>
            <li>Bars souvent ringards (mais ils ne le savent pas)</li>
            <li>Pas mal de restos pas trop cher (à l'échelle du centre de Paris)</li>
        </ul>`,
    "arsenal": `
        <strong>48e/ Arsenal, IVe :</strong>
        <ul>
            <li>Place des Vosges fabuleuse</li>
            <li>Pavillon de l'Arsenal = expos de dingue</li>
            <li>Trop de bâtiments qui servent à rien (pour nous) et autoroute urbaine</li>
        </ul>`,
    "hopital-saint-louis": `
        <strong>49e/ Hôpital Saint-Louis, Xe :</strong> 
        <ul>
            <li>Quais du canal moins agités qu'un peu plus au sud mais jolis</li>
            <li>Plein de gros bâtiments donc un peu moins de vie que dans les quartiers voisins</li>
        </ul>`,
    "gros-caillou": `
        <strong>50e/ Gros Caillou, VIIe :</strong>
        <ul>
            <li>La TOUR EIFFEL</li>
            <li>Le quartier de la tour Eiffel, donc jamais arpenté par les Parisiens</li>
            <li>Nom de quartier ridicule (qui s'explique)</li>
            <li>Celui qui se dit "on va à la tour Eiffel, tranquille on trouvera un truc à manger dans le coin" le regrette toujours</li>
        </ul>`,
    "saint-michel": ` // Note: props.l_qu est probablement "Saint-Michel"
        <strong>51e/ Saint-Michel, VIe :</strong> 
        <ul>
            <li>Place Saint-Michel toujours aussi belle</li>
            <li>Quelques jolies voies et restos également très beaux d'extérieur mais ne jamais y manger (j'ai vu cet aprem un bar/resto avec pinte à 9 euros, genre la pinte la moins chère hein)</li>
            <li>Trop de bagnoles</li>
        </ul>`,
    "montparnasse": `
        <strong>52e/ Montparnasse, XIVe :</strong>
        <ul>
            <li>Le cimetière du Montparnasse est mon préféré</li>
            <li>Quartier breton de Paris (en fait quartier de crêperies, qui sont très bonnes mais + 5 euros par rapport au Finistère, bizarre)</li>
            <li>La place Denfert-Rochereau effraie automobilistes, cyclistes et piétons</li>
        </ul>`,
    "grenelle": `
        <strong>53e/ Grenelle, XVe :</strong>
        <ul>
            <li>Les magasins ici te rappellent que t'es pauvre (même si tu ne l'es pas vraiment)</li>
            <li>La tour Eiffel n'est jamais loin donc perspectives souvent pas mal</li>
            <li>L'île aux Cygnes est bien jolie</li>
            <li>Ca reste chiant si t'es pas riche</li>
        </ul>`,
    "saint-germain-des-pres": `
        <strong>54e/ Saint-Germain-des-Prés, VIe :</strong>
        <ul>
            <li>Quartier qui ne fait plus rêver que les Américains</li>
            <li>Les chocolats chauds à 8 euros me font beaucoup regretter Maximilien ROBESPIERRE</li>
            <li>Quelques rues mignonnes</li>
        </ul>`,
    "notre-dame-des-champs": `
        <strong>55e/ Notre Dame des Champs, VIe :</strong> 
        <ul>
            <li>La rue de Rennes rappelle qu'on devrait supprimer tous les centres commerciaux de France car même si l'objectif est d'abattre le capitalisme, en attendant, il est moins moche dans une rue</li>
            <li>Université Assas (- 50 points)</li>
            <li>Tout est trop cher</li>
        </ul>`,
    "champs-elysees": `
        <strong>56e/ Champs-Elysées, VIIIe :</strong>
        <ul>
            <li>Des musées sympa</li>
            <li>Une place de la Concorde, certes récupérée par la droite, mais c'est la classe</li>
            <li>Dès qu'on a plus de 25 ans, on n'y va plus qu'une fois par an (quand le PSG gagne le titre ou que son équipe nationale va en finale)</li>
        </ul>`,
    "porte-dauphine": `
        <strong>57e/ Porte dauphine, XVIe :</strong> 
        <ul>
            <li>Des places très jolies (dont la moitié de celle de Victor-Hugo)</li>
            <li>Jolie partie du bois de Boulogne</li>
            <li>Des gens qui vont licencier des milliers de salariés sont formés là</li>
        </ul>`,
    "chaussee-dantin": `
        <strong>58e/ Chaussée-d'Antin, IXe :</strong>
        <ul>
            <li>Quand on ne sait pas quoi faire de ses gosses à Noël, les vitrines des galeries et Printemps sont très utiles</li>
            <li>Glorieux Roissy bus</li>
            <li>Citadium a réjouit toute une génération</li>
            <li>Ca reste assez naze</li>
        </ul>`,
    "arts-et-metiers": `
        <strong>59e/ Arts et métiers, IIIe :</strong> 
        <ul>
            <li>Quartier plus chiant et moins beau que ses cousins de la place de la République, endroit pourtant vivant justement</li>
            <li>Le dénivelé du bd Saint-Martin qui montre que les urbanistes ont toujours construit cette ville en s'en foutant d'avant et d'après</li>
        </ul>`,
    "muette": `
        <strong>60e/ Muette, XVIe :</strong>
        <ul>
            <li>Quelques bâtiments magnifiques</li>
            <li>C'est le XVIe, donc ça reste chiant</li>
            <li>Partie assez chouette du bois de Boulogne</li>
        </ul>`,
    "picpus": `
        <strong>61e/ Picpus, XIIe :</strong>
        <ul>
            <li>Des jolies places et des jolies rues, mais difficile de ne pas s'y ennuyer (même quand on a plus de 35 ans et des enfants)</li>
            <li>Bois de Vincennes plus sauvage (à l'échelle de Paris)</li>
        </ul>`,
    "petit-montrouge": `
        <strong>62e/ Petit Montrouge, XIVe :</strong> 
        <ul>
            <li>Quartier qui pourrait être sympa à habiter si deux avenues-autoroutes ne le perforaient pas</li>
            <li>D'ailleurs, ceux qui restent bloqués sur les voies du carrefour et bloquent des trams bondés à porte d'Orléans = nazis</li>
        </ul>`,

    "ternes": `
        <strong>80e/ Ternes, XVIIe arrondissement :</strong>
        <ul>
            <li>Quartier qui porte très bien son nom</li>
            <li>Turbo-bourgeois pour rien</li>
            <li>Même pas un morceau de bois contrairement à ses cousins bourgeois du XVIe</li>
        </ul>`,
    "javel": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>79e/ Javel, XVe :</strong> 
        <ul>
            <li>L'un des quartiers les plus chiants de Paris</li>
            <li>Des banlieusards aisés qui s'y sont installés disent "Au moins, ici, j'ai mes repères"</li>
            <li>Le quartier est à peine sauvé par le parc André-Citroën</li>
            <li>Trop de journalistes</li>
        </ul>`,
    "auteuil": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>78e/ Auteuil, XVIe :</strong> 
        <ul>
            <li>La partie la plus chiante du XVIe arrondissement (ça fixe le truc)</li>
            <li>Animation une fois toutes les deux semaines (match au Parc des Princes)</li>
            <li>Quartier moins beau que le reste du très bourgeois mais pourtant très joli XVIe.</li>
        </ul>`,
    "ecole-militaire": `
        <strong>77e/ Ecole militaire : VIIe :</strong> 
        <ul>
            <li>Personne n'habite là, soyons clairs</li>
            <li>Quartier qu'on traverse quand on emmène un cousin ou une tante à la tour Eiffel</li>
            <li>Quartier tellement cher qu'il sera immédiatement réquisitionné à la Révolution</li>
        </ul>`,
    "faubourg-du-roule": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>76e/ Faubourg du Roule, VIIIe :</strong> 
        <ul>
            <li>On cherche toujours un truc à y faire</li>
            <li>La quasi-totalité des bars, restos et boîtes sont des lieux de beaufs</li>
        </ul>`,
    "plaine-de-monceaux": `
        <strong>75e/ Plaine-de-Montceaux, XVIIe :</strong> 
        <ul>
            <li>Quartier chiant sauvé par quelques beaux bâtiments</li>
            <li>Pas grand-chose à en dire (c'est bien ça le problème)</li>
        </ul>`,
    "faubourg-montmartre": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>74e/ Faubourg Montmartre, IXe :</strong> 
        <ul>
            <li>Musée Grévin = pire musée de Paris avec celui de la chaussette (s'il existait)</li>
            <li>Au moins 8 théâtres, non ?</li>
            <li>Pas grand-chose à y faire par rapport à ses voisins</li>
        </ul>`,
    "val-de-grace": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>73e/ Val de Grâce, Ve :</strong> 
        <ul>
            <li>Rien à voir et rien à faire hormis une librairie ROUGE et une librairie lusophone, toutes deux géniales</li>
            <li>On y passe à pied quand on flâne, mais juste pour aller ailleurs</li>
        </ul>`,
    "salpetriere": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>72e/ Salpêtrière, XIIIe :</strong> 
        <ul>
            <li>Un hôpital et une gare font littéralement la moitié du quartier</li>
            <li>Jolie mairie du XIIIe et la place d'Italie est bien mieux qu'avant</li>
            <li>Très hideuse Cité de la mode</li>
        </ul>`,
    "necker": ` // Déjà listé, attention. J'utilise le texte de ce classement (XIe est une erreur dans votre thread, Necker est XVe)
        <strong>71e/ Necker, XVe :</strong> 
        <ul>
            <li>J'aime les tours mais celle de Montparnasse est vraiment moche</li>
            <li>Quelques boîtes et restos beaufs</li>
            <li>Vide et mort dès qu'on s'éloigne de la gare</li>
        </ul>`,
    "mail": `
        <strong>70e/ Mail, IIe :</strong>
        <ul>
            <li>Quelques pubs trop chers</li>
            <li>Le quartier du Sentier est moins drôle qu'avant</li>
            <li>Le Grand Rex n'amuse que ceux qui viennent à Paris moins d'une fois par an ou qui ont moins de 17 ans</li>
            <li>Petit pour rien, faut l'éclater et le faire fusionner</li>
        </ul>`,
    "madeleine": `
        <strong>69e/ Madeleine, VIIIe :</strong>
        <ul>
            <li>L'Elysée et Beauvau, ça fout une sale ambiance</li>
            <li>On se fend quand même bien la poire en regardant le prix des vêtements</li>
            <li>Place de la Madeleine, pire place de Paris</li>
        </ul>`,
    "croulebarbe": `
        <strong>68e/ Croulebarbe, XIIIe :</strong> 
        <ul>
            <li>Square René Le Gall bien stylé</li>
            <li>On n'y sort pas, on y dort</li>
        </ul>`,
    "bel-air": ` // Déjà listé, attention. J'utilise le texte de ce classement.
        <strong>67e/ Bel-Air, XIIe :</strong> 
        <ul>
            <li>Quartier chiant</li>
            <li>Partie la plus aménagée et jolie du bois de Vincennes</li>
            <li>Seuls ses habitants sont au courant que la ville de Saint-Mandé existe</li>
        </ul>`,
     // Vous avez listé 79 quartiers. Pour arriver à 80, il en manque un.
     // Vous devrez identifier lequel et l'ajouter ici avec sa clé slugifiée.
};