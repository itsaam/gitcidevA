# Évaluation – Git, GitHub, CI

## Binôme
- Samy A.
- Tristan S.

## Description
Projet d’évaluation Git / GitHub / CI.  
Objectif : implémenter trois fonctionnalités simples en JavaScript, tester avec Jest et gérer les merges via Pull Requests avec CI obligatoire.  
Fonctionnalités :
- `addTask(name)` : ajoute une tâche avec un id unique, nom nettoyé, `done=false`.
- `toggleTask(id)` : bascule l’état d’une tâche.
- `countDone()` : compte les tâches terminées.

## CI
[![CI](https://github.com/itsaam/gitcidevA/actions/workflows/main.yml/badge.svg)](https://github.com/itsaam/gitcidevA/actions/workflows/main.yml)

Chaque PR déclenche la CI GitHub Actions : installation des dépendances et exécution des tests Jest.

## Installation & Tests
```bash
npm install
npm test

## Git – rappels simples

### switch vs checkout
- `git switch` : sert juste à changer de branche (ou en créer une). → plus clair, plus moderne.  
- `git checkout` : ancien, fait pareil mais aussi d’autres trucs (restaurer un fichier par ex.).  

### pull vs fetch
- `git fetch` : va chercher les nouveautés sur le serveur, mais ne les fusionne pas.  
- `git pull` : fait `fetch` + fusionne direct dans ta branche locale.  

### rebase vs revert
- `git rebase` : déplace tes commits pour “recoller” ton travail proprement sur une autre branche. → historique plus droit.  
- `git revert` : annule un commit en créant un commit inverse (sans casser l’historique).  

---

## Commandes utiles

- **tag** : mettre une étiquette sur un commit (souvent pour marquer une version).  
- **stash** : mettre tes modifs de côté sans commit (un tiroir temporaire).  
- **release** : une version stable du projet, publiée à partir d’un tag.
