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
    
    // --- Placeholders pour les 36 quartiers restants (de votre fichier JSON initial) ---
    // Vous devrez vérifier les noms `l_qu` de votre GeoJSON et créer les clés slugifiées correspondantes.
    // J'utilise les noms que vous aviez listés plus tôt, en les slugifiant.

    "necker": `
        <strong>XXe/ Necker, XVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "saint-germain-des-pres": `
        <strong>XXe/ Saint-Germain-des-Prés, VIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "europe": `
        <strong>XXe/ Europe, VIIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "faubourg-du-roule": `
        <strong>XXe/ Faubourg-du-Roule, VIIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "faubourg-montmartre": `
        <strong>XXe/ Faubourg-Montmartre, IXe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "auteuil": `
        <strong>XXe/ Auteuil, XVIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "val-de-grace": `
        <strong>XXe/ Val-de-Grace, Ve :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "bel-air": `
        <strong>XXe/ Bel-Air, XIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "saint-lambert": `
        <strong>XXe/ Saint-Lambert, XVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "ternes": `
        <strong>XXe/ Ternes, XVIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "ecole-militaire": `
        <strong>XXe/ Ecole-Militaire, VIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "monnaie": `
        <strong>XXe/ Monnaie, VIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "madeleine": `
        <strong>XXe/ Madeleine, VIIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "porte-dauphine": `
        <strong>XXe/ Porte-Dauphine, XVIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "arts-et-metiers": `
        <strong>XXe/ Arts-et-Métiers, IIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "mail": `
        <strong>XXe/ Mail, IIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "vivienne": `
        <strong>XXe/ Vivienne, IIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "arsenal": `
        <strong>XXe/ Arsenal, IVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "montparnasse": `
        <strong>XXe/ Montparnasse, XIVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "muette": `
        <strong>XXe/ Muette, XVIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "salpetriere": `
        <strong>XXe/ Salpêtrière, XIIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "croulebarbe": `
        <strong>XXe/ Croulebarbe, XIIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "plaine-de-monceaux": ` 
        <strong>XXe/ Plaine de Monceaux, XVIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "grenelle": `
        <strong>XXe/ Grenelle, XVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "petit-montrouge": `
        <strong>XXe/ Petit-Montrouge, XIVe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
     "combat": ` // Assurez-vous que ce n'est pas un doublon du 21e
        <strong>XXe/ Combat, XIXe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
    "picpus": `
        <strong>XXe/ Picpus, XIIe :</strong>
        <ul><li>[VOTRE TEXTE POUR CE QUARTIER ICI]</li></ul>`,
     // Vous avez listé 79 quartiers. Pour arriver à 80, il en manque un.
     // Vous devrez identifier lequel et l'ajouter ici avec sa clé slugifiée.
};