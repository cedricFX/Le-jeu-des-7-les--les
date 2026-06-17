/* ============================================================
   ADAPTIVE.JS — Moteur de difficulté adaptative
   Chaque île garde un historique des dernières réponses
   (vrai/faux). Si le taux de réussite récent est élevé, le
   niveau monte (palier 1 → 2 → 3). S'il est faible, le niveau
   redescend pour ne jamais mettre l'enfant en échec répété.
   Fenêtre glissante de 5 réponses, ce qui permet une
   adaptation rapide sans être instable sur 1 seule erreur.
   ============================================================ */

const Adaptive = {
  WINDOW: 5,
  LEVEL_UP_RATE: 0.8,     // ≥ 80% de réussite → monte de niveau
  LEVEL_DOWN_RATE: 0.35,  // < 35% de réussite → redescend

  /* Enregistre une réponse et renvoie { levelChanged, newLevel, direction } */
  recordAnswer(islandProgress, isCorrect) {
    islandProgress.history.push(isCorrect ? 1 : 0);
    if (islandProgress.history.length > this.WINDOW) {
      islandProgress.history.shift();
    }

    if (islandProgress.history.length < this.WINDOW) {
      return { levelChanged: false };
    }

    const rate = islandProgress.history.reduce((a, b) => a + b, 0) / this.WINDOW;

    if (rate >= this.LEVEL_UP_RATE && islandProgress.level < 3) {
      islandProgress.level++;
      islandProgress.history = []; // on repart sur une fenêtre propre au nouveau palier
      return { levelChanged: true, newLevel: islandProgress.level, direction: "up" };
    }

    if (rate <= this.LEVEL_DOWN_RATE && islandProgress.level > 1) {
      islandProgress.level--;
      islandProgress.history = [];
      return { levelChanged: true, newLevel: islandProgress.level, direction: "down" };
    }

    return { levelChanged: false };
  },

  /* Pioche un exercice aléatoire au niveau courant de l'île */
  pickExercise(islandId, level) {
    const bank = GAME_DATA[islandId];
    if (!bank) return null;
    const pool = bank[level] || bank[1];
    return pool[Math.floor(Math.random() * pool.length)];
  },

  /* Message d'encouragement adapté au changement de niveau,
     pour rendre la progression visible et motivante */
  levelChangeMessage(direction, islandName) {
    if (direction === "up") {
      return `🚀 Bravo ! Tu maîtrises si bien "${islandName}" qu'on passe au niveau supérieur !`;
    }
    return `💪 On reprend des bases un peu plus simples sur "${islandName}", tu vas y arriver !`;
  }
};
