# Puissance 4 (Four In A Row)

Le jeu **Puissance 4** est une implémentation classique du jeu de société dans lequel deux joueurs s'affrontent pour aligner quatre de leurs jetons sur une grille. Le projet est réalisé avec HTML, CSS et JavaScript (ES6+).

## Description

Dans ce jeu, les joueurs prennent à tour de rôle pour placer leurs jetons (rouge ou jaune) dans une grille. Le but est de réussir à aligner 4 jetons horizontalement, verticalement ou en diagonale avant l'adversaire. Le jeu se termine par une victoire ou un match nul si la grille est remplie sans qu'aucun joueur n'ait gagné.

### Fonctionnalités

- Grille de 6 lignes et 7 colonnes.
- Deux joueurs avec des couleurs de jetons distinctes : Rouge et Jaune.
- Alternance des tours entre les joueurs.
- Vérification de la victoire après chaque mouvement (horizontal, vertical, diagonal).
- Message de victoire ou de match nul.
- Option de recommencer une nouvelle partie.

## Prérequis

- Un navigateur moderne supportant HTML5, CSS3 et JavaScript (ES6+).
- Aucune installation spécifique n'est nécessaire pour jouer.

## Structure du projet


### Détails des fichiers :

- **`index.html`** : Contient la structure HTML du jeu, y compris la grille et les éléments de l'interface utilisateur.
- **`puissance.css`** : Le fichier CSS qui définit le style de la grille de jeu et des cellules.
- **`puissance.js`** : Le fichier JavaScript qui gère la logique du jeu, y compris la création du plateau, la gestion des tours, la détection des victoires et le redémarrage de la partie.

## Comment jouer

1. Ouvrir le fichier `index.html` dans un navigateur.
2. Le jeu commence avec le joueur 1 (Rouge) qui doit choisir une colonne pour placer son jeton.
3. Les joueurs alternent à chaque tour, et le but est d'aligner 4 jetons horizontalement, verticalement ou en diagonale.
4. Lorsqu'un joueur gagne, un message de victoire apparaît. Si la grille est remplie sans qu'un joueur gagne, un message de match nul s'affiche.
5. Vous pouvez recommencer une nouvelle partie en cliquant sur le bouton **Recommencer**.

## Exemple de jeu

1. Le joueur 1 commence et place un jeton dans une colonne.
2. Le joueur 2 fait de même.
3. Les tours continuent jusqu'à ce qu'un joueur aligne 4 jetons ou que la grille soit remplie.

## Développement

Si vous souhaitez contribuer à ce projet ou l'améliorer, vous pouvez suivre ces étapes pour commencer à travailler sur le code.

### Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/puissance-4.git
