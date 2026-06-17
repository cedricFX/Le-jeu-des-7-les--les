# 🗺️ L'Archipel des Lettres

Un jeu d'aventure de lecture pour enfants dyslexiques et dysorthographiques, conçu à partir d'un bilan orthophonique réel (CE1, 7 ans). Inspiré d'applications cliniques comme [Poppins](https://www.poppins.io/), mais en version libre, gratuite et 100% hébergeable soi-même.

## 🎯 Pourquoi ce jeu

Ce jeu cible précisément les difficultés identifiées lors d'un bilan orthophonique (BELO CE1) :

| Île | Compétence travaillée | Lien avec le bilan |
|---|---|---|
| 🏝️ Île des Syllabes | Syllabes complexes (gor/gro, bra, tri…) | Voie de lecture lexicale fragile, inversions de phonèmes |
| 🏯 Forteresse des Mots Sages | Lecture de mots réguliers | Voie phonologique à renforcer |
| 🐉 Grotte des Mots Rebelles | Lecture de mots irréguliers | Stock orthographique faible |
| 🎭 Vallée des Sons Jumeaux | Discrimination phonétique (ian/ien, oi/io…) | Confusions de sons proches |
| ✍️ Atelier d'Écriture | Orthographe, lettres omises | Omissions fréquentes à l'écrit |
| 🦉 Tour de la Concentration | Attention visuelle | Déficit d'attention visuelle relevé au bilan |
| 📖 Phare des Histoires | Lecture de textes, fluence | Vitesse et compréhension de lecture |

## ✨ Fonctionnalités

- **Difficulté adaptative** — chaque île ajuste automatiquement son niveau (1 à 3) selon le taux de réussite des 5 dernières réponses. Aucun réglage manuel à faire.
- **Lecture automatique (synthèse vocale)** — bouton 🔊 sur chaque mot/exercice, et lecture intégrale des histoires avec surlignage mot par mot (API Web Speech native du navigateur, gratuite, aucune clé requise).
- **Mode "je lis moi-même"** — chronomètre pour s'entraîner à la lecture à voix haute en autonomie.
- **Badges et étoiles** — système de motivation basé sur l'effort et la régularité, pas seulement la performance.
- **Minuteur magique** — outil de pause/concentration (5 min) utilisable aussi pendant les vrais devoirs.
- **Suivi des parents** — calendrier hebdomadaire, statistiques de progression, guide de conseils pratiques.
- **Export / Import de progression** — comme le jeu est un site statique sans serveur, la progression est enregistrée dans le navigateur (`localStorage`). Pour la retrouver sur un autre ordinateur ou téléphone, exportez un fichier `.json` depuis l'onglet Suivi puis importez-le sur l'autre appareil.

## 🚀 Déployer sur GitHub Pages

1. Créez un nouveau dépôt GitHub et poussez tout le contenu de ce dossier à la racine.
2. Dans les paramètres du dépôt → **Pages**, choisissez la branche `main` et le dossier `/ (root)`.
3. Votre jeu est en ligne à l'adresse `https://votre-pseudo.github.io/nom-du-depot/`.

Aucune étape de build n'est nécessaire : le projet est en HTML/CSS/JS pur (aucune dépendance, aucun `npm install`).

## 🗂️ Structure du projet

```
lecture-aventure/
├── index.html              → structure de toutes les pages/écrans
├── css/
│   └── style.css           → thème visuel "carte au trésor"
├── js/
│   ├── data.js              → banques d'exercices (3 paliers de difficulté par compétence)
│   ├── storage.js           → sauvegarde locale + export/import JSON
│   ├── speech.js             → synthèse vocale (lecture automatique)
│   ├── adaptive.js           → moteur de difficulté adaptative
│   └── app.js                 → logique du jeu, navigation, écrans
└── README.md
```

## 🧩 Personnaliser le contenu

Tous les exercices se trouvent dans `js/data.js`, organisés par île puis par niveau (`1`, `2`, `3`). Vous pouvez :
- ajouter de nouveaux mots/syllabes dans les bonnes catégories,
- ajuster les seuils de déblocage des îles (`unlockStars`),
- modifier les seuils du moteur adaptatif dans `js/adaptive.js` (`LEVEL_UP_RATE`, `LEVEL_DOWN_RATE`, `WINDOW`).

## 🔊 Compatibilité de la synthèse vocale

La lecture automatique utilise l'API native `speechSynthesis` du navigateur. Elle fonctionne sur Chrome, Edge et Safari (voix françaises). Sur certains navigateurs mobiles, le surlignage mot par mot peut être approximatif (le jeu utilise alors une estimation par durée moyenne plutôt que les repères exacts du navigateur).

## ⚠️ Avertissement

Ce jeu est un **outil d'entraînement complémentaire**, pas un substitut au suivi orthophonique. Il a été conçu pour accompagner un enfant déjà suivi par un orthophoniste, en lien avec les axes de travail identifiés dans son bilan.

## 🙏 Inspiration

Direction pédagogique inspirée des principes des applications cliniques pour la dyslexie (entraînement ludique progressif, suivi en temps réel, exploitation des points forts de l'enfant), notamment [Poppins](https://www.poppins.io/).
