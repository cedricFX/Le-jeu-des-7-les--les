/* ============================================================
   DATA.JS — L'Archipel des Lettres × Thème Mario
   Bilan orthophonique Juliann BRUNCK (CE1) +
   enrichissement B/D/P et nouveau Monde 8.
   3 paliers par monde, moteur adaptatif (adaptive.js).
   ============================================================ */

const GAME_DATA = {

  /* ---------------------------------------------------------
     MONDES DU JEU
  --------------------------------------------------------- */
  islands: [
    {
      id: "syllabes",
      name: "Monde 1 — Plaine des Syllabes",
      emoji: "🍄",
      color: "#3FB8AF",
      desc: "Démêle les syllabes qui se ressemblent",
      unlockStars: 0
    },
    {
      id: "motsSages",
      name: "Monde 2 — Château des Mots Sages",
      emoji: "🏰",
      color: "#FF8C42",
      desc: "Lis les mots qui suivent les règles",
      unlockStars: 4
    },
    {
      id: "motsRebelles",
      name: "Monde 3 — Grotte des Mots Rebelles",
      emoji: "👾",
      color: "#9B5DE5",
      desc: "Apprivoise les mots qui ne s'écrivent pas comme ils se disent",
      unlockStars: 8
    },
    {
      id: "sonsJumeaux",
      name: "Monde 4 — Vallée des Sons Jumeaux",
      emoji: "⭐",
      color: "#F94144",
      desc: "Distingue les sons qui se confondent",
      unlockStars: 12
    },
    {
      id: "atelier",
      name: "Monde 5 — Atelier de Luigi",
      emoji: "✏️",
      color: "#43AA8B",
      desc: "Écris les mots sans en oublier un bout",
      unlockStars: 16
    },
    {
      id: "concentration",
      name: "Monde 6 — Tour de Bowser",
      emoji: "🐢",
      color: "#577590",
      desc: "Aiguise ton attention et ton regard",
      unlockStars: 20
    },
    {
      id: "phare",
      name: "Monde 7 — La Bibliothèque Étoilée",
      emoji: "🌟",
      color: "#F3722C",
      desc: "Lis des histoires à voix haute, à ton rythme",
      unlockStars: 24
    },
    {
      id: "bdp",
      name: "Monde 8 — L'Île des Lettres Miroirs",
      emoji: "🔮",
      color: "#E040FB",
      desc: "Démêle les b, d et p qui se ressemblent",
      unlockStars: 30
    }
  ],

  /* ---------------------------------------------------------
     1. SYLLABES COMPLEXES
  --------------------------------------------------------- */
  syllabes: {
    1: [
      { word: "MA", choices: ["MA", "AM"], correct: 0 },
      { word: "SO", choices: ["OS", "SO"], correct: 1 },
      { word: "LU", choices: ["UL", "LU"], correct: 1 },
      { word: "RI", choices: ["RI", "IR"], correct: 0 },
      { word: "PA", choices: ["AP", "PA"], correct: 1 },
      { word: "TO", choices: ["TO", "OT"], correct: 0 },
      { word: "VE", choices: ["EV", "VE"], correct: 1 },
      { word: "NU", choices: ["NU", "UN"], correct: 0 },
      { word: "BO", choices: ["OB", "BO"], correct: 1 },
      { word: "FI", choices: ["FI", "IF"], correct: 0 }
    ],
    2: [
      { word: "GOR", choices: ["GOR", "GRO", "OGR"], correct: 0 },
      { word: "BRA", choices: ["BAR", "RBA", "BRA"], correct: 2 },
      { word: "TRI", choices: ["TIR", "ITR", "TRI"], correct: 2 },
      { word: "FRI", choices: ["RIF", "FRI", "IRF"], correct: 1 },
      { word: "PLU", choices: ["LPU", "PLU", "UPL"], correct: 1 },
      { word: "STE", choices: ["TES", "STE", "ETS"], correct: 1 },
      { word: "DRO", choices: ["DOR", "DRO", "ROD"], correct: 1 },
      { word: "CRI", choices: ["CRI", "RIC", "ICR"], correct: 0 },
      { word: "PRE", choices: ["PER", "PRE", "ERP"], correct: 1 },
      { word: "BLO", choices: ["BOL", "OBL", "BLO"], correct: 2 },
      { word: "GRE", choices: ["GRE", "REG", "EGR"], correct: 0 },
      { word: "TRO", choices: ["ORT", "TOR", "TRO"], correct: 2 }
    ],
    3: [
      { word: "TRON", choices: ["TRON", "TORN", "TRNO"], correct: 0 },
      { word: "BLOU", choices: ["BOLU", "BLOU", "LOUB"], correct: 1 },
      { word: "SPLU", choices: ["SPLU", "PLUS", "SULP"], correct: 0 },
      { word: "CHRA", choices: ["CRAH", "CHRA", "HCRA"], correct: 1 },
      { word: "GRIN", choices: ["GRIN", "GIRN", "NRIG"], correct: 0 },
      { word: "STRA", choices: ["STRA", "STAR", "TRAS"], correct: 0 },
      { word: "BRUN", choices: ["BURN", "BRUN", "RUBN"], correct: 1 },
      { word: "CRIN", choices: ["CRIN", "CIRN", "RICN"], correct: 0 },
      { word: "FLOU", choices: ["FLOU", "LOUF", "FOLU"], correct: 0 },
      { word: "PREC", choices: ["PERC", "PREC", "RECP"], correct: 1 }
    ]
  },

  /* ---------------------------------------------------------
     2. MOTS RÉGULIERS (voie phonologique)
  --------------------------------------------------------- */
  motsSages: {
    1: [
      { word: "PAPA", choices: ["PAPA", "PAPO"], correct: 0 },
      { word: "VÉLO", choices: ["VÉLO", "VÉLE"], correct: 0 },
      { word: "GOMME", choices: ["GOME", "GOMME"], correct: 1 },
      { word: "DANS", choices: ["DANS", "DENS"], correct: 0 },
      { word: "BALLON", choices: ["BALON", "BALLON"], correct: 1 },
      { word: "LIRE", choices: ["LIRE", "LISE"], correct: 0 },
      { word: "MOTO", choices: ["MOTO", "MOTA"], correct: 0 },
      { word: "PELLE", choices: ["PELE", "PELLE"], correct: 1 },
      { word: "SABLE", choices: ["SABLE", "SAPLE"], correct: 0 },
      { word: "NUIT", choices: ["NUIS", "NUIT"], correct: 1 }
    ],
    2: [
      { word: "CHAPEAU", choices: ["SHAPEAU", "CAHPEAU", "CHAPEAU"], correct: 2 },
      { word: "CLASSE", choices: ["CLASSS", "CLAS", "CLASSE"], correct: 2 },
      { word: "BLANC", choices: ["BLANCE", "BLAN", "BLANC"], correct: 2 },
      { word: "FENÊTRE", choices: ["FENÊTRE", "FENETRE", "FENNÊTRE"], correct: 0 },
      { word: "TABLIER", choices: ["TABLIER", "TABLIE", "TABLLIER"], correct: 0 },
      { word: "MARTEAU", choices: ["MARTEAU", "MARTAUX", "MARTEEAU"], correct: 0 },
      { word: "TROUSSE", choices: ["TROUSS", "TROUSSE", "TROUSE"], correct: 1 },
      { word: "CRAYON", choices: ["CRAYON", "CRAIYON", "KREYON"], correct: 0 },
      { word: "MAISON", choices: ["MAIZON", "MAISON", "MAISONE"], correct: 1 },
      { word: "GARAGE", choices: ["GARRGE", "GARRAGE", "GARAGE"], correct: 2 },
      { word: "SORTIR", choices: ["SORTIR", "SORTTIR", "SORTIRE"], correct: 0 },
      { word: "PARTIR", choices: ["PARTIR", "PARTTIR", "PARTIRE"], correct: 0 }
    ],
    3: [
      { word: "CHOCOLAT", choices: ["CHOCOLA", "CHOKOLAT", "CHOCOLAT"], correct: 2 },
      { word: "ESCARGOT", choices: ["ESCARGO", "ESCARGOT", "EXCARGOT"], correct: 1 },
      { word: "PARAPLUIE", choices: ["PARAPLUIE", "PARAPLUI", "PARAPLIE"], correct: 0 },
      { word: "ORDINATEUR", choices: ["ORDINATEUR", "ORDINATEURE", "ORDINNATEUR"], correct: 0 },
      { word: "ANNIVERSAIRE", choices: ["ANIVERSAIRE", "ANNIVERSAIRE", "ANNIVERSERE"], correct: 1 },
      { word: "CARNAVAL", choices: ["CARNAVAL", "CARNEVAL", "KARNEVAL"], correct: 0 },
      { word: "PAPILLON", choices: ["PAPILLON", "PAPILON", "PAPILONE"], correct: 0 },
      { word: "CERISIER", choices: ["SERISIER", "CERISIER", "CERIZIER"], correct: 1 },
      { word: "BRICOLAGE", choices: ["BRICOLLAGE", "BRIKOLAGE", "BRICOLAGE"], correct: 2 },
      { word: "PRINTEMPS", choices: ["PRINTEMPS", "PRITEMPS", "PRINTAMPS"], correct: 0 }
    ]
  },

  /* ---------------------------------------------------------
     3. MOTS IRRÉGULIERS (voie lexicale)
  --------------------------------------------------------- */
  motsRebelles: {
    1: [
      { word: "DEUX", choices: ["DEUX", "DEU"], correct: 0 },
      { word: "OEUF", choices: ["OEUF", "EUF"], correct: 0 },
      { word: "DOIGT", choices: ["DOI", "DOIGT"], correct: 1 },
      { word: "FEMME", choices: ["FAME", "FEMME"], correct: 1 },
      { word: "FILS", choices: ["FIS", "FILS"], correct: 1 },
      { word: "CLEF", choices: ["CLEF", "CLF"], correct: 0 },
      { word: "NOEUD", choices: ["NOEUD", "NOEU"], correct: 0 },
      { word: "PIED", choices: ["PIÉ", "PIED"], correct: 1 }
    ],
    2: [
      { word: "COUP", choices: ["COUPE", "COOP", "COUP"], correct: 2 },
      { word: "BORD", choices: ["BORDE", "BORD", "BORT"], correct: 1 },
      { word: "BLANC", choices: ["BLANK", "BLAN", "BLANC"], correct: 2 },
      { word: "AUTOMNE", choices: ["AUTOMNE", "AUTOMME", "OTOMNE"], correct: 0 },
      { word: "OISEAU", choices: ["OIZO", "OISEAU", "OIZEAU"], correct: 1 },
      { word: "SEPT", choices: ["CET", "SEPT", "SET"], correct: 1 },
      { word: "VINGT", choices: ["VIN", "VINGT", "VINT"], correct: 1 },
      { word: "TEMPS", choices: ["TAN", "TEMPS", "TAMPS"], correct: 1 },
      { word: "CORPS", choices: ["COR", "CORP", "CORPS"], correct: 2 },
      { word: "JAMBE", choices: ["JANBE", "JAMBE", "JANME"], correct: 1 }
    ],
    3: [
      { word: "ARMOIRE", choices: ["AROMOIRE", "ARMOIRE", "ARMOIIR"], correct: 1 },
      { word: "MONSIEUR", choices: ["MOSSIEUR", "MONSIEUR", "MONCIEUR"], correct: 1 },
      { word: "BEAUCOUP", choices: ["BOCOU", "BEAUCOUP", "BAUCOUP"], correct: 1 },
      { word: "EXAMEN", choices: ["EXAMEN", "EGZAMEN", "EXAMAIN"], correct: 0 },
      { word: "PORC", choices: ["KORK", "PORC", "PORK"], correct: 1 },
      { word: "TABAC", choices: ["TABA", "TABACK", "TABAC"], correct: 2 },
      { word: "RESPECT", choices: ["RESPEC", "RESPECT", "RESSPECT"], correct: 1 },
      { word: "LONGTEMPS", choices: ["LONGTEMPS", "LONTEMPS", "LONTAMP"], correct: 0 },
      { word: "CUEILLIR", choices: ["QUEILLIR", "CUEILLIR", "CUILLIR"], correct: 1 },
      { word: "AQUARIUM", choices: ["AQUARIUM", "AQUARIME", "AKUARIUM"], correct: 0 }
    ]
  },

  /* ---------------------------------------------------------
     4. SONS JUMEAUX (discrimination phonétique)
  --------------------------------------------------------- */
  sonsJumeaux: {
    1: [
      { question: "Quel son entends-tu dans BALLON ?", word:"BALLON", choices: ["ON", "AN"], correct: 0 },
      { question: "Quel son entends-tu dans MAMAN ?", word:"MAMAN", choices: ["ON", "AN"], correct: 1 },
      { question: "Quel son entends-tu dans LAPIN ?", word:"LAPIN", choices: ["IN", "AIN"], correct: 0 },
      { question: "Quel son entends-tu dans MAIN ?", word:"MAIN", choices: ["IN", "AIN"], correct: 1 },
      { question: "Quel son entends-tu dans LION ?", word:"LION", choices: ["ON", "AN"], correct: 0 },
      { question: "Quel son entends-tu dans CHANSON ?", word:"CHANSON", choices: ["ON", "AN"], correct: 0 },
      { question: "Quel son entends-tu dans ENFANT ?", word:"ENFANT", choices: ["ON", "AN"], correct: 1 }
    ],
    2: [
      { question: "Quel son entends-tu dans CHIEN ?", word:"CHIEN", choices: ["IAN", "IEN"], correct: 1 },
      { question: "Quel son entends-tu dans PIANO ?", word:"PIANO", choices: ["IEN", "IAN"], correct: 1 },
      { question: "Quel son entends-tu dans VIOLON ?", word:"VIOLON", choices: ["OI", "IO"], correct: 1 },
      { question: "Quel son entends-tu dans TOIT ?", word:"TOIT", choices: ["OI", "IO"], correct: 0 },
      { question: "Comment se prononce ce groupe ?", word:"FRI", choices: ["FRI", "RIF"], correct: 0 },
      { question: "Quel son entends-tu dans MIEL ?", word:"MIEL", choices: ["IAN", "IEL"], correct: 1 },
      { question: "Quel son entends-tu dans PIED ?", word:"PIED", choices: ["IED", "IAD"], correct: 0 },
      { question: "Quel son entends-tu dans VOILE ?", word:"VOILE", choices: ["OI", "IO"], correct: 0 }
    ],
    3: [
      { question: "Quel son entends-tu dans ANCIEN ?", word:"ANCIEN", choices: ["IEN", "IAN"], correct: 0 },
      { question: "Quel son entends-tu dans PATIENT ?", word:"PATIENT", choices: ["IEN", "IAN"], correct: 0 },
      { question: "Quel son entends-tu dans ÉTOILE ?", word:"ÉTOILE", choices: ["OI", "IO"], correct: 0 },
      { question: "Quel son entends-tu dans HISTORIEN ?", word:"HISTORIEN", choices: ["IEN", "ION"], correct: 0 },
      { question: "Quel son dans CAHIER ?", word:"CAHIER", choices: ["IER", "IEN"], correct: 0 },
      { question: "Quel son dans VOISIN ?", word:"VOISIN", choices: ["OI", "IO"], correct: 0 },
      { question: "Quel son dans QUOTIDIEN ?", word:"QUOTIDIEN", choices: ["IEN", "IAN"], correct: 0 }
    ]
  },

  /* ---------------------------------------------------------
     5. ATELIER D'ÉCRITURE (orthographe, omissions)
  --------------------------------------------------------- */
  atelier: {
    1: [
      { word: "CHAT", display: "CH_T", missing: "A" },
      { word: "VÉLO", display: "VÉL_", missing: "O" },
      { word: "LUNE", display: "LU_E", missing: "N" },
      { word: "ROUE", display: "RO_E", missing: "U" },
      { word: "BRAS", display: "B_AS", missing: "R" },
      { word: "FLEUR", display: "FL_UR", missing: "E" },
      { word: "SOLEIL", display: "S_LEIL", missing: "O" },
      { word: "PORTE", display: "PO_TE", missing: "R" },
      { word: "NUIT", display: "NU_T", missing: "I" },
      { word: "ROUGE", display: "R_UGE", missing: "O" }
    ],
    2: [
      { word: "CHAMBRE", display: "CH_MBRE", missing: "A" },
      { word: "CASSEROLE", display: "CASSE_OLE", missing: "R" },
      { word: "CLASSE", display: "CLA_SE", missing: "S" },
      { word: "TABLEAU", display: "TABL_AU", missing: "E" },
      { word: "GOMME", display: "GO_ME", missing: "M" },
      { word: "TROUSSE", display: "T_OUSSE", missing: "R" },
      { word: "CRAYON", display: "CR_YON", missing: "A" },
      { word: "GARDIEN", display: "GA_DIEN", missing: "R" },
      { word: "SERPENT", display: "SE_PENT", missing: "R" },
      { word: "VILLAGE", display: "VIL_AGE", missing: "L" }
    ],
    3: [
      { word: "ARMOIRE", display: "AR_OIRE", missing: "M" },
      { word: "ORDINATEUR", display: "ORDINAT_UR", missing: "E" },
      { word: "ANNIVERSAIRE", display: "ANNI_ERSAIRE", missing: "V" },
      { word: "PARAPLUIE", display: "PARA_LUIE", missing: "P" },
      { word: "BRICOLAGE", display: "B_ICOLAGE", missing: "R" },
      { word: "PRINTEMPS", display: "P_INTEMPS", missing: "R" },
      { word: "CARNAVAL", display: "CA_NAVAL", missing: "R" },
      { word: "FANTÔME", display: "FAN_ÔME", missing: "T" },
      { word: "CHAMPION", display: "CHAMPI_N", missing: "O" },
      { word: "GRENOUILLE", display: "G_ENOUILLE", missing: "R" }
    ]
  },

  /* ---------------------------------------------------------
     6. TEXTES DE LECTURE (Phare des Histoires)
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
      "Le jardinier plante des graines dans la terre. Il arrose chaque matin et attend patiemment. Quelques jours plus tard, de petites pousses vertes sortent de la terre et pointent vers le soleil.",
      "Au marché, la marchande vend des fraises rouges et des cerises brillantes. Les enfants choisissent leurs fruits préférés et les mettent dans un petit panier en osier."
    ],
    3: [
      "Pierre et Marie jouent aux cartes après le dîner. La grand-mère tricote près de la fenêtre. Le feu crépite dans la cheminée. Dehors il neige doucement et les flocons recouvrent le jardin.",
      "Le dragon vivait au sommet de la montagne, dans une grotte sombre et froide. Chaque matin, il sortait voler au-dessus de la forêt pour chercher de quoi manger, puis il rentrait se réchauffer près d'un grand feu.",
      "Camille adore les vacances chez ses grands-parents à la campagne. Elle se lève tôt pour aller chercher les œufs dans le poulailler, puis elle aide son grand-père à arroser le potager avant que la chaleur du midi n'arrive.",
      "Le champion plonge dans la piscine et nage aussi vite qu'un dauphin. Les spectateurs applaudissent dans les tribunes. À l'arrivée, il touche le mur en premier et lève le poing en l'air pour célébrer sa victoire.",
      "Dans la bibliothèque de l'école, on peut trouver des livres sur tous les sujets : les animaux, les planètes, les pirates, les sorcières et même les robots. Chaque semaine, les élèves choisissent un livre et le rapportent chez eux pour le lire à leur famille.",
      "La fête du village dure trois jours. Il y a des manèges, des jeux et des concerts. Les enfants gagnent des peluches en lançant des anneaux. Le soir, un feu d'artifice illumine le ciel et tout le monde regarde en silence, le nez en l'air."
    ]
  },

  /* ---------------------------------------------------------
     7. JEUX D'ATTENTION VISUELLE (Tour de Bowser)
     Enrichi avec des grilles B/D/P pour préparer le Monde 8
  --------------------------------------------------------- */
  attentionGames: {
    1: [
      { grid: ["b","b","b","b","d","b","b","b","b"], oddIndex: 4 },
      { grid: ["p","p","p","q","p","p","p","p","p"], oddIndex: 3 },
      { grid: ["m","m","m","m","m","n","m","m","m"], oddIndex: 5 },
      { grid: ["d","d","d","d","d","d","b","d","d"], oddIndex: 6 },
      { grid: ["p","p","p","p","p","b","p","p","p"], oddIndex: 5 },
      { grid: ["n","n","n","n","u","n","n","n","n"], oddIndex: 4 }
    ],
    2: [
      { grid: ["on","on","on","an","on","on","on","on","on"], oddIndex: 3 },
      { grid: ["ian","ian","ien","ian","ian","ian","ian","ian","ian"], oddIndex: 2 },
      { grid: ["bra","bra","bar","bra","bra","bra","bra","bra","bra"], oddIndex: 2 },
      { grid: ["gor","gor","gro","gor","gor","gor","gor","gor","gor"], oddIndex: 2 },
      { grid: ["ba","ba","ba","ba","da","ba","ba","ba","ba"], oddIndex: 4 },
      { grid: ["bol","bol","bol","bol","bol","dol","bol","bol","bol"], oddIndex: 5 },
      { grid: ["par","par","par","par","bar","par","par","par","par"], oddIndex: 4 },
      { grid: ["tri","tri","tri","tir","tri","tri","tri","tri","tri"], oddIndex: 3 }
    ],
    3: [
      { grid: ["chra","chra","chra","crha","chra","chra","chra","chra","chra"], oddIndex: 3 },
      { grid: ["plon","plon","poln","plon","plon","plon","plon","plon","plon"], oddIndex: 2 },
      { grid: ["strin","strin","strin","stirn","strin","strin","strin","strin","strin"], oddIndex: 3 },
      { grid: ["gristo","gristo","grosti","gristo","gristo","gristo","gristo","gristo","gristo"], oddIndex: 2 },
      { grid: ["bord","bord","bord","bord","dord","bord","bord","bord","bord"], oddIndex: 4 },
      { grid: ["pal","pal","pal","bal","pal","pal","pal","pal","pal"], oddIndex: 3 },
      { grid: ["pela","pela","pela","pela","pela","pela","bela","pela","pela"], oddIndex: 6 }
    ]
  },

  /* ---------------------------------------------------------
     8. MONDE B/D/P — Confusion des lettres miroirs
     Exercices spécifiques à la confusion b/d/p (fréquente
     en dyslexie : lettres symétriques horizontalement/vert.)
  --------------------------------------------------------- */
  bdp: {
    1: [
      {
        question: "Quelle lettre vois-tu ?",
        word: "b",
        choices: ["b", "d"],
        correct: 0
      },
      {
        question: "Quelle lettre vois-tu ?",
        word: "d",
        choices: ["b", "d"],
        correct: 1
      },
      {
        question: "Quelle lettre vois-tu ?",
        word: "p",
        choices: ["b", "p"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BALLE",
        choices: ["DALLE", "BALLE"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "DOUX",
        choices: ["DOUX", "BOUX"],
        correct: 0
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PAIN",
        choices: ["BAIN", "PAIN"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BAS",
        choices: ["BAS", "PAS"],
        correct: 0
      },
      {
        question: "Quel mot vois-tu ici ?",
        word: "BOL",
        choices: ["DOL", "BOL"],
        correct: 1
      }
    ],
    2: [
      {
        question: "Quel mot est bien écrit ?",
        word: "BATEAU",
        choices: ["DATEAU", "BATEAU", "PATEAU"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PORTE",
        choices: ["BORTE", "DORTE", "PORTE"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BOIRE",
        choices: ["POIRE", "BOIRE", "DOIRE"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "DESSIN",
        choices: ["DESSIN", "BESSIN", "PESSIN"],
        correct: 0
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PLAGE",
        choices: ["BLAGE", "DLAGE", "PLAGE"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BRAS",
        choices: ["BRAS", "PRAS", "DRAS"],
        correct: 0
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "DRÔLE",
        choices: ["BRÔLE", "PRÔLE", "DRÔLE"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PAPIER",
        choices: ["PAPIER", "BADIER", "DABIER"],
        correct: 0
      }
    ],
    3: [
      {
        question: "Quel mot est bien écrit ?",
        word: "BIBLIOTHÈQUE",
        choices: ["DIBLIOTÈQUE", "BIBLIOTHÈQUE", "PIBLIOTHÈQUE"],
        correct: 1
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PROBLÈME",
        choices: ["BROBLÈME", "DROBLÈME", "PROBLÈME"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "DRAGON",
        choices: ["DRAGON", "BRAGON", "PRAGON"],
        correct: 0
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PLOMBIER",
        choices: ["DLOMBIER", "BLOMBIER", "PLOMBIER"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BADMINTON",
        choices: ["BADMINTON", "PADMINTON", "DADMINTON"],
        correct: 0
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "BRICOLAGE",
        choices: ["PRICOLAGE", "DRICOLAGE", "BRICOLAGE"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "DÉPART",
        choices: ["BÉPART", "PÉPART", "DÉPART"],
        correct: 2
      },
      {
        question: "Quel mot est bien écrit ?",
        word: "PENDULE",
        choices: ["PENDULE", "BENDULE", "DENDULE"],
        correct: 0
      }
    ]
  },

  /* ---------------------------------------------------------
     TEXTES B/D/P (Phare quand on est en Monde 8 — futurs)
     Histoires avec beaucoup de b/d/p pour s'entraîner
  --------------------------------------------------------- */
  bdpTexts: {
    1: [
      "Papa prépare du pain. Bob a du beurre. Dodo a des dattes.",
      "Le bateau de Bob va dans la baie. Papa et Dodo le regardent depuis le bord.",
      "Dans la boîte, il y a des billes bleues et des dés dorés. Papa les pose sur la table."
    ],
    2: [
      "Bastien adore dessiner des bateaux. Il prend des crayons et des pinceaux pour peindre des dauphins bleus et des poulpes dorés.",
      "Le petit dragon vert boit dans une flaque d'eau près du pont. Trois papillons blancs passent devant lui en volant doucement.",
      "Pour son anniversaire, Pablo a reçu une boîte de dominos, un puzzle de dinosaures et des billes dorées qui brillent dans la lumière."
    ],
    3: [
      "Le plombier répare le problème dans la bibliothèque du palais. Des livres tombent partout. Pendant ce temps, les enfants jouent dans le pré avec leur ballon bleu et un grand cerf-volant rouge.",
      "Benjamin et Dorothée participent à une compétition de bricolage. Ils doivent construire un pont en bois, sans dépasser le budget prévu. Papa les aide à découper les planches pendant que leur chien Bubulle dort paisiblement sous la table.",
      "Dans la boulangerie du village, le boulanger prépare du pain, des biscuits et des brioches dès le début du matin. L'odeur agréable se répand dans toute la rue et attire les passants. Des enfants appuient leur nez contre la vitrine pour admirer les délicieux gâteaux disposés sur des plateaux dorés."
    ]
  },

  /* ---------------------------------------------------------
     BADGES
  --------------------------------------------------------- */
  badges: [
    { key: "premier_pas",    emoji: "🌟", name: "Premier pas",          desc: "Réussir 1 exercice" },
    { key: "serie_5",        emoji: "🔥", name: "En feu !",              desc: "5 bonnes réponses d'affilée" },
    { key: "explorateur",    emoji: "🧭", name: "Explorateur",           desc: "Visiter tous les mondes" },
    { key: "syllabes_maitre",emoji: "🍄", name: "Maître des syllabes",   desc: "Niveau 3 — Monde 1" },
    { key: "lecteur",        emoji: "📚", name: "Lecteur courageux",     desc: "Lire 5 histoires en entier" },
    { key: "orthographe_pro",emoji: "✏️", name: "As de l'orthographe",  desc: "Niveau 3 — Monde 5" },
    { key: "oeil_de_lynx",   emoji: "🎯", name: "Œil de lynx",           desc: "10 intrus trouvés" },
    { key: "champion_bdp",   emoji: "🔮", name: "Maître des miroirs",    desc: "Niveau 3 — Monde 8 B/D/P" },
    { key: "capitaine",      emoji: "👑", name: "Champion du Royaume",   desc: "50 étoiles au total" },
    { key: "legende",        emoji: "🏆", name: "Légende du Royaume",    desc: "Tous les mondes au niveau 3" }
  ]
};
