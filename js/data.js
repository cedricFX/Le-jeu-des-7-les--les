/* ============================================================
   DATA.JS — L'Archipel des Lettres × Thème Mario
   18 mondes, 3 niveaux chacun, ~500 exercices au total.
   Bilan orthophonique Juliann BRUNCK (CE1) +
   enrichissements progressifs : syllabes, mots réguliers /
   irréguliers, sons jumeaux, orthographe, attention,
   lecture, B/D/P, rimes, sons cachés, C/G doux et dur,
   doubles lettres, accents, nasaux, finales muettes,
   mots longs, familles de mots, boss final.
   ============================================================ */

const GAME_DATA = {

  /* ---------------------------------------------------------
     MONDES DU JEU
  --------------------------------------------------------- */
  islands: [
    { id:"syllabes",      name:"Monde 1 — Plaine des Syllabes",        emoji:"🍄",  color:"#3FB8AF", desc:"Démêle les syllabes qui se ressemblent",                 unlockStars:0  },
    { id:"motsSages",     name:"Monde 2 — Château des Mots Sages",      emoji:"🏰",  color:"#FF8C42", desc:"Lis les mots qui suivent les règles",                     unlockStars:4  },
    { id:"motsRebelles",  name:"Monde 3 — Grotte des Mots Rebelles",    emoji:"👾",  color:"#9B5DE5", desc:"Apprivoise les mots qui ne s'écrivent pas comme ils se disent", unlockStars:8  },
    { id:"sonsJumeaux",   name:"Monde 4 — Vallée des Sons Jumeaux",     emoji:"⭐",  color:"#F94144", desc:"Distingue les sons qui se confondent",                    unlockStars:12 },
    { id:"atelier",       name:"Monde 5 — Atelier de Luigi",            emoji:"✏️", color:"#43AA8B", desc:"Écris les mots sans en oublier un bout",                 unlockStars:16 },
    { id:"concentration", name:"Monde 6 — Tour de Bowser",              emoji:"🐢",  color:"#577590", desc:"Aiguise ton attention et ton regard",                    unlockStars:20 },
    { id:"phare",         name:"Monde 7 — La Bibliothèque Étoilée",    emoji:"🌟",  color:"#F3722C", desc:"Lis des histoires à voix haute, à ton rythme",           unlockStars:24 },
    { id:"bdp",           name:"Monde 8 — L'Île des Lettres Miroirs",  emoji:"🔮",  color:"#E040FB", desc:"Démêle les b, d et p qui se ressemblent",               unlockStars:30 },
    { id:"rimes",         name:"Monde 9 — La Caverne des Rimes",        emoji:"🎵",  color:"#00BCD4", desc:"Trouve les mots qui sonnent pareil à la fin",            unlockStars:36 },
    { id:"sonsCache",     name:"Monde 10 — Le Volcan des Sons Cachés",  emoji:"🌋",  color:"#FF5722", desc:"Découvre les sons secrets cachés dans les mots",         unlockStars:42 },
    { id:"cgSons",        name:"Monde 11 — La Jungle C et G",           emoji:"🌿",  color:"#4CAF50", desc:"Apprends quand C et G sont doux ou durs",               unlockStars:48 },
    { id:"doubles",       name:"Monde 12 — Le Désert des Doubles",      emoji:"🏜️", color:"#FFC107", desc:"Repère les lettres qui se doublent",                    unlockStars:54 },
    { id:"accents",       name:"Monde 13 — Le Palais des Accents",      emoji:"🎭",  color:"#795548", desc:"Maîtrise les accents aigus, graves et circonflexes",    unlockStars:60 },
    { id:"nasaux",        name:"Monde 14 — La Forêt des Sons Nasaux",  emoji:"🌲",  color:"#009688", desc:"Distingue on, an, in et un",                             unlockStars:66 },
    { id:"finales",       name:"Monde 15 — L'Île des Finales Muettes",  emoji:"🏖️", color:"#2196F3", desc:"Entends les lettres finales qu'on n'entend pas",         unlockStars:72 },
    { id:"motsLongs",     name:"Monde 16 — La Montagne des Mots Longs", emoji:"⛰️", color:"#607D8B", desc:"Attaque les mots à longues syllabes",                    unlockStars:78 },
    { id:"familles",      name:"Monde 17 — L'Archipel des Familles",    emoji:"🏝️", color:"#E91E63", desc:"Regroupe les mots de la même famille",                  unlockStars:84 },
    { id:"champion",      name:"Monde 18 — La Tour du Grand Champion",  emoji:"🏆",  color:"#FFD700", desc:"Le défi ultime — tout en un !",                          unlockStars:90 }
  ],

  /* ---------------------------------------------------------
     1. SYLLABES COMPLEXES
  --------------------------------------------------------- */
  syllabes: {
    1: [
      { word:"MA",  choices:["MA","AM"],       correct:0 },
      { word:"SO",  choices:["OS","SO"],        correct:1 },
      { word:"LU",  choices:["UL","LU"],        correct:1 },
      { word:"RI",  choices:["RI","IR"],        correct:0 },
      { word:"PA",  choices:["AP","PA"],        correct:1 },
      { word:"TO",  choices:["TO","OT"],        correct:0 },
      { word:"VE",  choices:["EV","VE"],        correct:1 },
      { word:"NU",  choices:["NU","UN"],        correct:0 },
      { word:"BO",  choices:["OB","BO"],        correct:1 },
      { word:"FI",  choices:["FI","IF"],        correct:0 }
    ],
    2: [
      { word:"GOR",  choices:["GOR","GRO","OGR"], correct:0 },
      { word:"BRA",  choices:["BAR","RBA","BRA"], correct:2 },
      { word:"TRI",  choices:["TIR","ITR","TRI"], correct:2 },
      { word:"FRI",  choices:["RIF","FRI","IRF"], correct:1 },
      { word:"PLU",  choices:["LPU","PLU","UPL"], correct:1 },
      { word:"STE",  choices:["TES","STE","ETS"], correct:1 },
      { word:"DRO",  choices:["DOR","DRO","ROD"], correct:1 },
      { word:"CRI",  choices:["CRI","RIC","ICR"], correct:0 },
      { word:"PRE",  choices:["PER","PRE","ERP"], correct:1 },
      { word:"BLO",  choices:["BOL","OBL","BLO"], correct:2 },
      { word:"GRE",  choices:["GRE","REG","EGR"], correct:0 },
      { word:"TRO",  choices:["ORT","TOR","TRO"], correct:2 }
    ],
    3: [
      { word:"TRON",   choices:["TRON","TORN","TRNO"],          correct:0 },
      { word:"BLOU",   choices:["BOLU","BLOU","LOUB"],          correct:1 },
      { word:"SPLU",   choices:["SPLU","PLUS","SULP"],          correct:0 },
      { word:"CHRA",   choices:["CRAH","CHRA","HCRA"],          correct:1 },
      { word:"GRIN",   choices:["GRIN","GIRN","NRIG"],          correct:0 },
      { word:"STRA",   choices:["STRA","STAR","TRAS"],          correct:0 },
      { word:"BRUN",   choices:["BURN","BRUN","RUBN"],          correct:1 },
      { word:"CRIN",   choices:["CRIN","CIRN","RICN"],          correct:0 },
      { word:"FLOU",   choices:["FLOU","LOUF","FOLU"],          correct:0 },
      { word:"PREC",   choices:["PERC","PREC","RECP"],          correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     2. MOTS RÉGULIERS
  --------------------------------------------------------- */
  motsSages: {
    1: [
      { word:"PAPA",   choices:["PAPA","PAPO"],           correct:0 },
      { word:"VÉLO",   choices:["VÉLO","VÉLE"],           correct:0 },
      { word:"GOMME",  choices:["GOME","GOMME"],          correct:1 },
      { word:"DANS",   choices:["DANS","DENS"],           correct:0 },
      { word:"BALLON", choices:["BALON","BALLON"],        correct:1 },
      { word:"LIRE",   choices:["LIRE","LISE"],           correct:0 },
      { word:"MOTO",   choices:["MOTO","MOTA"],           correct:0 },
      { word:"PELLE",  choices:["PELE","PELLE"],          correct:1 },
      { word:"SABLE",  choices:["SABLE","SAPLE"],         correct:0 },
      { word:"NUIT",   choices:["NUIS","NUIT"],           correct:1 }
    ],
    2: [
      { word:"CHAPEAU",  choices:["SHAPEAU","CAHPEAU","CHAPEAU"],        correct:2 },
      { word:"CLASSE",   choices:["CLASSS","CLAS","CLASSE"],             correct:2 },
      { word:"BLANC",    choices:["BLANCE","BLAN","BLANC"],              correct:2 },
      { word:"FENÊTRE",  choices:["FENÊTRE","FENETRE","FENNÊTRE"],       correct:0 },
      { word:"TABLIER",  choices:["TABLIER","TABLIE","TABLLIER"],        correct:0 },
      { word:"MARTEAU",  choices:["MARTEAU","MARTAUX","MARTEEAU"],       correct:0 },
      { word:"TROUSSE",  choices:["TROUSS","TROUSSE","TROUSE"],          correct:1 },
      { word:"CRAYON",   choices:["CRAYON","CRAIYON","KREYON"],          correct:0 },
      { word:"MAISON",   choices:["MAIZON","MAISON","MAISONE"],          correct:1 },
      { word:"GARAGE",   choices:["GARRGE","GARRAGE","GARAGE"],          correct:2 },
      { word:"SORTIR",   choices:["SORTIR","SORTTIR","SORTIRE"],         correct:0 },
      { word:"PARTIR",   choices:["PARTIR","PARTTIR","PARTIRE"],         correct:0 }
    ],
    3: [
      { word:"CHOCOLAT",    choices:["CHOCOLA","CHOKOLAT","CHOCOLAT"],          correct:2 },
      { word:"ESCARGOT",    choices:["ESCARGO","ESCARGOT","EXCARGOT"],          correct:1 },
      { word:"PARAPLUIE",   choices:["PARAPLUIE","PARAPLUI","PARAPLIE"],        correct:0 },
      { word:"ORDINATEUR",  choices:["ORDINATEUR","ORDINATEURE","ORDINNATEUR"], correct:0 },
      { word:"ANNIVERSAIRE",choices:["ANIVERSAIRE","ANNIVERSAIRE","ANNIVERSERE"],correct:1 },
      { word:"CARNAVAL",    choices:["CARNAVAL","CARNEVAL","KARNEVAL"],         correct:0 },
      { word:"PAPILLON",    choices:["PAPILLON","PAPILON","PAPILONE"],          correct:0 },
      { word:"CERISIER",    choices:["SERISIER","CERISIER","CERIZIER"],         correct:1 },
      { word:"BRICOLAGE",   choices:["BRICOLLAGE","BRIKOLAGE","BRICOLAGE"],     correct:2 },
      { word:"PRINTEMPS",   choices:["PRINTEMPS","PRITEMPS","PRINTAMPS"],       correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     3. MOTS IRRÉGULIERS
  --------------------------------------------------------- */
  motsRebelles: {
    1: [
      { word:"DEUX",  choices:["DEUX","DEU"],         correct:0 },
      { word:"OEUF",  choices:["OEUF","EUF"],         correct:0 },
      { word:"DOIGT", choices:["DOI","DOIGT"],        correct:1 },
      { word:"FEMME", choices:["FAME","FEMME"],       correct:1 },
      { word:"FILS",  choices:["FIS","FILS"],         correct:1 },
      { word:"CLEF",  choices:["CLEF","CLF"],         correct:0 },
      { word:"NOEUD", choices:["NOEUD","NOEU"],       correct:0 },
      { word:"PIED",  choices:["PIÉ","PIED"],         correct:1 }
    ],
    2: [
      { word:"COUP",    choices:["COUPE","COOP","COUP"],         correct:2 },
      { word:"BORD",    choices:["BORDE","BORD","BORT"],         correct:1 },
      { word:"AUTOMNE", choices:["AUTOMNE","AUTOMME","OTOMNE"],  correct:0 },
      { word:"OISEAU",  choices:["OIZO","OISEAU","OIZEAU"],      correct:1 },
      { word:"SEPT",    choices:["CET","SEPT","SET"],             correct:1 },
      { word:"VINGT",   choices:["VIN","VINGT","VINT"],          correct:1 },
      { word:"TEMPS",   choices:["TAN","TEMPS","TAMPS"],         correct:1 },
      { word:"CORPS",   choices:["COR","CORP","CORPS"],          correct:2 },
      { word:"JAMBE",   choices:["JANBE","JAMBE","JANME"],       correct:1 },
      { word:"TABAC",   choices:["TABA","TABACK","TABAC"],       correct:2 }
    ],
    3: [
      { word:"ARMOIRE",   choices:["AROMOIRE","ARMOIRE","ARMOIIR"],         correct:1 },
      { word:"MONSIEUR",  choices:["MOSSIEUR","MONSIEUR","MONCIEUR"],       correct:1 },
      { word:"BEAUCOUP",  choices:["BOCOU","BEAUCOUP","BAUCOUP"],           correct:1 },
      { word:"EXAMEN",    choices:["EXAMEN","EGZAMEN","EXAMAIN"],           correct:0 },
      { word:"PORC",      choices:["KORK","PORC","PORK"],                   correct:1 },
      { word:"RESPECT",   choices:["RESPEC","RESPECT","RESSPECT"],          correct:1 },
      { word:"LONGTEMPS", choices:["LONGTEMPS","LONTEMPS","LONTAMP"],       correct:0 },
      { word:"CUEILLIR",  choices:["QUEILLIR","CUEILLIR","CUILLIR"],        correct:1 },
      { word:"AQUARIUM",  choices:["AQUARIUM","AQUARIME","AKUARIUM"],       correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     4. SONS JUMEAUX
  --------------------------------------------------------- */
  sonsJumeaux: {
    1: [
      { question:"Quel son entends-tu dans BALLON ?",  word:"BALLON",  choices:["ON","AN"],    correct:0 },
      { question:"Quel son entends-tu dans MAMAN ?",   word:"MAMAN",   choices:["ON","AN"],    correct:1 },
      { question:"Quel son entends-tu dans LAPIN ?",   word:"LAPIN",   choices:["IN","AIN"],   correct:0 },
      { question:"Quel son entends-tu dans MAIN ?",    word:"MAIN",    choices:["IN","AIN"],   correct:1 },
      { question:"Quel son entends-tu dans LION ?",    word:"LION",    choices:["ON","AN"],    correct:0 },
      { question:"Quel son entends-tu dans ENFANT ?",  word:"ENFANT",  choices:["ON","AN"],    correct:1 },
      { question:"Quel son entends-tu dans CHANSON ?", word:"CHANSON", choices:["ON","AN"],    correct:0 }
    ],
    2: [
      { question:"Quel son entends-tu dans CHIEN ?",   word:"CHIEN",   choices:["IAN","IEN"],  correct:1 },
      { question:"Quel son entends-tu dans PIANO ?",   word:"PIANO",   choices:["IEN","IAN"],  correct:1 },
      { question:"Quel son entends-tu dans VIOLON ?",  word:"VIOLON",  choices:["OI","IO"],    correct:1 },
      { question:"Quel son entends-tu dans TOIT ?",    word:"TOIT",    choices:["OI","IO"],    correct:0 },
      { question:"Comment se prononce ce groupe ?",    word:"FRI",     choices:["FRI","RIF"],  correct:0 },
      { question:"Quel son entends-tu dans MIEL ?",    word:"MIEL",    choices:["IAN","IEL"],  correct:1 },
      { question:"Quel son entends-tu dans VOILE ?",   word:"VOILE",   choices:["OI","IO"],    correct:0 },
      { question:"Quel son entends-tu dans PIED ?",    word:"PIED",    choices:["IED","IAD"],  correct:0 }
    ],
    3: [
      { question:"Quel son entends-tu dans ANCIEN ?",    word:"ANCIEN",    choices:["IEN","IAN"],  correct:0 },
      { question:"Quel son entends-tu dans PATIENT ?",   word:"PATIENT",   choices:["IEN","IAN"],  correct:0 },
      { question:"Quel son entends-tu dans ÉTOILE ?",    word:"ÉTOILE",    choices:["OI","IO"],    correct:0 },
      { question:"Quel son entends-tu dans HISTORIEN ?", word:"HISTORIEN", choices:["IEN","ION"],  correct:0 },
      { question:"Quel son dans CAHIER ?",               word:"CAHIER",    choices:["IER","IEN"],  correct:0 },
      { question:"Quel son dans VOISIN ?",               word:"VOISIN",    choices:["OI","IO"],    correct:0 },
      { question:"Quel son dans QUOTIDIEN ?",            word:"QUOTIDIEN", choices:["IEN","IAN"],  correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     5. ATELIER D'ÉCRITURE
  --------------------------------------------------------- */
  atelier: {
    1: [
      { word:"CHAT",   display:"CH_T",   missing:"A" },
      { word:"VÉLO",   display:"VÉL_",   missing:"O" },
      { word:"LUNE",   display:"LU_E",   missing:"N" },
      { word:"ROUE",   display:"RO_E",   missing:"U" },
      { word:"BRAS",   display:"B_AS",   missing:"R" },
      { word:"FLEUR",  display:"FL_UR",  missing:"E" },
      { word:"SOLEIL", display:"S_LEIL", missing:"O" },
      { word:"PORTE",  display:"PO_TE",  missing:"R" },
      { word:"NUIT",   display:"NU_T",   missing:"I" },
      { word:"ROUGE",  display:"R_UGE",  missing:"O" }
    ],
    2: [
      { word:"CHAMBRE",  display:"CH_MBRE",   missing:"A" },
      { word:"CASSEROLE",display:"CASSE_OLE", missing:"R" },
      { word:"CLASSE",   display:"CLA_SE",    missing:"S" },
      { word:"TABLEAU",  display:"TABL_AU",   missing:"E" },
      { word:"GOMME",    display:"GO_ME",     missing:"M" },
      { word:"TROUSSE",  display:"T_OUSSE",   missing:"R" },
      { word:"CRAYON",   display:"CR_YON",    missing:"A" },
      { word:"GARDIEN",  display:"GA_DIEN",   missing:"R" },
      { word:"SERPENT",  display:"SE_PENT",   missing:"R" },
      { word:"VILLAGE",  display:"VIL_AGE",   missing:"L" }
    ],
    3: [
      { word:"ARMOIRE",     display:"AR_OIRE",      missing:"M" },
      { word:"ORDINATEUR",  display:"ORDINAT_UR",   missing:"E" },
      { word:"ANNIVERSAIRE",display:"ANNI_ERSAIRE", missing:"V" },
      { word:"PARAPLUIE",   display:"PARA_LUIE",    missing:"P" },
      { word:"BRICOLAGE",   display:"B_ICOLAGE",    missing:"R" },
      { word:"PRINTEMPS",   display:"P_INTEMPS",    missing:"R" },
      { word:"CARNAVAL",    display:"CA_NAVAL",     missing:"R" },
      { word:"CHAMPION",    display:"CHAMPI_N",     missing:"O" },
      { word:"GRENOUILLE",  display:"G_ENOUILLE",   missing:"R" }
    ]
  },

  /* ---------------------------------------------------------
     6. JEUX D'ATTENTION VISUELLE
  --------------------------------------------------------- */
  attentionGames: {
    1: [
      { grid:["b","b","b","b","d","b","b","b","b"], oddIndex:4 },
      { grid:["p","p","p","q","p","p","p","p","p"], oddIndex:3 },
      { grid:["m","m","m","m","m","n","m","m","m"], oddIndex:5 },
      { grid:["d","d","d","d","d","d","b","d","d"], oddIndex:6 },
      { grid:["p","p","p","p","p","b","p","p","p"], oddIndex:5 },
      { grid:["n","n","n","n","u","n","n","n","n"], oddIndex:4 }
    ],
    2: [
      { grid:["on","on","on","an","on","on","on","on","on"],  oddIndex:3 },
      { grid:["ian","ian","ien","ian","ian","ian","ian","ian","ian"], oddIndex:2 },
      { grid:["bra","bra","bar","bra","bra","bra","bra","bra","bra"], oddIndex:2 },
      { grid:["gor","gor","gro","gor","gor","gor","gor","gor","gor"], oddIndex:2 },
      { grid:["ba","ba","ba","ba","da","ba","ba","ba","ba"], oddIndex:4 },
      { grid:["bol","bol","bol","bol","bol","dol","bol","bol","bol"], oddIndex:5 },
      { grid:["par","par","par","par","bar","par","par","par","par"], oddIndex:4 },
      { grid:["tri","tri","tri","tir","tri","tri","tri","tri","tri"], oddIndex:3 }
    ],
    3: [
      { grid:["chra","chra","chra","crha","chra","chra","chra","chra","chra"], oddIndex:3 },
      { grid:["plon","plon","poln","plon","plon","plon","plon","plon","plon"], oddIndex:2 },
      { grid:["strin","strin","strin","stirn","strin","strin","strin","strin","strin"], oddIndex:3 },
      { grid:["bord","bord","bord","bord","dord","bord","bord","bord","bord"], oddIndex:4 },
      { grid:["pal","pal","pal","bal","pal","pal","pal","pal","pal"], oddIndex:3 },
      { grid:["pela","pela","pela","pela","pela","pela","bela","pela","pela"], oddIndex:6 },
      { grid:["gris","gris","gris","gris","gris","girs","gris","gris","gris"], oddIndex:5 }
    ]
  },

  /* ---------------------------------------------------------
     7. TEXTES DE LECTURE
  --------------------------------------------------------- */
  readingTexts: {
    1: [
      "Le chat dort sur le lit. Il fait chaud. Maman prépare le repas.",
      "Léo joue dans le jardin. Il a un ballon rouge. Le chien court avec lui.",
      "Il pleut dehors. Lina lit un livre près de la fenêtre. Elle a chaud sous sa couverture.",
      "Le soleil brille sur la maison. Papa arrose les fleurs. Un oiseau chante dans le grand arbre.",
      "La petite tortue marche lentement dans le pré. Elle porte sa maison sur le dos. Les lapins la regardent passer.",
      "Cet après-midi, Théo va à la piscine avec sa sœur. Ils mettent leurs maillots et prennent une grande serviette bleue."
    ],
    2: [
      "Aujourd'hui c'est lundi. Il fait beau. Jules va à l'école avec son sac bleu. Dans la classe, il y a un tableau vert et des livres sur les étagères.",
      "La forêt est grande et verte. Les oiseaux chantent dans les arbres. Un lapin blanc court dans l'herbe. Le soleil brille et réchauffe la terre.",
      "Le petit poisson rouge vit dans un bocal sur la table. Tous les matins, on lui donne à manger. Il tourne en rond et regarde les enfants jouer.",
      "C'est le matin de Noël. Sous le sapin, il y a beaucoup de cadeaux colorés. Les enfants se lèvent très tôt et courent dans le salon. Ils crient de joie en voyant les paquets.",
      "Au marché, la marchande vend des fraises rouges et des cerises brillantes. Les enfants choisissent leurs fruits préférés et les mettent dans un petit panier en osier.",
      "Le jardinier plante des graines dans la terre. Il arrose chaque matin et attend patiemment. Quelques jours plus tard, de petites pousses vertes sortent de la terre et pointent vers le soleil."
    ],
    3: [
      "Pierre et Marie jouent aux cartes après le dîner. La grand-mère tricote près de la fenêtre. Le feu crépite dans la cheminée. Dehors il neige doucement et les flocons recouvrent le jardin.",
      "Le dragon vivait au sommet de la montagne, dans une grotte sombre et froide. Chaque matin, il sortait voler au-dessus de la forêt pour chercher de quoi manger, puis il rentrait se réchauffer près d'un grand feu.",
      "Camille adore les vacances chez ses grands-parents à la campagne. Elle se lève tôt pour aller chercher les œufs dans le poulailler, puis elle aide son grand-père à arroser le potager avant que la chaleur du midi n'arrive.",
      "Le champion plonge dans la piscine et nage aussi vite qu'un dauphin. Les spectateurs applaudissent dans les tribunes. À l'arrivée, il touche le mur en premier et lève le poing en l'air pour célébrer sa victoire.",
      "Dans la bibliothèque de l'école, on peut trouver des livres sur tous les sujets. Chaque semaine, les élèves choisissent un livre et le rapportent chez eux pour le lire à leur famille.",
      "La fête du village dure trois jours. Il y a des manèges, des jeux et des concerts. Le soir, un feu d'artifice illumine le ciel et tout le monde regarde en silence, le nez en l'air."
    ]
  },

  /* ---------------------------------------------------------
     8. B / D / P — Lettres miroirs
  --------------------------------------------------------- */
  bdp: {
    1: [
      { question:"Quelle lettre vois-tu ?",       word:"b",      choices:["b","d"],         correct:0 },
      { question:"Quelle lettre vois-tu ?",       word:"d",      choices:["b","d"],         correct:1 },
      { question:"Quelle lettre vois-tu ?",       word:"p",      choices:["b","p"],         correct:1 },
      { question:"Quel mot est bien écrit ?",     word:"BALLE",  choices:["DALLE","BALLE"], correct:1 },
      { question:"Quel mot est bien écrit ?",     word:"DOUX",   choices:["DOUX","BOUX"],   correct:0 },
      { question:"Quel mot est bien écrit ?",     word:"PAIN",   choices:["BAIN","PAIN"],   correct:1 },
      { question:"Quel mot est bien écrit ?",     word:"BAS",    choices:["BAS","PAS"],     correct:0 },
      { question:"Quel mot vois-tu ici ?",        word:"BOL",    choices:["DOL","BOL"],     correct:1 }
    ],
    2: [
      { question:"Quel mot est bien écrit ?", word:"BATEAU",  choices:["DATEAU","BATEAU","PATEAU"],   correct:1 },
      { question:"Quel mot est bien écrit ?", word:"PORTE",   choices:["BORTE","DORTE","PORTE"],      correct:2 },
      { question:"Quel mot est bien écrit ?", word:"BOIRE",   choices:["POIRE","BOIRE","DOIRE"],      correct:1 },
      { question:"Quel mot est bien écrit ?", word:"DESSIN",  choices:["DESSIN","BESSIN","PESSIN"],   correct:0 },
      { question:"Quel mot est bien écrit ?", word:"PLAGE",   choices:["BLAGE","DLAGE","PLAGE"],      correct:2 },
      { question:"Quel mot est bien écrit ?", word:"BRAS",    choices:["BRAS","PRAS","DRAS"],         correct:0 },
      { question:"Quel mot est bien écrit ?", word:"DRÔLE",   choices:["BRÔLE","PRÔLE","DRÔLE"],      correct:2 },
      { question:"Quel mot est bien écrit ?", word:"PAPIER",  choices:["PAPIER","BADIER","DABIER"],   correct:0 }
    ],
    3: [
      { question:"Quel mot est bien écrit ?", word:"BIBLIOTHÈQUE", choices:["DIBLIOTÈQUE","BIBLIOTHÈQUE","PIBLIOTHÈQUE"], correct:1 },
      { question:"Quel mot est bien écrit ?", word:"PROBLÈME",     choices:["BROBLÈME","DROBLÈME","PROBLÈME"],           correct:2 },
      { question:"Quel mot est bien écrit ?", word:"DRAGON",       choices:["DRAGON","BRAGON","PRAGON"],                 correct:0 },
      { question:"Quel mot est bien écrit ?", word:"PLOMBIER",     choices:["DLOMBIER","BLOMBIER","PLOMBIER"],           correct:2 },
      { question:"Quel mot est bien écrit ?", word:"BADMINTON",    choices:["BADMINTON","PADMINTON","DADMINTON"],        correct:0 },
      { question:"Quel mot est bien écrit ?", word:"BRICOLAGE",    choices:["PRICOLAGE","DRICOLAGE","BRICOLAGE"],        correct:2 },
      { question:"Quel mot est bien écrit ?", word:"DÉPART",       choices:["BÉPART","PÉPART","DÉPART"],                 correct:2 },
      { question:"Quel mot est bien écrit ?", word:"PENDULE",      choices:["PENDULE","BENDULE","DENDULE"],              correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     9. RIMES
  --------------------------------------------------------- */
  rimes: {
    1: [
      { question:"Quel mot rime avec CHAT ?",    word:"CHAT 🐱",    choices:["RAT","SOL","MER"],       correct:0 },
      { question:"Quel mot rime avec SOLEIL ?",  word:"SOLEIL ☀️",  choices:["ARBRE","OREILLE","MAISON"],correct:1 },
      { question:"Quel mot rime avec MAISON ?",  word:"MAISON 🏠",  choices:["CHAT","BALLON","SAISON"], correct:2 },
      { question:"Quel mot rime avec PAIN ?",    word:"PAIN 🍞",    choices:["MAIN","DENT","BRAS"],     correct:0 },
      { question:"Quel mot rime avec NUIT ?",    word:"NUIT 🌙",    choices:["JOUR","PLUIE","LUNE"],    correct:1 },
      { question:"Quel mot rime avec DENT ?",    word:"DENT 🦷",    choices:["NEZ","VENT","BRAS"],      correct:1 },
      { question:"Quel mot rime avec BEAU ?",    word:"BEAU 😍",    choices:["BRAS","GÂTEAU","DENT"],   correct:1 },
      { question:"Quel mot rime avec FLEUR ?",   word:"FLEUR 🌸",   choices:["COULEUR","ARBRE","NUIT"], correct:0 }
    ],
    2: [
      { question:"Quel mot rime avec BATEAU ?",   word:"BATEAU ⛵",   choices:["CHAPEAU","CHEVAL","MAISON"],   correct:0 },
      { question:"Quel mot rime avec DRAGON ?",   word:"DRAGON 🐉",   choices:["MAISON","BALLON","CHAPEAU"],   correct:1 },
      { question:"Quel mot rime avec LUMIÈRE ?",  word:"LUMIÈRE 💡",  choices:["FLEUR","RIVIÈRE","SOLEIL"],    correct:1 },
      { question:"Quel mot rime avec CHANSON ?",  word:"CHANSON 🎵",  choices:["MAISON","BALLON","LION"],      correct:1 },
      { question:"Quel mot rime avec FORÊT ?",    word:"FORÊT 🌲",    choices:["BOIS","SECRET","ARBRE"],       correct:1 },
      { question:"Quel mot rime avec ÉTOILE ?",   word:"ÉTOILE ⭐",   choices:["TOILE","LUNE","SOLEIL"],       correct:0 },
      { question:"Quel mot rime avec VOITURE ?",  word:"VOITURE 🚗",  choices:["MAISON","NATURE","CHEVAL"],    correct:1 },
      { question:"Quel mot rime avec CHÂTEAU ?",  word:"CHÂTEAU 🏰",  choices:["GÂTEAU","MAISON","CHEVAL"],    correct:0 }
    ],
    3: [
      { question:"Quel mot rime avec AVENTURE ?",   word:"AVENTURE 🗺️",  choices:["PEINTURE","MAISON","LUMIÈRE"], correct:0 },
      { question:"Quel mot rime avec PAPILLON ?",   word:"PAPILLON 🦋",   choices:["BALLON","LION","PAPILLON"],   correct:0 },
      { question:"Quel mot rime avec BIBLIOTHÈQUE ?",word:"BIBLIOTHÈQUE 📚",choices:["DISCOTHEQUE","MAISON","PARAPLUIE"],correct:0 },
      { question:"Quel mot rime avec GRENOUILLE ?", word:"GRENOUILLE 🐸",  choices:["CITROUILLE","LAPIN","DRAGON"], correct:0 },
      { question:"Quel mot rime avec PRINTEMPS ?",  word:"PRINTEMPS 🌺",   choices:["ÉTÉ","LONGTEMPS","HIVER"],    correct:1 },
      { question:"Quel mot rime avec COURAGEUX ?",  word:"COURAGEUX 💪",   choices:["JOYEUX","MAISON","FORÊT"],    correct:0 },
      { question:"Quel mot rime avec FANTÔME ?",    word:"FANTÔME 👻",     choices:["ARÔME","DRAGON","ÉTOILE"],    correct:0 },
      { question:"Quel mot rime avec CHAMPION ?",   word:"CHAMPION 🏆",    choices:["LION","MAISON","CHANSON"],    correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     10. SONS CACHÉS (ph=f, qu=k, ch, gn=gni, tion)
  --------------------------------------------------------- */
  sonsCache: {
    1: [
      { question:"Comment se prononce QU dans QUILLE ?",   word:"QUILLE",   choices:["K","KU","QU"],   correct:0 },
      { question:"Comment se prononce QU dans QUOI ?",     word:"QUOI",     choices:["KOI","KU","QU"], correct:0 },
      { question:"Comment se prononce QU dans QUEUE ?",    word:"QUEUE",    choices:["KU","QU","CU"],  correct:0 },
      { question:"Comment se prononce CH dans CHAT ?",     word:"CHAT",     choices:["CH","SH","K"],   correct:0 },
      { question:"Comment se prononce CH dans CHIEN ?",    word:"CHIEN",    choices:["SH","K","CH"],   correct:0 },
      { question:"Comment sonne QU dans CASQUE ?",         word:"CASQUE",   choices:["K","Q","C"],     correct:0 },
      { question:"Comment se prononce CH dans ORCHESTRE ?",word:"ORCHESTRE",choices:["K","SH","S"],    correct:0 },
      { question:"Comment sonne QU dans BANQUE ?",         word:"BANQUE",   choices:["K","KU","QU"],   correct:0 }
    ],
    2: [
      { question:"Comment se prononce PH dans PHOQUE ?",   word:"PHOQUE",    choices:["F","PH","V"],   correct:0 },
      { question:"Comment se prononce PH dans ÉLÉPHANT ?", word:"ÉLÉPHANT",  choices:["P","F","PH"],   correct:1 },
      { question:"Comment se prononce PH dans DAUPHIN ?",  word:"DAUPHIN",   choices:["F","PH","V"],   correct:0 },
      { question:"Comment se prononce GN dans LIGNE ?",    word:"LIGNE",     choices:["GN","NY","NG"], correct:1 },
      { question:"Comment se prononce GN dans AGNEAU ?",   word:"AGNEAU",    choices:["NY","GN","G"],  correct:0 },
      { question:"Comment se prononce PH dans PHOTO ?",    word:"PHOTO",     choices:["PO","FO","PHO"],correct:1 },
      { question:"Comment se prononce GN dans CHAMPIGNON ?",word:"CHAMPIGNON",choices:["NY","GN","NG"],correct:0 },
      { question:"Comment se prononce PH dans PHARE ?",    word:"PHARE",     choices:["F","PH","V"],   correct:0 }
    ],
    3: [
      { question:"Comment se prononce TION dans CHANSON ?",    word:"CHANSON",    choices:["SON","SION","TION"],  correct:0 },
      { question:"Comment se prononce TION dans STATION ?",    word:"STATION",    choices:["SION","TION","ZION"], correct:1 },
      { question:"Comment se prononce TION dans NATATION ?",   word:"NATATION",   choices:["SION","TION","ZION"], correct:1 },
      { question:"Comment se prononce EAU dans BATEAU ?",      word:"BATEAU",     choices:["O","EAU","AU"],       correct:0 },
      { question:"Comment se prononce AU dans FAUTE ?",        word:"FAUTE",      choices:["O","AU","OI"],        correct:0 },
      { question:"Comment se prononce TION dans QUESTION ?",   word:"QUESTION",   choices:["SION","ZION","TION"], correct:0 },
      { question:"Comment se prononce OEU dans COEUR ?",       word:"COEUR",      choices:["EU","OEU","OU"],      correct:0 },
      { question:"Quel son fait TION dans OPÉRATION ?",        word:"OPÉRATION",  choices:["SION","TION","SON"],  correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     11. C ET G DOUX ET DUR
  --------------------------------------------------------- */
  cgSons: {
    1: [
      { question:"Comment se prononce le C dans CAROTTE ?", word:"CAROTTE",  choices:["K","S","CH"], correct:0 },
      { question:"Comment se prononce le C dans CERISE ?",  word:"CERISE",   choices:["S","K","CH"], correct:0 },
      { question:"Comment se prononce le C dans CITRON ?",  word:"CITRON",   choices:["K","S","CH"], correct:1 },
      { question:"Comment se prononce le C dans COUCOU ?",  word:"COUCOU",   choices:["S","K","CH"], correct:1 },
      { question:"Comment se prononce le C dans CIBLE ?",   word:"CIBLE",    choices:["K","S","CH"], correct:1 },
      { question:"Comment se prononce le C dans COULEUR ?", word:"COULEUR",  choices:["K","S","CH"], correct:0 },
      { question:"Comment se prononce le C dans CRAYON ?",  word:"CRAYON",   choices:["S","K","CH"], correct:1 },
      { question:"Comment se prononce le C dans PINCE ?",   word:"PINCE",    choices:["K","CH","S"], correct:2 }
    ],
    2: [
      { question:"Comment se prononce le G dans GÂTEAU ?",  word:"GÂTEAU",   choices:["G dur","G doux"],        correct:0 },
      { question:"Comment se prononce le G dans GIRAFE ?",  word:"GIRAFE",   choices:["G dur","G doux (J)"],    correct:1 },
      { question:"Comment se prononce le G dans GÉANT ?",   word:"GÉANT",    choices:["G dur","G doux (J)"],    correct:1 },
      { question:"Comment se prononce le G dans GORILLE ?", word:"GORILLE",  choices:["G doux","G dur"],        correct:1 },
      { question:"Comment se prononce le G dans GYMNASE ?", word:"GYMNASE",  choices:["G dur","G doux (J)"],    correct:1 },
      { question:"Comment se prononce le G dans GARE ?",    word:"GARE",     choices:["G dur","G doux (J)"],    correct:0 },
      { question:"Comment se prononce le G dans PIGEON ?",  word:"PIGEON",   choices:["G dur","G doux (J)"],    correct:1 },
      { question:"Comment se prononce le G dans GLOBE ?",   word:"GLOBE",    choices:["G doux","G dur"],        correct:1 }
    ],
    3: [
      { question:"Quelle orthographe est correcte ?", word:"[S] dans MAISON", choices:["MAISON","MAIZON","MAIZSON"],  correct:0 },
      { question:"Quel C sonne comme S ?",            word:"Choisis",         choices:["COIFFURE","CERISE","CARTON"], correct:1 },
      { question:"Quel G sonne comme J ?",            word:"Choisis",         choices:["GARAGE","GIRAFE","GÂTEAU"],   correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"Le SON du C",     choices:["SOLSIL","SOLEIL","SOLEYIL"],  correct:1 },
      { question:"Comment se prononce C dans FAÇON ?",word:"FAÇON",           choices:["K","S","CH"],                 correct:1 },
      { question:"Quel mot contient un C qui sonne S ?", word:"Choisis",      choices:["CLASSE","CIEL","COUR"],       correct:1 },
      { question:"Quel mot contient un G dur ?",      word:"Choisis",         choices:["GÉNÉRAL","GÉNIE","GARE"],     correct:2 },
      { question:"Comment se prononce C dans GARÇON ?",word:"GARÇON",         choices:["K","S","CH"],                 correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     12. DOUBLES LETTRES
  --------------------------------------------------------- */
  doubles: {
    1: [
      { question:"Quelle est la bonne orthographe ?", word:"BALLE",   choices:["BALE","BALLE"],         correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"BELLE",   choices:["BELLE","BELE"],         correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"FILLE",   choices:["FILLE","FILE"],         correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"VILLE",   choices:["VILE","VILLE"],         correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ELLE",    choices:["ELE","ELLE"],           correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"POMME",   choices:["POMME","POME"],         correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"PATTE",   choices:["PATE","PATTE"],         correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"TERRE",   choices:["TERRE","TERE"],         correct:0 }
    ],
    2: [
      { question:"Quelle est la bonne orthographe ?", word:"BALLON",  choices:["BALON","BALLON","BALLLON"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"GOMME",   choices:["GOME","GOMME","GOMMME"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ANIMAL",  choices:["ANNIMEL","ANIMAL","ANIMMAL"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ADDITION",choices:["ADITION","ADDITION","ADDICION"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"INNOCENT",choices:["INOCENT","INNOCENT","INNOCANT"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ALLUMER", choices:["ALUMER","ALLUMER","ALULMER"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"NOMMER",  choices:["NOMER","NOMMER","NNOMER"],     correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"SOUFFLER",choices:["SOUFLER","SOUFFLER","SUOFFLER"],correct:1 }
    ],
    3: [
      { question:"Quelle est la bonne orthographe ?", word:"ANNIVERSAIRE",  choices:["ANIVERSAIRE","ANNIVERSAIRE","ANNIVERSSAIRE"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"PELLICULE",     choices:["PELICULE","PELLICULE","PELLICULLE"],            correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ILLUSION",      choices:["ILUSION","ILUSSION","ILLUSION"],               correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"IMMOBILE",      choices:["IMOBILE","IMMOBILE","IMMOBILLE"],              correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"APPÉTIT",       choices:["APETIT","APPÉTIT","APÉTIT"],                   correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"EXCELLENT",     choices:["EXCELENT","EXELLENT","EXCELLENT"],             correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"ATTENTION",     choices:["ATENTION","ATTENTION","ATTION"],               correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"COMMISSION",    choices:["COMISION","COMMISSION","COMISSION"],           correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     13. ACCENTS
  --------------------------------------------------------- */
  accents: {
    1: [
      { question:"Quelle orthographe est correcte ?", word:"ÉCOLE",   choices:["ECOLE","ÉCOLE","EKOLE"],    correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"ÉTÉ",     choices:["ETE","ETÉ","ÉTÉ"],         correct:2 },
      { question:"Quelle orthographe est correcte ?", word:"VÉLO",    choices:["VELO","VÉLO","VÉlO"],       correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"ÉLÉPHANT",choices:["ELEPHANT","ÉLÉPHANT","ELÉPHANT"],correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"FÊTE",    choices:["FETE","FÊTE","FÉTÊ"],       correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"DÉJÀ",    choices:["DEJA","DÉJA","DÉJÀ"],       correct:2 },
      { question:"Quelle orthographe est correcte ?", word:"FORÊT",   choices:["FORET","FORET","FORÊT"],    correct:2 },
      { question:"Quelle orthographe est correcte ?", word:"APRÈS",   choices:["APRES","APRÉS","APRÈS"],    correct:2 }
    ],
    2: [
      { question:"Quel accent porte le E dans PÈRE ?",   word:"PÈRE",   choices:["É accent aigu","È accent grave","Ê accent circonf."], correct:1 },
      { question:"Quel accent porte le E dans BÊTE ?",   word:"BÊTE",   choices:["É accent aigu","Ê accent circonf.","È accent grave"],  correct:1 },
      { question:"Quel accent porte le E dans VÉRITÉ ?", word:"VÉRITÉ", choices:["É accent aigu","È accent grave","Ê accent circonf."],  correct:0 },
      { question:"Quel accent porte le E dans TÊTE ?",   word:"TÊTE",   choices:["È accent grave","É accent aigu","Ê accent circonf."],  correct:2 },
      { question:"Quelle orthographe est correcte ?",    word:"ÉLÈVE",  choices:["ELEVE","ÉLÈVE","ELÈVE"],                             correct:1 },
      { question:"Quelle orthographe est correcte ?",    word:"MÊME",   choices:["MEME","MÉME","MÊME"],                                correct:2 },
      { question:"Quelle orthographe est correcte ?",    word:"CÉLÈBRE",choices:["CELEBRE","CÉLÈBRE","CÉLÉBRÉ"],                       correct:1 },
      { question:"Quelle orthographe est correcte ?",    word:"FENÊTRE",choices:["FENETRE","FENÊTRE","FÉNÊTRE"],                       correct:1 }
    ],
    3: [
      { question:"Quelle orthographe est correcte ?", word:"INTÉRÊT",      choices:["INTERRET","INTÉRÊT","INTERÊT"],          correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"RÉVÈLE",       choices:["REVELE","RÉVÈLE","RÉVÉLE"],              correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"POÈME",        choices:["POEME","POÊME","POÈME"],                 correct:2 },
      { question:"Quelle orthographe est correcte ?", word:"SYSTÈME",      choices:["SYSTEME","SYSTÈME","SYSTÉME"],           correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"GÉOGRAPHIE",   choices:["GEOGRAPHIE","GÉOGRAPHIE","GÉOGRAHIE"],  correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"TEMPÊTE",      choices:["TEMPETE","TÉMPÊTE","TEMPÊTE"],           correct:2 },
      { question:"Quelle orthographe est correcte ?", word:"ÉPÎTRE",       choices:["EPITRE","ÉPÎTRE","ÉPITTRE"],             correct:1 },
      { question:"Quelle orthographe est correcte ?", word:"CHÂTEAU",      choices:["CHATEAU","CHÂTEAU","CHÂTEAUX"],         correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     14. SONS NASAUX (on / an / in / un)
  --------------------------------------------------------- */
  nasaux: {
    1: [
      { question:"Quel son entends-tu à la fin de MAISON ?",  word:"MAISON",  choices:["ON","AN","IN"], correct:0 },
      { question:"Quel son entends-tu à la fin de ENFANT ?",  word:"ENFANT",  choices:["ON","AN","IN"], correct:1 },
      { question:"Quel son entends-tu à la fin de LAPIN ?",   word:"LAPIN",   choices:["AN","IN","ON"], correct:1 },
      { question:"Quel son entends-tu à la fin de BALCON ?",  word:"BALCON",  choices:["AN","ON","IN"], correct:1 },
      { question:"Quel son entends-tu à la fin de CHANSON ?", word:"CHANSON", choices:["ON","AN","IN"], correct:0 },
      { question:"Quel son entends-tu à la fin de SERPENT ?", word:"SERPENT", choices:["ON","IN","AN"], correct:2 },
      { question:"Quel son entends-tu à la fin de CHEMIN ?",  word:"CHEMIN",  choices:["ON","IN","AN"], correct:1 },
      { question:"Quel son entends-tu à la fin de SAVON ?",   word:"SAVON",   choices:["AN","IN","ON"], correct:2 }
    ],
    2: [
      { question:"Quel son entends-tu dans LUNDI ?",     word:"LUNDI",    choices:["UN","ON","AN","IN"], correct:0 },
      { question:"Quel son entends-tu dans HUMBLE ?",    word:"HUMBLE",   choices:["AN","UN","ON","IN"], correct:1 },
      { question:"Quel son entends-tu dans BRUN ?",      word:"BRUN",     choices:["IN","ON","UN","AN"], correct:2 },
      { question:"Quel son entends-tu dans PARFUM ?",    word:"PARFUM",   choices:["ON","UN","AN","IN"], correct:1 },
      { question:"Quel son entends-tu dans PEINTURE ?",  word:"PEINTURE", choices:["AN","ON","IN","UN"], correct:2 },
      { question:"Quel son entends-tu dans PANTALON ?",  word:"PANTALON", choices:["AN et ON","UN","IN"], correct:0 },
      { question:"Quel son entends-tu dans TAMBOURIN ?", word:"TAMBOURIN",choices:["AN et IN","ON","UN"], correct:0 },
      { question:"Quel son entends-tu dans MANCHON ?",   word:"MANCHON",  choices:["AN et ON","IN","UN"], correct:0 }
    ],
    3: [
      { question:"Combien de sons nasaux dans TAMBOURIN ?", word:"TAMBOURIN",  choices:["1 (IN)","2 (AN+IN)","3"],             correct:1 },
      { question:"Combien de sons nasaux dans PANTALON ?",  word:"PANTALON",   choices:["2 (AN+ON)","1 (ON)","3"],             correct:0 },
      { question:"Quel nasal est dans CHAMPION ?",          word:"CHAMPION",   choices:["AN","ON","IN"],                       correct:1 },
      { question:"Quel nasal est dans INVENTEUR ?",         word:"INVENTEUR",  choices:["IN","AN","ON"],                       correct:0 },
      { question:"Quel nasal est dans PRINTEMPS ?",         word:"PRINTEMPS",  choices:["AN","IN","ON"],                       correct:1 },
      { question:"Quel son nasal final dans MÉDECIN ?",     word:"MÉDECIN",    choices:["ON","IN","AN"],                       correct:1 },
      { question:"Quel mot contient le son UN ?",           word:"Son [UN]",   choices:["JARDIN","COMMUN","BOUTON"],           correct:1 },
      { question:"Quel son final dans IMPATIENT ?",         word:"IMPATIENT",  choices:["AN","IN","ON"],                       correct:0 }
    ]
  },

  /* ---------------------------------------------------------
     15. FINALES MUETTES
  --------------------------------------------------------- */
  finales: {
    1: [
      { question:"Quelle est la bonne orthographe ?", word:"BRAS",  choices:["BRA","BRAS","BRAT"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"DOS",   choices:["DO","DOS","DOT"],       correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"GROS",  choices:["GRO","GROS","GROT"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"BOIS",  choices:["BOI","BOIS","BOISS"],   correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"REPAS", choices:["REPA","REPAS","REPAT"], correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"BRAS",  choices:["BRA","BRAZ","BRAS"],    correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"CASSIS",choices:["CASSI","CASSIS","CASSIS"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"GRIS",  choices:["GRI","GRIS","GRIZ"],    correct:1 }
    ],
    2: [
      { question:"Quelle est la bonne orthographe ?", word:"LAIT",   choices:["LAI","LAIT","LAITE"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"FORÊT",  choices:["FORE","FORET","FORÊT"],  correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"BORD",   choices:["BOR","BORD","BORDE"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"FROID",  choices:["FROI","FROID","FROIDE"], correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"LOURD",  choices:["LOUR","LOURD","LOURDE"], correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"POIGNET",choices:["POIGNE","POIGNET","POIGNAIT"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"DOIGT",  choices:["DOI","DOIG","DOIGT"],    correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"NUIT",   choices:["NUI","NUIT","NUITE"],    correct:1 }
    ],
    3: [
      { question:"Quelle est la bonne orthographe ?", word:"RESPECT",  choices:["RESPEC","RESPECKT","RESPECT"],      correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"INSTINCT", choices:["INSTINT","INSTINCT","INSTINK"],     correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"PROMPT",   choices:["PROM","PROMT","PROMPT"],            correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"ASPECT",   choices:["ASPEC","ASPET","ASPECT"],           correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"TRIOMPHE", choices:["TRIOMFE","TRIOMPHE","TRIOMFHE"],    correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"CHAMP",    choices:["CHAN","CHAMP","CHAMPT"],            correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"TEMPS",    choices:["TEN","TEMPS","TAMPS"],              correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"CORPS",    choices:["COR","CORP","CORPS"],               correct:2 }
    ]
  },

  /* ---------------------------------------------------------
     16. MOTS LONGS
  --------------------------------------------------------- */
  motsLongs: {
    1: [
      { question:"Quelle est la bonne orthographe ?", word:"CHOCOLAT",    choices:["CHOCALAT","CHOCOLAT","CHOKLAT"],           correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"PAPILLON",    choices:["PAPILON","PAPILION","PAPILLON"],           correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"CHAMPIGNON",  choices:["CHAMPIGNON","CHANPIGNON","CHAMPINHON"],   correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"GRENOUILLE",  choices:["GRENOILLE","GRENOUILLE","GRENNOUILLE"],   correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"PARAPLUIE",   choices:["PARAPLUIE","PARAPLUI","PARAPOULE"],       correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"BRICOLAGE",   choices:["BRIKOLAGE","BRICOLAGE","BRICOLLAGE"],     correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"VOLONTAIRE",  choices:["VOLONTERE","VOLONTAIRE","VOLONTÈRE"],     correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"CERISIER",    choices:["CERIZIER","CERISIER","SERISIER"],         correct:1 }
    ],
    2: [
      { question:"Quelle est la bonne orthographe ?", word:"ANNIVERSAIRE",  choices:["ANIVERSAIRE","ANNIVERSAIRE","ANNIVERSÈRE"], correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"EXTRAORDINAIRE",choices:["EXTRORDINAIRE","EXTRAORDINAIRE","EXTRAUDINAIRE"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"BIBLIOTHÈQUE",  choices:["BIBLIOHEQUE","BIBLIOTEQUE","BIBLIOTHÈQUE"], correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"ÉLECTRICITÉ",   choices:["ELECTRICITE","ÉLECTRICITÉ","ÉLECTRICITÉE"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"CATASTROPHE",   choices:["CATASTROFE","CATASTROPHE","CATTASTROPHE"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"ENVIRONNEMENT", choices:["ENVIRONMENT","ENVIRONEMENT","ENVIRONNEMENT"],correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"MATHÉMATIQUES", choices:["MATHEMATIQUES","MATHÉMATIQUES","MATHEMATIQUE"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"TEMPÉRATURE",   choices:["TEMPERATURE","TÉMPERATURE","TEMPÉRATURE"],  correct:2 }
    ],
    3: [
      { question:"Quelle est la bonne orthographe ?", word:"BUREAUCRATIE",      choices:["BURAUCRATIE","BUREAUCRATIE","BUREAUKRATIE"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"IMPRESSIONNANT",    choices:["IMPRESSIONANT","IMPRESSIONNANT","IMPRÉSSIONNANT"],correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"COMMUNICATION",     choices:["COMUNICATION","COMMUNICATION","COMMINICATION"],  correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"DÉVELOPPEMENT",     choices:["DEVELOPPEMENT","DÉVELOPPEMENT","DÉVELOPPEMMENT"], correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"PERSONNALITÉ",      choices:["PERSONALITÉ","PERSONNALITÉ","PERSONNALLITÉ"],     correct:1 },
      { question:"Quelle est la bonne orthographe ?", word:"RESPONSABILITÉ",    choices:["RESPONSABILITÉE","RESPONSABILITE","RESPONSABILITÉ"],correct:2 },
      { question:"Quelle est la bonne orthographe ?", word:"HOSPITALISATION",   choices:["HOSPITALISATION","OSPITALISATION","HOSPITALIZATION"],correct:0 },
      { question:"Quelle est la bonne orthographe ?", word:"INCOMPRÉHENSIBLE",  choices:["INCOMPREHENSIBLE","INCOMPRÉHENSIBLE","INCOMPRÉANSIBLE"],correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     17. FAMILLES DE MOTS
  --------------------------------------------------------- */
  familles: {
    1: [
      { question:"Quel mot vient de la même famille que CHAT ?",     word:"CHAT 🐱",   choices:["CHATON","CHEVAL","POISSON"],      correct:0 },
      { question:"Quel mot vient de la même famille que FLEUR ?",    word:"FLEUR 🌸",  choices:["JARDIN","FLEURISTE","ARBRE"],     correct:1 },
      { question:"Quel mot vient de la même famille que LIRE ?",     word:"LIRE 📖",   choices:["ÉCRIRE","LECTURE","MARCHER"],     correct:1 },
      { question:"Quel mot vient de la même famille que CHANTER ?",  word:"CHANTER 🎵",choices:["DANSER","CHANSON","DESSINER"],    correct:1 },
      { question:"Quel mot vient de la même famille que MANGER ?",   word:"MANGER 🍕", choices:["MANGEUR","DORMIR","COURIR"],      correct:0 },
      { question:"Quel mot vient de la même famille que JOUER ?",    word:"JOUER 🎮",  choices:["COURIR","JOUET","DORMIR"],        correct:1 },
      { question:"Quel mot vient de la même famille que MAISON ?",   word:"MAISON 🏠", choices:["JARDIN","MAISONNÉE","ÉCOLE"],     correct:1 },
      { question:"Quel mot vient de la même famille que NAGER ?",    word:"NAGER 🏊",  choices:["NAGEUR","COURIR","VOLER"],        correct:0 }
    ],
    2: [
      { question:"Quel mot vient de la même famille que PORTER ?",   word:"PORTER",  choices:["PORTEUR","CHANTEUR","COUPEUR"],    correct:0 },
      { question:"Quel mot vient de la même famille que SOLEIL ?",   word:"SOLEIL",  choices:["LUNAIRE","ENSOLEILLÉ","ÉTOILÉ"],   correct:1 },
      { question:"Quel mot vient de la même famille que PAIN ?",     word:"PAIN",    choices:["BOULANGER","BOULANGERIE","PAINERIE"],correct:0 },
      { question:"Quel mot vient de la même famille que TERRE ?",    word:"TERRE",   choices:["TERRESTRE","CÉLESTE","MARITIME"],  correct:0 },
      { question:"Quel mot vient de la même famille que COURIR ?",   word:"COURIR",  choices:["MARCHEUR","COUREUR","NAGEUR"],     correct:1 },
      { question:"Quel mot vient de la même famille que FORT ?",     word:"FORT",    choices:["FORTERESSE","PALACE","CHÂTEAU"],   correct:0 },
      { question:"Quel mot vient de la même famille que PEUR ?",     word:"PEUR",    choices:["COURAGEUX","PEUREUX","JOYEUX"],    correct:1 },
      { question:"Quel mot vient de la même famille que BLANC ?",    word:"BLANC",   choices:["NOIRCI","BLANCHI","ROUGI"],        correct:1 }
    ],
    3: [
      { question:"Quel mot vient de la même famille que CHAMPION ?", word:"CHAMPION",choices:["CHAMPIONNAT","TOURNOI","TROPHÉE"],      correct:0 },
      { question:"Quel mot vient de la même famille que SCIENCE ?",  word:"SCIENCE", choices:["SCIENTIFIQUE","ARTISTIQUE","LITTÉRAIRE"],correct:0 },
      { question:"Quel mot vient de la même famille que CHALEUR ?",  word:"CHALEUR", choices:["FROIDEUR","CHALEUREUX","FRAÎCHEUR"],    correct:1 },
      { question:"Quel mot vient de la même famille que LIBRE ?",    word:"LIBRE",   choices:["LIBERTÉ","PRISON","ENFERMÉ"],            correct:0 },
      { question:"Quel mot vient de la même famille que NATURE ?",   word:"NATURE",  choices:["NATUREL","ARTIFICIEL","URBAIN"],         correct:0 },
      { question:"Quel mot vient de la même famille que LUMIÈRE ?",  word:"LUMIÈRE", choices:["OBSCURITÉ","LUMINEUX","SOMBRE"],         correct:1 },
      { question:"Quel mot vient de la même famille que AMOUR ?",    word:"AMOUR",   choices:["HAINE","JALOUSIE","AMOUREUX"],           correct:2 },
      { question:"Quel mot vient de la même famille que DRAGON ?",   word:"DRAGON",  choices:["DRAGON","DRAGONNIER","FÉE"],             correct:1 }
    ]
  },

  /* ---------------------------------------------------------
     18. CHAMPION — Boss final (mix de tout)
  --------------------------------------------------------- */
  champion: {
    1: [
      { question:"Quel mot rime avec BALLON ?",         word:"BALLON 🎈",    choices:["LION","CHANSON","MAISON"],   correct:1 },
      { question:"Comment se prononce QU dans QUOI ?",  word:"QUOI",         choices:["K","QU","C"],               correct:0 },
      { question:"Quelle orthographe est correcte ?",   word:"ÉCOLE",        choices:["ECOLE","ÉCOLE","EKOLE"],    correct:1 },
      { question:"Quel son nasal dans MAISON ?",        word:"MAISON",       choices:["ON","AN","IN"],             correct:0 },
      { question:"Quelle orthographe est correcte ?",   word:"BALLE",        choices:["BALE","BALLE","BALE"],      correct:1 },
      { question:"Quel mot vient de la famille de CHANTER ?", word:"CHANTER",choices:["CHANSON","DANSER","SAUTER"],correct:0 },
      { question:"Quelle est la lettre finale muette ?",word:"BRAS",         choices:["S","rien","T"],             correct:0 },
      { question:"Quel mot est bien écrit ?",           word:"BOIRE",        choices:["DOIRE","POIRE","BOIRE"],    correct:2 }
    ],
    2: [
      { question:"Quel mot rime avec AVENTURE ?",          word:"AVENTURE",    choices:["NATURE","PEINTURE","VOITURE"], correct:1 },
      { question:"Comment se prononce PH dans PHOQUE ?",   word:"PHOQUE",      choices:["F","PH","P"],               correct:0 },
      { question:"Quelle orthographe est correcte ?",      word:"MÊME",        choices:["MEME","MÉME","MÊME"],       correct:2 },
      { question:"Combien de sons nasaux dans PANTALON ?", word:"PANTALON",    choices:["1","2 (AN+ON)","3"],        correct:1 },
      { question:"Quelle orthographe est correcte ?",      word:"BALLON",      choices:["BALON","BALLLON","BALLON"], correct:2 },
      { question:"Quel mot vient de la famille de FORT ?", word:"FORT",        choices:["FORTERESSE","CHÂTEAU","TOUR"],correct:0 },
      { question:"Quelle lettre finale muette dans LAIT ?",word:"LAIT",        choices:["T","S","rien"],             correct:0 },
      { question:"Comment se prononce le C dans CERISE ?", word:"CERISE",      choices:["K","S","CH"],               correct:1 }
    ],
    3: [
      { question:"Quel mot rime avec GRENOUILLE ?",        word:"GRENOUILLE",  choices:["CITROUILLE","CHAMPIGNON","PAPILLON"],  correct:0 },
      { question:"Comment se prononce TION dans NATATION ?",word:"NATATION",   choices:["SION","TION","ZION"],                  correct:1 },
      { question:"Quelle orthographe est correcte ?",      word:"DÉVELOPPEMENT",choices:["DEVELOPPEMENT","DÉVELOPPEMENT","DÉVELOPPEMMENT"],correct:1 },
      { question:"Quel son nasal dans TAMBOURIN ?",        word:"TAMBOURIN",   choices:["AN et IN","ON","UN"],                  correct:0 },
      { question:"Quelle orthographe est correcte ?",      word:"EXCELLENT",   choices:["EXCELENT","EXELLENT","EXCELLENT"],     correct:2 },
      { question:"Quel mot vient de la famille de LUMIÈRE ?",word:"LUMIÈRE",   choices:["OBSCURITÉ","LUMINEUX","SOMBRE"],       correct:1 },
      { question:"Quelle lettre est muette dans CORPS ?",  word:"CORPS",       choices:["S","P","PS"],                          correct:0 },
      { question:"Quel mot est bien écrit ?",              word:"BIBLIOTHÈQUE", choices:["BIBLIOHEQUE","BIBLIOTEQUE","BIBLIOTHÈQUE"],correct:2 }
    ]
  },

  /* ---------------------------------------------------------
     BADGES
  --------------------------------------------------------- */
  badges: [
    { key:"premier_pas",    emoji:"🌟", name:"Premier pas",            desc:"Réussir 1 exercice" },
    { key:"serie_5",        emoji:"🔥", name:"En feu !",                desc:"5 bonnes réponses d'affilée" },
    { key:"explorateur",    emoji:"🧭", name:"Explorateur",             desc:"Visiter tous les mondes" },
    { key:"syllabes_maitre",emoji:"🍄", name:"Maître des syllabes",     desc:"Niveau 3 — Monde 1" },
    { key:"lecteur",        emoji:"📚", name:"Lecteur courageux",       desc:"Lire 5 histoires en entier" },
    { key:"orthographe_pro",emoji:"✏️",name:"As de l'orthographe",    desc:"Niveau 3 — Monde 5" },
    { key:"oeil_de_lynx",   emoji:"🎯", name:"Œil de lynx",             desc:"10 intrus trouvés" },
    { key:"champion_bdp",   emoji:"🔮", name:"Maître des miroirs",      desc:"Niveau 3 — Monde 8 B/D/P" },
    { key:"roi_des_rimes",  emoji:"🎵", name:"Roi des rimes",           desc:"Niveau 3 — Monde 9 Rimes" },
    { key:"grand_champion", emoji:"🏆", name:"Grand Champion",          desc:"Niveau 3 — Monde 18 Boss" },
    { key:"capitaine",      emoji:"👑", name:"Champion du Royaume",     desc:"70 étoiles au total" },
    { key:"legende",        emoji:"💎", name:"Légende du Royaume",      desc:"Tous les mondes au niveau 3" }
  ]
};
