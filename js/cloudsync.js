/* ============================================================
   CLOUD SYNC — sauvegarde de la progression via Google Sheets
   (par l'intermédiaire d'un Google Apps Script "Web App")
   Voir GOOGLE_SHEETS_SETUP.md pour la configuration côté Google.
============================================================ */

const CloudSync = (() => {
  const URL_KEY = "lectureAventure_cloudUrl";

  // URL du script Google Apps déployé pour cette aventure — préconfigurée
  // pour que Juliann n'ait rien à coller lui-même. Reste modifiable via le
  // champ de l'écran Suivi si besoin (ex: pour un autre script).
  const DEFAULT_URL = "https://script.google.com/macros/s/AKfycbxEziEOjvHQhMYtOxbCdeVfBCG9xK3Dt4Vq-Pb4pUFK2Waj4GEMzXzQ79BpVJnnxBBxhA/exec";

  function getUrl() {
    const stored = (localStorage.getItem(URL_KEY) || "").trim();
    return stored || DEFAULT_URL;
  }

  function setUrl(url) {
    localStorage.setItem(URL_KEY, (url || "").trim());
  }

  function hasUrl() {
    return getUrl().length > 0;
  }

  // Sauvegarde l'état complet du joueur dans la feuille Google, sous la clé "name"
  async function save(name, state) {
    const url = getUrl();
    if (!url) throw new Error("no_url");

    // Astuce : on envoie en "text/plain" pour éviter une requête de
    // pré-vérification CORS (preflight) que Google Apps Script ne gère pas.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ name, data: state }),
    });

    if (!res.ok) throw new Error("network_error");
    const json = await res.json();
    if (!json || json.success !== true) {
      throw new Error((json && json.error) || "save_failed");
    }
    return json;
  }

  // Récupère l'état sauvegardé pour un nom de capitaine donné
  async function load(name) {
    const url = getUrl();
    if (!url) throw new Error("no_url");

    const res = await fetch(`${url}?name=${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error("network_error");
    const json = await res.json();
    if (!json || json.error) {
      throw new Error((json && json.error) || "not_found");
    }
    return json.data;
  }

  return { getUrl, setUrl, hasUrl, save, load };
})();
