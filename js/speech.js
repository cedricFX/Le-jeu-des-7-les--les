/* ============================================================
   SPEECH.JS — Lecture automatique (synthèse vocale)
   Utilise l'API Web Speech native du navigateur (gratuite,
   aucune clé nécessaire). Propose la lecture d'un mot seul
   ou d'un texte complet, avec surlignage mot par mot pour
   suivre visuellement ce qui est lu.
   ============================================================ */

const Speech = {
  voice: null,
  rate: 0.85,        // un peu plus lent que la normale, adapté dyslexie
  supported: "speechSynthesis" in window,

  init() {
    if (!this.supported) return;
    const pickVoice = () => {
      const voices = speechSynthesis.getVoices();
      this.voice =
        voices.find(v => v.lang === "fr-FR" && /Google|Microsoft|Amélie|Thomas/i.test(v.name)) ||
        voices.find(v => v.lang === "fr-FR") ||
        voices.find(v => v.lang && v.lang.startsWith("fr")) ||
        voices[0] || null;
    };
    pickVoice();
    // Sur Chrome, les voix se chargent parfois après ce premier appel
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = pickVoice;
    }
  },

  stop() {
    if (this.supported) speechSynthesis.cancel();
  },

  /* Lit un seul mot ou une courte expression */
  speak(text, { rate } = {}) {
    if (!this.supported) return;
    this.stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "fr-FR";
    utter.rate = rate || this.rate;
    utter.pitch = 1.05;
    if (this.voice) utter.voice = this.voice;
    speechSynthesis.speak(utter);
  },

  /* Lit un texte complet en surlignant chaque mot lu, via un
     conteneur DOM dont chaque mot est déjà enveloppé dans un
     <span class="word" data-idx="N">. onWordStart(idx) est
     appelé à chaque nouveau mot (boundary event natif si
     disponible, sinon estimation par durée moyenne). */
  speakWithHighlight(text, words, onWordStart, onEnd) {
    if (!this.supported) {
      if (onEnd) onEnd();
      return;
    }
    this.stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "fr-FR";
    utter.rate = this.rate;
    utter.pitch = 1.05;
    if (this.voice) this.voice && (utter.voice = this.voice);

    let usedBoundary = false;
    let wordIdx = 0;

    utter.onboundary = (event) => {
      if (event.name === "word") {
        usedBoundary = true;
        if (onWordStart) onWordStart(wordIdx);
        wordIdx++;
      }
    };

    utter.onend = () => {
      if (onEnd) onEnd();
    };

    speechSynthesis.speak(utter);

    // Filet de sécurité : certains navigateurs (Safari mobile,
    // certains Android) n'émettent jamais onboundary. On bascule
    // alors sur une estimation par durée moyenne par mot.
    setTimeout(() => {
      if (!usedBoundary) {
        this._fallbackHighlight(words, onWordStart, onEnd);
      }
    }, 250);
  },

  _fallbackHighlight(words, onWordStart, onEnd) {
    const msPerWord = 380 / this.rate;
    words.forEach((w, i) => {
      setTimeout(() => onWordStart && onWordStart(i), i * msPerWord);
    });
    setTimeout(() => onEnd && onEnd(), words.length * msPerWord + 200);
  }
};

document.addEventListener("DOMContentLoaded", () => Speech.init());
