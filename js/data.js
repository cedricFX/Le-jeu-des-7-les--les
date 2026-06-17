/* ============================================================
   DATA.JS — Toutes les données pédagogiques du jeu
   Basé sur le bilan orthophonique : travail ciblé sur
   syllabes complexes, mots réguliers/irréguliers,
   discrimination phonétique, orthographe (omissions) et
   attention visuelle.
   Chaque banque a 3 paliers de difficulté (1 = facile,
   3 = difficile) utilisés par le moteur adaptatif (adaptive.js)
   ============================================================ */

const GAME_DATA = {

  /* ---------------------------------------------------------
     ÎLES DU JEU
     Chaque île = une compétence du bilan orthophonique
  --------------------------------------------------------- */
  islands: [
    {
      id: "syllabes",
      name: "Île des Syllabes",
      emoji: "🏝️",
      color: "#3FB8AF",
      desc: "Démêle les syllabes qui se ressemblent",
      unlockStars: 0
    },
    {
      id: "motsSages",
      name: "Forteresse des Mots Sages",
      emoji: "🏯",
      color: "#FF8C42",
      desc: "Lis les mots qui suivent les règles",
      unlockStars: 4
    },
    {
      id: "motsRebelles",
      name: "Grotte des Mots Rebelles",
      emoji: "🐉",
      color: "#9B5DE5",
      desc: "Apprivoise les mots qui ne s'écrivent pas comme ils se disent",
      unlockStars: 8
    },
    {
      id: "sonsJumeaux",
      name: "Vallée des Sons Jumeaux",
      emoji: "🎭",
      color: "#F94144",
      desc: "Distingue les sons qui se confondent",
      unlockStars: 12
    },
    {
      id: "atelier",
      name: "Atelier d'Écriture",
      emoji: "✍️",
      color: "#43AA8B",
      desc: "Écris les mots sans en oublier un bout",
      unlockStars: 16
    },
    {
      id: "concentration",
      name: "Tour de la Concentration",
      emoji: "🦉",
      color: "#577590",
      desc: "Aiguise ton attention et ton regard",
      unlockStars: 20
    },
    {
      id: "phare",
      name: "Phare des Histoires",
      emoji: "📖",
      color: "#F3722C",
      desc: "Lis des histoires à voix haute, à ton rythme",
      unlockStars: 24
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
      { word: "TO", choices: ["TO", "OT"], correct: 0 }
    ],
    2: [
      { word: "GOR", choices: ["GOR", "GRO", "OGR"], correct: 0 },
      { word: "BRA", choices: ["BAR", "RBA", "BRA"], correct: 2 },
      { word: "TRI", choices: ["TIR", "ITR", "TRI"], correct: 2 },
      { word: "FRI", choices: ["RIF", "FRI", "IRF"], correct: 1 },
      { word: "PLU", choices: ["LPU", "PLU", "UPL"], correct: 1 },
      { word: "STE", choices: ["TES", "STE", "ETS"], correct: 1 },
      { word: "DRO", choices: ["DOR", "DRO", "ROD"], correct: 1 },
      { word: "CRI", choices: ["CRI", "RIC", "ICR"], correct: 0 }
    ],
    3: [
      { word: "TRON", choices: ["TRON", "TORN", "TRNO"], correct: 0 },
      { word: "BLOU", choices: ["BOLU", "BLOU", "LOUB"], correct: 1 },
      { word: "SPLU", choices: ["SPLU", "PLUS", "SULP"], correct: 0 },
      { word: "CHRA", choices: ["CRAH", "CHRA", "HCRA"], correct: 1 },
      { word: "GRIN", choices: ["GRIN", "GIRN", "NRIG"], correct: 0 },
      { word: "STRA", choices: ["STRA", "STAR", "TRAS"], correct: 0 },
      { word: "BRUN", choices: ["BURN", "BRUN", "RUBN"], correct: 1 }
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
      { word: "BALLON", choices: ["BALON", "BALLON"], correct: 1 }
    ],
    2: [
      { word: "CHAPEAU", choices: ["SHAPEAU", "CAHPEAU", "CHAPEAU"], correct: 2 },
      { word: "CLASSE", choices: ["CLASSS", "CLAS", "CLASSE"], correct: 2 },
      { word: "BLANC", choices: ["BLANCE", "BLAN", "BLANC"], correct: 2 },
      { word: "FENÊTRE", choices: ["FENÊTRE", "FENETRE", "FENNÊTRE"], correct: 0 },
      { word: "TABLIER", choices: ["TABLIER", "TABLIE", "TABLLIER"], correct: 0 },
      { word: "MARTEAU", choices: ["MARTEAU", "MARTAUX", "MARTEEAU"], correct: 0 }
    ],
    3: [
      { word: "CHOCOLAT", choices: ["CHOCOLA", "CHOKOLAT", "CHOCOLAT"], correct: 2 },
      { word: "ESCARGOT", choices: ["ESCARGO", "ESCARGOT", "EXCARGOT"], correct: 1 },
      { word: "PARAPLUIE", choices: ["PARAPLUIE", "PARAPLUI", "PARAPLIE"], correct: 0 },
      { word: "ORDINATEUR", choices: ["ORDINATEUR", "ORDINATEURE", "ORDINNATEUR"], correct: 0 },
      { word: "ANNIVERSAIRE", choices: ["ANIVERSAIRE", "ANNIVERSAIRE", "ANNIVERSERE"], correct: 1 }
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
      { word: "FEMME", choices: ["FAME", "FEMME"], correct: 1 }
    ],
    2: [
      { word: "COUP", choices: ["COUPE", "COOP", "COUP"], correct: 2 },
      { word: "BORD", choices: ["BORDE", "BORD", "BORT"], correct: 1 },
      { word: "BLANC", choices: ["BLANK", "BLAN", "BLANC"], correct: 2 },
      { word: "AUTOMNE", choices: ["AUTOMNE", "AUTOMME", "OTOMNE"], correct: 0 },
      { word: "OISEAU", choices: ["OIZO", "OISEAU", "OIZEAU"], correct: 1 },
      { word: "SEPT", choices: ["CET", "SEPT", "SET"], correct: 1 }
    ],
    3: [
      { word: "ARMOIRE", choices: ["AROMOIRE", "ARMOIRE", "ARMOIIR"], correct: 1 },
      { word: "MONSIEUR", choices: ["MOSSIEUR", "MONSIEUR", "MONCIEUR"], correct: 1 },
      { word: "BEAUCOUP", choices: ["BOCOU", "BEAUCOUP", "BAUCOUP"], correct: 1 },
      { word: "EXAMEN", choices: ["EXAMEN", "EGZAMEN", "EXAMAIN"], correct: 0 },
      { word: "PORC", choices: ["KORK", "PORC", "PORK"], correct: 1 }
    ]
  },

  /* ---------------------------------------------------------
     4. SONS JUMEAUX (discrimination phonétique)
  --------------------------------------------------------- */
  sonsJumeaux: {
    1: [
      { question: "Quel son entends-tu dans BALLON ?", word:"BALLON", choices: ["ON", "AN"], correct: 0 },
      { question: "Quel son entends-tu dans MAMAN ?", word:"MAMAN", choices: ["ON", "AN"], correct: 1 },
      { question: "Quel son entends-tu dans LAPIN ?", word:"LAPIN", choices: ["IN", "AIN"], correct: 0 }
    ],
    2: [
      { question: "Quel son entends-tu dans CHIEN ?", word:"CHIEN", choices: ["IAN", "IEN"], correct: 1 },
      { question: "Quel son entends-tu dans PIANO ?", word:"PIANO", choices: ["IEN", "IAN"], correct: 1 },
      { question: "Quel son entends-tu dans VIOLON ?", word:"VIOLON", choices: ["OI", "IO"], correct: 1 },
      { question: "Quel son entends-tu dans TOIT ?", word:"TOIT", choices: ["OI", "IO"], correct: 0 },
      { question: "Comment se prononce ce groupe ?", word:"FRI", choices: ["FRI", "RIF"], correct: 0 }
    ],
    3: [
      { question: "Quel son entends-tu dans ANCIEN ?", word:"ANCIEN", choices: ["IEN", "IAN"], correct: 0 },
      { question: "Quel son entends-tu dans PATIENT ?", word:"PATIENT", choices: ["IEN", "IAN"], correct: 0 },
      { question: "Quel son entends-tu dans ÉTOILE ?", word:"ÉTOILE", choices: ["OI", "IO"], correct: 0 },
      { question: "Quel son entends-tu dans HISTORIEN ?", word:"HISTORIEN", choices: ["IEN", "ION"], correct: 0 }
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
      { word: "ROUE", display: "RO_E", missing: "U" }
    ],
    2: [
      { word: "CHAMBRE", display: "CH_MBRE", missing: "A" },
      { word: "CASSEROLE", display: "CASSE_OLE", missing: "R" },
      { word: "CLASSE", display: "CLA_SE", missing: "S" },
      { word: "TABLEAU", display: "TABL_AU", missing: "E" },
      { word: "GOMME", display: "GO_ME", missing: "M" }
    ],
    3: [
      { word: "ARMOIRE", display: "AR_OIRE", missing: "M" },
      { word: "ORDINATEUR", display: "ORDINAT_UR", missing: "E" },
      { word: "ANNIVERSAIRE", display: "ANNI_ERSAIRE", missing: "V" },
      { word: "PARAPLUIE", display: "PARA_LUIE", missing: "P" }
    ]
  },

  /* ---------------------------------------------------------
     6. TEXTES DE LECTURE (Phare des Histoires)
  --------------------------------------------------------- */
  readingTexts: {
    1: [
      "Le chat dort sur le lit. Il fait chaud. Maman prépare le repas.",
      "Léo joue dans le jardin. Il a un ballon rouge. Le chien court avec lui.",
      "Il pleut dehors. Lina lit un livre près de la fenêtre. Elle a chaud sous sa couverture."
    ],
    2: [
      "Aujourd'hui c'est lundi. Il fait beau. Jules va à l'école avec son sac bleu. Dans la classe, il y a un tableau vert et des livres sur les étagères.",
      "La forêt est grande et verte. Les oiseaux chantent dans les arbres. Un lapin blanc court dans l'herbe. Le soleil brille et réchauffe la terre.",
      "Le petit poisson rouge vit dans un bocal sur la table. Tous les matins, on lui donne à manger. Il tourne en rond et regarde les enfants jouer."
    ],
    3: [
      "Pierre et Marie jouent aux cartes après le dîner. La grand-mère tricote près de la fenêtre. Le feu crépite dans la cheminée. Dehors il neige doucement et les flocons recouvrent le jardin.",
      "Le dragon vivait au sommet de la montagne, dans une grotte sombre et froide. Chaque matin, il sortait voler au-dessus de la forêt pour chercher de quoi manger, puis il rentrait se réchauffer près d'un grand feu.",
      "Camille adore les vacances chez ses grands-parents à la campagne. Elle se lève tôt pour aller chercher les œufs dans le poulailler, puis elle aide son grand-père à arroser le potager avant que la chaleur du midi n'arrive."
    ]
  },

  /* ---------------------------------------------------------
     7. JEUX D'ATTENTION VISUELLE (Tour de la Concentration)
     Trouver l'intrus dans une grille — entraîne l'attention
     visuelle, point identifié comme fragile dans le bilan.
  --------------------------------------------------------- */
  attentionGames: {
    1: [
      { grid: ["b","b","b","b","d","b","b","b","b"], oddIndex: 4 },
      { grid: ["p","p","p","q","p","p","p","p","p"], oddIndex: 3 },
      { grid: ["m","m","m","m","m","n","m","m","m"], oddIndex: 5 }
    ],
    2: [
      { grid: ["on","on","on","an","on","on","on","on","on"], oddIndex: 3 },
      { grid: ["ian","ian","ien","ian","ian","ian","ian","ian","ian"], oddIndex: 2 },
      { grid: ["bra","bra","bar","bra","bra","bra","bra","bra","bra"], oddIndex: 2 },
      { grid: ["gor","gor","gro","gor","gor","gor","gor","gor","gor"], oddIndex: 2 }
    ],
    3: [
      { grid: ["chra","chra","chra","crha","chra","chra","chra","chra","chra"], oddIndex: 3 },
      { grid: ["plon","plon","poln","plon","plon","plon","plon","plon","plon"], oddIndex: 2 },
      { grid: ["strin","strin","strin","stirn","strin","strin","strin","strin","strin"], oddIndex: 3 },
      { grid: ["gristo","gristo","grosti","gristo","gristo","gristo","gristo","gristo","gristo"], oddIndex: 2 }
    ]
  },

  /* ---------------------------------------------------------
     BADGES
  --------------------------------------------------------- */
  badges: [
    { key: "premier_pas",   emoji: "🌟", name: "Premier pas",        desc: "Réussir 1 exercice" },
    { key: "serie_5",       emoji: "🔥", name: "En feu !",            desc: "5 bonnes réponses d'affilée" },
    { key: "explorateur",   emoji: "🧭", name: "Explorateur",         desc: "Visiter toutes les îles" },
    { key: "syllabes_maitre",emoji: "🏝️", name: "Maître des syllabes",desc: "Niveau 3 sur l'Île des Syllabes" },
    { key: "lecteur",       emoji: "📚", name: "Lecteur courageux",   desc: "Lire 5 histoires en entier" },
    { key: "orthographe_pro",emoji:"✍️", name: "As de l'orthographe", desc: "Niveau 3 à l'Atelier d'Écriture" },
    { key: "oeil_de_lynx",  emoji: "🦉", name: "Œil de lynx",         desc: "10 intrus trouvés" },
    { key: "capitaine",     emoji: "⚓", name: "Capitaine confirmé",  desc: "30 étoiles au total" },
    { key: "legende",       emoji: "👑", name: "Légende de l'archipel",desc: "Toutes les îles au niveau 3" }
  ]
};
