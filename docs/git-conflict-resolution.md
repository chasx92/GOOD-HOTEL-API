# Résoudre un conflit Git entre branches

Si une mise à jour affiche un message comme :

```
Resolving conflicts between codex/reorganiser-le-footer-pour-centrer-cgv-et-mentions-legales-b2nwir and main and committing changes
```

ou

```
Resolving conflicts between codex/centre-cgv-et-mentions-legales-sous-icones-668prl and main and committing changes
```

utilisez la procédure suivante pour nettoyer l'arborescence et finaliser le merge (en remplaçant le nom de la branche codex par le vôtre le cas échéant) :

1. **Mettre à jour la branche principale**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Revenir sur la branche de travail**
   ```bash
   git checkout codex/reorganiser-le-footer-pour-centrer-cgv-et-mentions-legales-b2nwir
   ```
   # ...ou la branche indiquée dans le message d'erreur, par exemple :
   git checkout codex/centre-cgv-et-mentions-legales-sous-icones-668prl

3. **Fusionner main dans la branche et résoudre les conflits**
   ```bash
   git merge main
   ```
   - Ouvrez chaque fichier marqué par Git et gardez uniquement la version souhaitée.
   - Une fois chaque fichier corrigé :
     ```bash
     git add <fichier>
     ```
4. **Finaliser la fusion**
   ```bash
   git commit
   ```
   Le message par défaut "Merge branch 'main'..." est suffisant.
5. **Vérifier l'état et pousser**
   ```bash
   git status
   git push origin codex/reorganiser-le-footer-pour-centrer-cgv-et-mentions-legales-b2nwir
   ```

Si vous préférez repartir proprement, vous pouvez aussi rebaser la branche :

```bash
git checkout codex/reorganiser-le-footer-pour-centrer-cgv-et-mentions-legales-b2nwir
git fetch origin
git rebase origin/main
```

Corrigez les conflits si nécessaire, puis continuez le rebase :

```bash
git rebase --continue
```

Enfin, poussez avec `--force-with-lease` uniquement si un rebase a été effectué :

```bash
git push --force-with-lease origin codex/reorganiser-le-footer-pour-centrer-cgv-et-mentions-legales-b2nwir
```
