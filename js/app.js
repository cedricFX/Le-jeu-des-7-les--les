/* ============================================================
   APP.JS — Contrôleur principal du jeu
   ============================================================ */

/* ----------------------------------------------------------
   ÉTAT GLOBAL
---------------------------------------------------------- */
let state = Storage.load();
let saveTimer = null;

const AVATARS = ["🍄","⭐","🐢","👾","🌸","🦕","🔥","🌟","🐉","🏆"];

// Nombre d'éléments (questions / histoires) par visite d'une île, avant
// de proposer de retourner à la carte. Évite les sessions sans fin.
const SESSION_LENGTH = 8;
const READING_SESSION_LENGTH = 4;

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => Storage.save(state), 400);
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function markTodayActive() {
  state.daysActive[todayKey()] = true;
}

/* ----------------------------------------------------------
   NAVIGATION
---------------------------------------------------------- */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${id}`).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.screen === id);
  });
  if (id === "map") renderMap();
  if (id === "badges") renderBadges();
  if (id === "stats") renderStats();
  if (id === "parents") renderParents();
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});
document.querySelectorAll(".btn-back").forEach(btn => {
  btn.addEventListener("click", () => {
    Speech.stop();
    showScreen(btn.dataset.target);
  });
});

/* ----------------------------------------------------------
   ONBOARDING
---------------------------------------------------------- */
function renderAvatarGrid() {
  const grid = document.getElementById("avatarGrid");
  grid.innerHTML = "";
  AVATARS.forEach(av => {
    const btn = document.createElement("button");
    btn.className = "avatar-option" + (state.avatar === av ? " selected" : "");
    btn.textContent = av;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".avatar-option").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.avatar = av;
    });
    grid.appendChild(btn);
  });
}

document.getElementById("startGameBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  state.playerName = name || "Capitaine";
  if (!state.avatar) state.avatar = AVATARS[0];
  Storage.save(state);
  launchApp();
});

document.getElementById("showImportOnboarding").addEventListener("click", () => {
  document.getElementById("importFile").click();
});

function launchApp() {
  document.getElementById("screen-onboarding").classList.remove("active");
  document.getElementById("appShell").classList.add("active");
  updateTopbar();
  showScreen("map");
}

/* ----------------------------------------------------------
   TOPBAR
---------------------------------------------------------- */
function updateTopbar() {
  document.getElementById("topAvatar").textContent = state.avatar;
  document.getElementById("topName").textContent = state.playerName;
  document.getElementById("topStars").textContent = state.stars;
  document.getElementById("topStreak").textContent = state.streak;
}

/* ----------------------------------------------------------
   CARTE DE L'ARCHIPEL
---------------------------------------------------------- */
const GREETINGS = [
  "Quel monde veux-tu explorer aujourd'hui ?",
  "En avant ! Le Royaume Champignon t'attend !",
  "Collecte des étoiles et deviens le champion !",
  "Prêt pour la prochaine aventure, héros ?"
];

function renderMap() {
  document.getElementById("mapGreeting").textContent =
    GREETINGS[Math.floor(Math.random() * GREETINGS.length)];

  const grid = document.getElementById("islandsGrid");
  grid.innerHTML = "";

  GAME_DATA.islands.forEach(island => {
    const unlocked = state.stars >= island.unlockStars;
    const progress = state.islandProgress[island.id];

    const card = document.createElement("div");
    card.className = "island-card" + (unlocked ? "" : " locked");
    card.style.borderColor = unlocked ? island.color : "transparent";
    card.innerHTML = `
      ${unlocked ? "" : '<span class="island-lock-icon">🔒</span>'}
      <span class="island-emoji">${island.emoji}</span>
      <div class="island-name">${island.name}</div>
      <div class="island-desc">${unlocked ? island.desc : `Débloque à ${island.unlockStars} ⭐`}</div>
      ${unlocked ? `<span class="island-level-badge">Niveau ${progress.level}</span>` : ""}
    `;
    if (unlocked) {
      card.addEventListener("click", () => openIsland(island.id));
    }
    grid.appendChild(card);
  });
}

function openIsland(islandId) {
  if (!state.islandsVisited.includes(islandId)) {
    state.islandsVisited.push(islandId);
    checkBadges();
  }
  if (islandId === "atelier") return startAtelier();
  if (islandId === "concentration") return startConcentration();
  if (islandId === "phare") return startPhare();
  return startExercise(islandId); // syllabes, motsSages, motsRebelles, sonsJumeaux, bdp
}

/* ----------------------------------------------------------
   EXERCICE GÉNÉRIQUE (choix multiple : syllabes, motsSages,
   motsRebelles, sonsJumeaux)
---------------------------------------------------------- */
let exCurrentIsland = null;
let exCurrentItem = null;
let exAnswered = false;
let exSessionCount = 0;
let exSessionCorrect = 0;

function startExercise(islandId) {
  exCurrentIsland = islandId;
  exSessionCount = 0;
  exSessionCorrect = 0;
  const island = GAME_DATA.islands.find(i => i.id === islandId);
  document.getElementById("exIslandBanner").textContent = `${island.emoji} ${island.name}`;
  document.getElementById("exIslandBanner").style.background =
    `linear-gradient(135deg, ${island.color}, ${shade(island.color, -25)})`;
  showScreen("exercise");
  loadExercise();
}

function loadExercise() {
  exAnswered = false;
  exSessionCount++;
  const progress = state.islandProgress[exCurrentIsland];
  const item = Adaptive.pickExercise(exCurrentIsland, progress.level);
  exCurrentItem = item;

  document.getElementById("exLevelTag").textContent = `Niveau ${progress.level}`;
  document.getElementById("exProgressFill").style.width = `${Math.min(100, (exSessionCount / SESSION_LENGTH) * 100)}%`;
  document.getElementById("exQuestion").textContent = item.question || "Comment se lit ce mot ?";
  document.getElementById("exWord").textContent = item.word;

  const choicesWrap = document.getElementById("exChoices");
  choicesWrap.innerHTML = "";
  const pairs = item.choices.map((c, i) => ({ text: c, correct: i === item.correct }));
  shuffle(pairs).forEach(pair => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = pair.text;
    btn.dataset.correct = pair.correct;
    btn.addEventListener("click", () => answerExercise(btn, pair.correct));
    choicesWrap.appendChild(btn);
  });

  document.getElementById("exFeedback").className = "feedback-box";
  document.getElementById("exNextBtn").className = "btn-primary btn-next";
  document.getElementById("exNextBtn").textContent =
    exSessionCount >= SESSION_LENGTH ? "Terminer 🏁" : "Suivant ➜";
}

document.getElementById("exSpeakBtn").addEventListener("click", () => {
  if (exCurrentItem) Speech.speak(exCurrentItem.word);
});

function answerExercise(btn, isCorrect) {
  if (exAnswered) return;
  exAnswered = true;
  if (isCorrect) exSessionCorrect++;
  finalizeAnswer(isCorrect, exCurrentIsland, btn, "exFeedback", "exNextBtn", ".choices-grid .choice-btn");
}

document.getElementById("exNextBtn").addEventListener("click", () => {
  if (exSessionCount >= SESSION_LENGTH) {
    endIslandSession(exCurrentIsland, exSessionCorrect, SESSION_LENGTH);
  } else {
    loadExercise();
  }
});

/* ----------------------------------------------------------
   ATELIER D'ÉCRITURE (lettre manquante)
---------------------------------------------------------- */
let atCurrentItem = null;
let atAnswered = false;
let atSessionCount = 0;
let atSessionCorrect = 0;
const LETTER_POOL = "ABCDEFGHIJLMNOPRSTUV".split("");

function startAtelier() {
  atSessionCount = 0;
  atSessionCorrect = 0;
  showScreen("atelier");
  loadAtelier();
}

function loadAtelier() {
  atAnswered = false;
  atSessionCount++;
  const progress = state.islandProgress.atelier;
  const item = Adaptive.pickExercise("atelier", progress.level);
  atCurrentItem = item;

  document.getElementById("atLevelTag").textContent = `Niveau ${progress.level}`;
  document.getElementById("atProgressFill").style.width = `${Math.min(100, (atSessionCount / SESSION_LENGTH) * 100)}%`;
  document.getElementById("atWord").textContent = item.display;

  const distractors = shuffle(LETTER_POOL.filter(l => l !== item.missing)).slice(0, 3);
  const letters = shuffle([item.missing, ...distractors]);

  const wrap = document.getElementById("atChoices");
  wrap.innerHTML = "";
  letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = letter;
    btn.dataset.correct = letter === item.missing;
    btn.addEventListener("click", () => answerAtelier(btn, letter === item.missing));
    wrap.appendChild(btn);
  });

  document.getElementById("atFeedback").className = "feedback-box";
  document.getElementById("atNextBtn").className = "btn-primary btn-next";
  document.getElementById("atNextBtn").textContent =
    atSessionCount >= SESSION_LENGTH ? "Terminer 🏁" : "Suivant ➜";
}

document.getElementById("atSpeakBtn").addEventListener("click", () => {
  if (atCurrentItem) Speech.speak(atCurrentItem.word);
});

function answerAtelier(btn, isCorrect) {
  if (atAnswered) return;
  atAnswered = true;
  if (isCorrect) atSessionCorrect++;
  finalizeAnswer(isCorrect, "atelier", btn, "atFeedback", "atNextBtn", ".letter-grid .letter-btn");
}

document.getElementById("atNextBtn").addEventListener("click", () => {
  if (atSessionCount >= SESSION_LENGTH) {
    endIslandSession("atelier", atSessionCorrect, SESSION_LENGTH);
  } else {
    loadAtelier();
  }
});

/* ----------------------------------------------------------
   TOUR DE LA CONCENTRATION (intrus)
---------------------------------------------------------- */
let ccAnswered = false;
let ccStartTime = null;
let ccTimerInterval = null;
let ccCurrentItem = null;
let ccSessionCount = 0;
let ccSessionCorrect = 0;

function startConcentration() {
  ccSessionCount = 0;
  ccSessionCorrect = 0;
  showScreen("concentration");
  loadConcentration();
}

function loadConcentration() {
  ccAnswered = false;
  ccSessionCount++;
  const progress = state.islandProgress.concentration;
  const pool = GAME_DATA.attentionGames[progress.level];
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  ccCurrentItem = chosen;

  document.getElementById("ccProgressFill").style.width = `${Math.min(100, (ccSessionCount / SESSION_LENGTH) * 100)}%`;

  const grid = document.getElementById("ccGrid");
  grid.innerHTML = "";
  chosen.grid.forEach((val, idx) => {
    const btn = document.createElement("button");
    btn.className = "intruder-cell";
    btn.textContent = val;
    btn.dataset.correct = idx === chosen.oddIndex;
    btn.addEventListener("click", () => answerConcentration(btn, idx === chosen.oddIndex));
    grid.appendChild(btn);
  });

  document.getElementById("ccFeedback").className = "feedback-box";
  document.getElementById("ccNextBtn").className = "btn-primary btn-next";
  document.getElementById("ccNextBtn").textContent =
    ccSessionCount >= SESSION_LENGTH ? "Terminer 🏁" : "Suivant ➜";

  ccStartTime = performance.now();
  clearInterval(ccTimerInterval);
  ccTimerInterval = setInterval(() => {
    const elapsed = ((performance.now() - ccStartTime) / 1000).toFixed(1);
    document.getElementById("ccTimer").textContent = `⏱️ ${elapsed}s`;
  }, 100);
}

function answerConcentration(btn, isCorrect) {
  if (ccAnswered) return;
  ccAnswered = true;
  clearInterval(ccTimerInterval);
  if (isCorrect) {
    state.oddFoundCount = (state.oddFoundCount || 0) + 1;
    ccSessionCorrect++;
  }
  finalizeAnswer(isCorrect, "concentration", btn, "ccFeedback", "ccNextBtn", ".intruder-grid .intruder-cell");
}

document.getElementById("ccNextBtn").addEventListener("click", () => {
  if (ccSessionCount >= SESSION_LENGTH) {
    endIslandSession("concentration", ccSessionCorrect, SESSION_LENGTH);
  } else {
    loadConcentration();
  }
});

/* ---- Minuteur magique (outil de pause, non scoré) ---- */
const focusModal = document.getElementById("focusTimerModal");
let focusInterval = null;
let focusSeconds = 300;

document.getElementById("openFocusTimer").addEventListener("click", () => {
  focusModal.classList.add("show");
});
document.getElementById("closeFocusTimer").addEventListener("click", () => {
  focusModal.classList.remove("show");
  clearInterval(focusInterval);
});
document.getElementById("focusStartBtn").addEventListener("click", () => {
  clearInterval(focusInterval);
  const emojis = ["🌙","⭐","🌊","🍃"];
  let i = 0;
  focusInterval = setInterval(() => {
    focusSeconds--;
    const m = String(Math.floor(focusSeconds / 60)).padStart(2, "0");
    const s = String(focusSeconds % 60).padStart(2, "0");
    document.getElementById("focusModalTimer").textContent = `${m}:${s}`;
    if (focusSeconds % 10 === 0) {
      i = (i + 1) % emojis.length;
      document.getElementById("focusEmoji").textContent = emojis[i];
    }
    if (focusSeconds <= 0) {
      clearInterval(focusInterval);
      document.getElementById("focusModalText").textContent = "Bravo, c'est l'heure de reprendre tes devoirs ! 💪";
    }
  }, 1000);
});
document.getElementById("focusResetBtn").addEventListener("click", () => {
  clearInterval(focusInterval);
  focusSeconds = 300;
  document.getElementById("focusModalTimer").textContent = "05:00";
  document.getElementById("focusModalText").textContent = "Respire calmement, concentre-toi sur ta tâche…";
});

/* ----------------------------------------------------------
   PHARE DES HISTOIRES (lecture)
---------------------------------------------------------- */
let phWords = [];
let phSelfTimerInterval = null;
let phSelfSeconds = 0;
let phSessionCount = 0;

function startPhare() {
  phSessionCount = 0;
  showScreen("phare");
  loadPhare();
}

function loadPhare() {
  Speech.stop();
  document.getElementById("phSelfTimer").style.display = "none";
  clearInterval(phSelfTimerInterval);
  phSelfSeconds = 0;
  phSessionCount++;

  const progress = state.islandProgress.phare;
  const pool = GAME_DATA.readingTexts[progress.level];
  const text = pool[Math.floor(Math.random() * pool.length)];
  phWords = text.split(" ");

  document.getElementById("phProgressFill").style.width = `${Math.min(100, (phSessionCount / READING_SESSION_LENGTH) * 100)}%`;

  const container = document.getElementById("phText");
  container.innerHTML = phWords
    .map((w, i) => `<span class="rword" data-idx="${i}">${w}</span>`)
    .join(" ");
  container.dataset.fullText = text;

  document.getElementById("phFeedback").className = "feedback-box";
  document.getElementById("phNextBtn").className = "btn-primary btn-next";
  document.getElementById("phNextBtn").textContent =
    phSessionCount >= READING_SESSION_LENGTH ? "Terminer 🏁" : "Histoire suivante ➜";
}

document.getElementById("phPlayBtn").addEventListener("click", () => {
  const fullText = document.getElementById("phText").dataset.fullText;
  document.querySelectorAll(".rword").forEach(w => w.classList.remove("active", "done"));
  Speech.speakWithHighlight(
    fullText,
    phWords,
    (idx) => {
      document.querySelectorAll(".rword").forEach((w, i) => {
        w.classList.toggle("active", i === idx);
        if (i < idx) w.classList.add("done");
      });
    },
    () => {
      document.querySelectorAll(".rword").forEach(w => { w.classList.remove("active"); w.classList.add("done"); });
    }
  );
});

document.getElementById("phStopBtn").addEventListener("click", () => Speech.stop());

document.getElementById("phMeReadBtn").addEventListener("click", () => {
  Speech.stop();
  const wrap = document.getElementById("phSelfTimer");
  wrap.style.display = wrap.style.display === "none" ? "block" : "none";
  if (wrap.style.display === "block") {
    phSelfSeconds = 0;
    clearInterval(phSelfTimerInterval);
    phSelfTimerInterval = setInterval(() => {
      phSelfSeconds++;
      const m = String(Math.floor(phSelfSeconds / 60)).padStart(2, "0");
      const s = String(phSelfSeconds % 60).padStart(2, "0");
      document.getElementById("phTimerDisplay").textContent = `${m}:${s}`;
    }, 1000);
  }
});

document.getElementById("phFinishedBtn").addEventListener("click", () => {
  clearInterval(phSelfTimerInterval);
  document.getElementById("phSelfTimer").style.display = "none";
  finishReadingText();
});

function finishReadingText() {
  const progress = state.islandProgress.phare;
  progress.textsCompleted = (progress.textsCompleted || 0) + 1;
  state.stars++;
  state.totalCorrect++;
  state.totalAttempts++;
  markTodayActive();

  const result = Adaptive.recordAnswer(progress, true);
  const fb = document.getElementById("phFeedback");
  fb.classList.add("show", "good");
  fb.textContent = "🌟 Bravo, belle lecture ! +1 étoile.";
  if (result.levelChanged) {
    setTimeout(() => triggerCelebration("🚀", "Niveau supérieur !", Adaptive.levelChangeMessage(result.direction, "Phare des Histoires")), 600);
  }

  document.getElementById("phNextBtn").classList.add("show");
  updateTopbar();
  checkBadges();
  scheduleSave();
}

document.getElementById("phNextBtn").addEventListener("click", () => {
  if (phSessionCount >= READING_SESSION_LENGTH) {
    endIslandSession("phare");
  } else {
    loadPhare();
  }
});

/* ----------------------------------------------------------
   LOGIQUE COMMUNE DE CORRECTION
---------------------------------------------------------- */
function finalizeAnswer(isCorrect, islandId, clickedBtn, feedbackId, nextBtnId, allButtonsSelector) {
  const allBtns = document.querySelectorAll(allButtonsSelector);
  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
  });
  if (!isCorrect) clickedBtn.classList.add("wrong");

  state.totalAttempts++;
  if (isCorrect) {
    state.totalCorrect++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.stars++;
  } else {
    state.streak = 0;
  }
  markTodayActive();

  const progress = state.islandProgress[islandId];
  const result = Adaptive.recordAnswer(progress, isCorrect);

  const fb = document.getElementById(feedbackId);
  fb.className = "feedback-box show " + (isCorrect ? "good" : "bad");
  fb.textContent = isCorrect
    ? "🎉 Bravo, bonne réponse !"
    : "💪 Pas tout à fait, regarde la bonne réponse en vert.";

  document.getElementById(nextBtnId).classList.add("show");

  updateTopbar();
  checkBadges();
  scheduleSave();

  if (result.levelChanged) {
    const island = GAME_DATA.islands.find(i => i.id === islandId);
    setTimeout(() => {
      triggerCelebration(
        result.direction === "up" ? "🚀" : "💪",
        result.direction === "up" ? "Niveau supérieur !" : "On ajuste la difficulté",
        Adaptive.levelChangeMessage(result.direction, island ? island.name : islandId)
      );
    }, 500);
  } else if (isCorrect && state.streak > 0 && state.streak % 5 === 0) {
    setTimeout(() => burstConfetti(), 100);
  }
}

/* ----------------------------------------------------------
   BADGES
---------------------------------------------------------- */
function checkBadges() {
  const totalTextsCompleted = state.islandProgress.phare.textsCompleted || 0;
  const allLevel3 = Object.values(state.islandProgress).every(p => p.level === 3);

  const conditions = {
    premier_pas:    state.totalAttempts >= 1,
    serie_5:        state.bestStreak >= 5,
    explorateur:    GAME_DATA.islands.every(i => state.islandsVisited.includes(i.id)),
    syllabes_maitre:state.islandProgress.syllabes.level === 3,
    lecteur:        totalTextsCompleted >= 5,
    orthographe_pro:state.islandProgress.atelier.level === 3,
    oeil_de_lynx:   (state.oddFoundCount || 0) >= 10,
    champion_bdp:   (state.islandProgress.bdp || {}).level === 3,
    capitaine:      state.stars >= 50,
    legende:        allLevel3
  };

  GAME_DATA.badges.forEach(b => {
    if (conditions[b.key] && !state.earnedBadges.includes(b.key)) {
      state.earnedBadges.push(b.key);
      setTimeout(() => {
        triggerCelebration(b.emoji, "Nouveau badge !", `Tu as débloqué : ${b.name}`);
        burstConfetti();
      }, 900);
    }
  });
}

function renderBadges() {
  const grid = document.getElementById("badgesGrid");
  grid.innerHTML = GAME_DATA.badges.map(b => {
    const earned = state.earnedBadges.includes(b.key);
    return `
      <div class="badge-tile ${earned ? "earned" : ""}">
        <span class="badge-emoji-tile">${earned ? b.emoji : "🔒"}</span>
        <div class="badge-name-tile">${b.name}</div>
        <div class="badge-desc-tile">${b.desc}</div>
      </div>`;
  }).join("");
}

/* ----------------------------------------------------------
   SUIVI / STATS
---------------------------------------------------------- */
function renderStats() {
  const days = ["L","M","M","J","V","S","D"];
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  const strip = document.getElementById("weekStrip");
  strip.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    const isToday = key === todayKey();
    const done = !!state.daysActive[key];
    const cell = document.createElement("div");
    cell.className = "day-cell" + (done ? " done" : "") + (isToday ? " today" : "");
    cell.innerHTML = `${days[i]}<span class="day-emoji-cell">${done ? "✅" : "○"}</span>`;
    strip.appendChild(cell);
  }

  const accuracy = state.totalAttempts ? Math.round((state.totalCorrect / state.totalAttempts) * 100) : 0;
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = `
    <div class="stat-tile"><div class="stat-value">${state.stars}</div><div class="stat-label">⭐ Étoiles</div></div>
    <div class="stat-tile"><div class="stat-value">${state.totalCorrect}</div><div class="stat-label">✅ Bonnes réponses</div></div>
    <div class="stat-tile"><div class="stat-value">${state.bestStreak}</div><div class="stat-label">🔥 Meilleure série</div></div>
    <div class="stat-tile"><div class="stat-value">${accuracy}%</div><div class="stat-label">🎯 Précision globale</div></div>
  `;

  const list = document.getElementById("islandProgressList");
  list.innerHTML = GAME_DATA.islands.map(island => {
    const lvl = state.islandProgress[island.id].level;
    const dots = [1,2,3].map(n => `<span class="ipr-dot ${n <= lvl ? "filled" : ""}"></span>`).join("");
    return `
      <div class="island-progress-row">
        <span class="ipr-emoji">${island.emoji}</span>
        <span class="ipr-name">${island.name}</span>
        <span class="ipr-level-dots">${dots}</span>
      </div>`;
  }).join("");
}

document.getElementById("exportBtn").addEventListener("click", () => Storage.exportToFile(state));
document.getElementById("importBtn").addEventListener("click", () => document.getElementById("importFile").click());
document.getElementById("importFile").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    state = await Storage.importFromFile(file);
    Storage.save(state);
    if (document.getElementById("appShell").classList.contains("active")) {
      updateTopbar();
      showScreen("map");
    } else {
      launchApp();
    }
    triggerCelebration("☁️", "Progression importée !", "Te revoilà capitaine, prêt à continuer l'aventure !");
  } catch (err) {
    alert("Ce fichier ne semble pas être une sauvegarde valide.");
  }
  e.target.value = "";
});

/* ----------------------------------------------------------
   SAUVEGARDE EN LIGNE (Google Sheets via Apps Script)
---------------------------------------------------------- */
function setCloudStatus(message, isError) {
  const el = document.getElementById("cloudStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("error", !!isError);
}

const cloudUrlInput = document.getElementById("cloudUrlInput");
if (cloudUrlInput) cloudUrlInput.value = CloudSync.getUrl();

document.getElementById("cloudSaveUrlBtn").addEventListener("click", () => {
  CloudSync.setUrl(cloudUrlInput.value);
  setCloudStatus(cloudUrlInput.value ? "Adresse enregistrée ✓" : "Adresse effacée.");
});

document.getElementById("cloudSaveBtn").addEventListener("click", async () => {
  if (!CloudSync.hasUrl()) {
    setCloudStatus("Colle d'abord l'adresse de ton script (voir GOOGLE_SHEETS_SETUP.md).", true);
    return;
  }
  setCloudStatus("Sauvegarde en cours…");
  try {
    await CloudSync.save(state.playerName, state);
    setCloudStatus(`Progression de ${state.playerName} sauvegardée en ligne ✓`);
  } catch (err) {
    setCloudStatus("Échec de la sauvegarde en ligne. Vérifie l'adresse et ta connexion.", true);
  }
});

document.getElementById("cloudLoadBtn").addEventListener("click", async () => {
  if (!CloudSync.hasUrl()) {
    setCloudStatus("Colle d'abord l'adresse de ton script (voir GOOGLE_SHEETS_SETUP.md).", true);
    return;
  }
  const name = state.playerName || document.getElementById("nameInput").value;
  if (!name) {
    setCloudStatus("Indique d'abord le prénom du capitaine.", true);
    return;
  }
  setCloudStatus("Chargement en cours…");
  try {
    const cloudState = await CloudSync.load(name);
    state = cloudState;
    Storage.save(state);
    updateTopbar();
    showScreen("map");
    setCloudStatus(`Progression de ${name} récupérée ✓`);
    triggerCelebration("☁️", "Progression récupérée !", "Te revoilà capitaine, prêt à continuer l'aventure !");
  } catch (err) {
    setCloudStatus("Aucune sauvegarde trouvée en ligne pour ce prénom.", true);
  }
});

/* ----------------------------------------------------------
   GUIDE PARENTS
---------------------------------------------------------- */
function renderParents() {
  const content = document.getElementById("parentsContent");
  content.innerHTML = `
    <div class="conseil-card">
      <div class="conseil-icon-p">⏰</div>
      <div><div class="conseil-title-p">Séances courtes et régulières</div>
      <div class="conseil-text-p">10 à 15 minutes par jour valent mieux qu'une longue séance. Le jeu est conçu pour des sessions rapides ; arrêtez avant la fatigue.</div></div>
    </div>
    <div class="conseil-card coral">
      <div class="conseil-icon-p">🧩</div>
      <div><div class="conseil-title-p">La difficulté s'adapte automatiquement</div>
      <div class="conseil-text-p">Chaque île ajuste son niveau selon les réussites récentes de votre enfant. Inutile de choisir vous-même la difficulté : laissez-le jouer, le jeu suit son rythme.</div></div>
    </div>
    <div class="conseil-card leaf">
      <div class="conseil-icon-p">🔊</div>
      <div><div class="conseil-title-p">Exploitez sa mémoire auditive</div>
      <div class="conseil-text-p">Le bouton 🔊 lit les mots et les textes à voix haute. Encouragez votre enfant à répéter le mot après l'avoir entendu : c'est un point fort à exploiter.</div></div>
    </div>
    <div class="conseil-card gold">
      <div class="conseil-icon-p">🦉</div>
      <div><div class="conseil-title-p">Concentration et attention</div>
      <div class="conseil-text-p">La Tour de la Concentration entraîne l'attention visuelle. Le minuteur magique (5 minutes) peut aussi servir pendant les vrais devoirs, en dehors du jeu, pour structurer le temps de travail en courtes sessions.</div></div>
    </div>
    <div class="conseil-card">
      <div class="conseil-icon-p">🏫</div>
      <div><div class="conseil-title-p">Adaptations à l'école (PAP)</div>
      <div class="conseil-text-p">Un Plan d'Accompagnement Personnalisé peut prévoir : tiers-temps, textes agrandis, dictées adaptées, moins de copie. Demandez-le à l'enseignant si ce n'est pas déjà fait.</div></div>
    </div>
    <div class="conseil-card coral">
      <div class="conseil-icon-p">🌙</div>
      <div><div class="conseil-title-p">Routine du soir</div>
      <div class="conseil-text-p">Pause de 20 min après l'école, puis deux courtes sessions de 15 min avec une pause entre les deux. Évitez les devoirs après 19h.</div></div>
    </div>
    <div class="conseil-card leaf">
      <div class="conseil-icon-p">🎉</div>
      <div><div class="conseil-title-p">Célébrez chaque progrès</div>
      <div class="conseil-text-p">Les badges et niveaux sont là pour valoriser les efforts, pas seulement la performance. Un passage de niveau, même après des hésitations, est une vraie victoire à souligner.</div></div>
    </div>
  `;
}

/* ----------------------------------------------------------
   FIN DE SESSION (retour à la carte après N éléments)
---------------------------------------------------------- */
function endIslandSession(islandId, correctCount, totalCount) {
  const island = GAME_DATA.islands.find(i => i.id === islandId);
  const label = island ? `${island.emoji} ${island.name}` : "Cette étape";
  const text = (typeof correctCount === "number" && typeof totalCount === "number")
    ? `${label} : ${correctCount}/${totalCount} bonnes réponses cette fois-ci. Reviens quand tu veux pour continuer l'aventure !`
    : `${label} terminé pour cette fois. Reviens quand tu veux pour continuer l'aventure !`;
  showScreen("map");
  updateTopbar();
  triggerCelebration("🏁", "Étape terminée !", text);
}

/* ----------------------------------------------------------
   CÉLÉBRATIONS & CONFETTI
---------------------------------------------------------- */
function triggerCelebration(emoji, title, text) {
  document.getElementById("celebEmoji").textContent = emoji;
  document.getElementById("celebTitle").textContent = title;
  document.getElementById("celebText").textContent = text;
  document.getElementById("celebrationModal").classList.add("show");
}
document.getElementById("celebCloseBtn").addEventListener("click", () => {
  document.getElementById("celebrationModal").classList.remove("show");
});

const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");
let confettiParticles = [];

function burstConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCanvas.style.display = "block";
  const colors = ["#F25C54", "#FFB703", "#43AA8B", "#06799D", "#FBF3DB"];
  confettiParticles = Array.from({ length: 70 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -20 - Math.random() * 100,
    r: 4 + Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 3,
    rot: Math.random() * 360
  }));
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  let stillFalling = false;
  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += 6;
    if (p.y < confettiCanvas.height + 20) stillFalling = true;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rot * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r);
    ctx.restore();
  });
  if (stillFalling) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiCanvas.style.display = "none";
  }
}

/* ----------------------------------------------------------
   UTILITAIRES
---------------------------------------------------------- */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0x00ff) + percent;
  let b = (num & 0x0000ff) + percent;
  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);
  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
}

/* ----------------------------------------------------------
   DÉMARRAGE
---------------------------------------------------------- */
function init() {
  renderAvatarGrid();
  if (state.playerName) {
    document.getElementById("nameInput").value = state.playerName;
    launchApp();
  } else {
    document.getElementById("screen-onboarding").classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", init);
