<h1 align="center">🕌 Adhkar</h1>

<p align="center">
  <b>Les rappels quotidiens, toujours à portée de main.</b><br>
  Adhkar du matin, du soir et du coucher, en arabe avec leur traduction française et leurs mérites.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-natif-161B24?style=flat-square&logo=javascript&logoColor=F7DF1E" alt="JavaScript natif">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-161B24?style=flat-square&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/installable-sur%20mobile-161B24?style=flat-square&labelColor=1E3A8A" alt="Installable sur mobile">
</p>

---

## Présentation

Adhkar est une application web mobile, sans compte ni serveur, qui accompagne la lecture des invocations
quotidiennes. Chaque invocation est présentée en arabe, avec sa traduction française, le nombre de
répétitions recommandé et le hadith qui en rapporte le mérite.

## Objectif

Proposer un compagnon simple et agréable à lire sur téléphone : ouvrir l'application, choisir le moment
de la journée et lire les invocations une à une, sans publicité ni inscription.

## Fonctionnalités

- **Trois moments de la journée** : matin, soir et coucher, chacun avec sa propre liste
- **Une cinquantaine d'invocations**, chacune avec le texte arabe, la traduction et le nombre de répétitions
- **Mérites** : le hadith associé à chaque invocation
- **Recherche** dans l'ensemble des invocations
- **Favoris** enregistrés sur l'appareil (`localStorage`), avec remise à zéro
- **Taille du texte arabe** réglable (petite, moyenne, grande)
- **Installable** sur l'écran d'accueil (Web App Manifest, mode plein écran sur iPhone)
- Respect de la préférence « réduire les animations » du système

## Technologies

| Rôle | Outils |
|---|---|
| Interface | HTML, Tailwind CSS 4, Font Awesome |
| Logique | JavaScript natif, sans framework |
| Stockage | `localStorage` |
| Installation | Web App Manifest |

## Architecture

```text
Application-de-ahkar/
├── index.html      # écrans : accueil, listes matin / soir / coucher, lecture, favoris, recherche
├── js/app.js       # données des invocations, navigation entre écrans, favoris, recherche, taille du texte
├── src/
│   ├── input.css   # sources Tailwind
│   └── output.css  # CSS généré
├── img/            # visuels et icône de l'application
└── manifest.json   # nom, couleurs et icône pour l'installation
```

Toutes les données sont dans `js/app.js` : l'application fonctionne entièrement côté navigateur.

## Installation

Aucune dépendance n'est nécessaire pour l'utiliser :

```bash
git clone https://github.com/moryndour/Application-de-ahkar.git
cd Application-de-ahkar
npx serve .        # ou ouvrir simplement index.html dans un navigateur
```

Pour modifier les styles et régénérer `src/output.css` :

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## Utilisation

1. Après l'écran d'accueil, choisissez **Matin**, **Soir** ou **Coucher**.
2. Lisez les invocations une à une : texte arabe, traduction, nombre de répétitions et mérite.
3. Ajoutez une invocation à vos **favoris** pour la retrouver rapidement.
4. Utilisez la **recherche** pour retrouver une invocation par un mot de sa traduction.
5. Sur mobile, ajoutez l'application à l'écran d'accueil depuis le menu de partage du navigateur.

## Captures d'écran

Aucune capture n'est encore publiée dans ce dépôt. Elles seront ajoutées dans un dossier `docs/`.

## Perspectives d'amélioration

- Mettre l'application en ligne avec GitHub Pages pour pouvoir l'essayer sans installation
- Ajouter un service worker pour une utilisation hors connexion
- Séparer les données des invocations dans un fichier JSON dédié
- Ajouter des captures d'écran et les références précises de chaque hadith

## Contribuer

Les corrections de texte (arabe, traduction, références des hadiths) sont les bienvenues.
Ouvrez une *issue* ou une *pull request* en précisant la source de la correction proposée.

---

<p align="center"><sub>Développé par <a href="https://github.com/moryndour">Mory Ndour</a> · Étudiant en Génie logiciel à l'ISI Dakar</sub></p>
