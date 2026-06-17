/* ============================================================
   STORAGE.JS — Sauvegarde locale + export/import
   Le jeu est hébergé en statique (GitHub Pages), il n'y a donc
   pas de serveur : la progression est stockée dans le
   navigateur (localStorage). Pour changer d'appareil, on peut
   exporter la progression dans un fichier .json et la
   réimporter ailleurs.
   ============================================================ */

const STORAGE_KEY = "lectureAventure_v1";

const defaultState = () => ({
  playerName: "",
  avatar: "🦊",
  stars: 0,
  totalCorrect: 0,
  totalAttempts: 0,
  streak: 0,
  bestStreak: 0,
  islandsVisited: [],
  islandProgress: {
    syllabes:      { level: 1, history: [] },
    motsSages:     { level: 1, history: [] },
    motsRebelles:  { level: 1, history: [] },
    sonsJumeaux:   { level: 1, history: [] },
    atelier:       { level: 1, history: [] },
    concentration: { level: 1, history: [] },
    phare:         { level: 1, history: [], textsCompleted: 0 }
  },
  earnedBadges: [],
  daysActive: {},      // { "2026-06-17": true, ... }
  lastPlayed: null
});

const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      // fusion défensive avec les valeurs par défaut (au cas où
      // de nouvelles îles/clés ont été ajoutées depuis)
      const base = defaultState();
      return {
        ...base,
        ...parsed,
        islandProgress: { ...base.islandProgress, ...(parsed.islandProgress || {}) }
      };
    } catch (e) {
      console.warn("Lecture progression impossible, redémarrage propre.", e);
      return defaultState();
    }
  },

  save(state) {
    try {
      state.lastPlayed = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error("Sauvegarde impossible :", e);
      return false;
    }
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    return defaultState();
  },

  /* ---- Export vers fichier téléchargeable (pour changer d'appareil) ---- */
  exportToFile(state) {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    a.href = url;
    a.download = `progression-${state.playerName || "joueur"}-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  /* ---- Import depuis un fichier choisi par l'utilisateur ---- */
  importFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          const base = defaultState();
          const merged = {
            ...base,
            ...parsed,
            islandProgress: { ...base.islandProgress, ...(parsed.islandProgress || {}) }
          };
          resolve(merged);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
};
