# 🚀 COMMENCER ICI

> **Guide ultra-rapide pour démarrer avec Unlocky Landing Page**

---

## ⚡ En 3 Minutes

### 1️⃣ Installer les Dépendances

```bash
npm install
```

### 2️⃣ Lancer le Serveur Local

```bash
npm run dev
```

**→ Ouvrir** : [http://localhost:3000](http://localhost:3000)

### 3️⃣ C'est Tout ! 🎉

Le site est maintenant visible en local.

---

## 🌍 Changer la Langue

Le site supporte **Français** et **English**.

- Cliquer sur le bouton **FR/EN** en haut à droite
- La langue est sauvegardée automatiquement

---

## 📝 Modifier le Contenu

### Textes & Traductions

**Fichier** : `/translations.ts`

```typescript
export const translations = {
  fr: {
    hero: {
      title: "Votre texte ici...",
      // ...
    }
  },
  en: {
    hero: {
      title: "Your text here...",
      // ...
    }
  }
}
```

### Informations de Contact (Footer)

**Fichier** : `/components/Footer.tsx`

- Email : `sam.grailled@gmail.com`
- Téléphone : `+33 6 29 64 48 54`
- LinkedIn : `https://www.linkedin.com/in/samuel-chetrit/`

### Couleurs & Design

**Fichier** : `/styles/globals.css`

```css
--ios-background: #F2F2F7;  /* Fond gris clair */
--ios-surface: #FFFFFF;      /* Cartes blanches */
--champagne: #C3A36E;        /* Couleur or premium */
```

---

## 🚀 Déployer sur Vercel

### Méthode Automatique

**Mac/Linux** :
```bash
chmod +x deploy.sh && ./deploy.sh
```

**Windows** :
```powershell
.\deploy.ps1
```

### Méthode Manuelle

```bash
# 1. Build de production
npm run build

# 2. Push sur GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/unlocky-landing.git
git push -u origin main

# 3. Déployer
# → Aller sur vercel.com/new
# → Importer le repo GitHub
# → Cliquer "Deploy"
# → Attendre 1-2 minutes ⏱️
# → Site en ligne ! 🎉
```

---

## 📦 Commandes Utiles

```bash
npm run dev           # Lancer serveur local
npm run build         # Build de production
npm start             # Serveur production local
npm run lint          # Vérifier le code
npm run format        # Formater le code
```

---

## 📚 Documentation Complète

| Fichier | Description |
|---------|-------------|
| **README.md** | Guide principal complet |
| **QUICKSTART.md** | Démarrage rapide technique |
| **DEPLOY_INSTRUCTIONS.md** | Instructions déploiement détaillées |
| **VERCEL_DEPLOY.md** | Guide spécifique Vercel |
| **STRUCTURE.md** | Architecture du projet |
| **CONTRIBUTING.md** | Guide pour contribuer |

---

## 🆘 Problèmes Courants

### ❌ "Cannot find module..."

```bash
# Solution : Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

### ❌ "Port 3000 is already in use"

```bash
# Solution : Utiliser un autre port
npm run dev -- -p 3001
```

### ❌ Page blanche après build

```bash
# Solution : Vérifier la console du navigateur (F12)
# Chercher les erreurs JavaScript et les corriger
```

---

## 📧 Support

- **Email** : sam.grailled@gmail.com
- **Documentation** : Voir les fichiers `.md` à la racine
- **Issues GitHub** : Pour signaler des bugs

---

## ✨ Sections du Site

1. **Hero** - Slogan principal
2. **ProofBar** - Logos partenaires
3. **Steps** - 3 étapes simples
4. **Security** - Sécurité bancaire
5. **Benefits** - Bénéfices clés
6. **Social Proof** - Témoignages
7. **Pricing** - Tarifs
8. **FAQ** - Questions fréquentes
9. **Contact Form** - Formulaire
10. **Footer** - Liens et contact

---

## 🎯 Prochaines Étapes

- [ ] **Personnaliser** les textes dans `/translations.ts`
- [ ] **Remplacer** les images placeholder par les vraies
- [ ] **Configurer** le formulaire de contact (backend)
- [ ] **Ajouter** Google Analytics si besoin
- [ ] **Tester** sur mobile (iPhone + Android)
- [ ] **Déployer** sur Vercel

---

**🎉 Bon développement avec Unlocky !**

*La clé est déjà dans leur téléphone.* 🔑📱
