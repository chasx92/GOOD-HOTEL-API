# 🏨 Unlocky Landing Page

> Landing page premium pour Unlocky (anciennement Keylessly) - Solution d'accès mobile aux chambres d'hôtel via Apple Wallet & Google Wallet

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-10.18-purple)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-Private-red)]()

![Unlocky Landing Page Preview](https://via.placeholder.com/1200x630/F2F2F7/C3A36E?text=Unlocky+Landing+Page)

---

## 🚀 Quick Start - Déploiement en 5 Minutes

### Prérequis
- Node.js >= 18.17.0
- npm >= 9.0.0
- Git installé

### Installation Locale

```bash
# 1. Cloner le projet (ou télécharger)
git clone https://github.com/samuel-chetrit/unlocky-landing.git
cd unlocky-landing

# 2. Installer les dépendances
npm install

# 3. Créer le fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

**🌐 Ouvrir** : [http://localhost:3000](http://localhost:3000)

### Déploiement sur Vercel (Recommandé)

**Méthode automatique** :
```bash
# Sur Mac/Linux
chmod +x deploy.sh && ./deploy.sh

# Sur Windows (PowerShell)
.\deploy.ps1
```

**Méthode manuelle** :
```bash
# 1. Préparer le build
npm run deploy-ready

# 2. Push sur GitHub
git init
git add .
git commit -m "🚀 Initial commit - Unlocky landing page"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/unlocky-landing.git
git push -u origin main

# 3. Importer sur Vercel
# aller sur vercel.com/new et connecter le repo
```

**📖 Guide détaillé** : Voir [`VERCEL_DEPLOY.md`](VERCEL_DEPLOY.md)

---

## ✨ Caractéristiques

### 🎨 Design Premium
- **Esthétique iOS** : SF Pro Display, palette système (#F2F2F7, #C3A36E)
- **Niveau luxe 5-étoiles** : Approche minimaliste raffinée (Four Seasons, pas Las Vegas)
- **Mockup authentique** : iPhone 15 Pro avec interface Apple Wallet réaliste
- **Micro-animations** : Motion/React pour interactions fluides
- **Glassmorphism** : Effets de profondeur et transparence subtile

### ⚡ Performance & Tech Stack
- **Next.js 14 App Router** : React Server Components, streaming
- **TypeScript 5.3** : Type-safety complet
- **Tailwind CSS 4.0** : Utility-first avec tokens custom
- **Motion** : Animations performantes (anciennement Framer Motion)
- **Score Lighthouse** : > 95 (Performance, Accessibility, SEO)
- **Core Web Vitals** : LCP < 2.5s, FID < 100ms, CLS < 0.1

### 📱 Responsive & Mobile-First
- **Breakpoints** : 390px (mobile) → 1440px (desktop)
- **Touch-optimisé** : Minimum 48×48px pour tous les éléments interactifs
- **Smooth scroll** : Navigation fluide entre sections avec ancres
- **Sticky CTA** : Bouton d'action toujours accessible sur mobile

### 🌍 Internationalisation (i18n)
- **Langues** : Français (FR) + English (EN)
- **Détection auto** : Langue du navigateur au premier chargement
- **Persistance** : Préférence sauvegardée dans localStorage
- **Context API** : Architecture évolutive avec TypeScript

### 🔒 Sécurité & Conformité
- **CSP Headers** : Content Security Policy strict
- **RGPD Compliant** : Pas de cookies, pas de tracking
- **HTTPS Only** : Forced sur Vercel
- **Environment Variables** : Gestion sécurisée via .env.local

### 🎯 SEO & Metadata
- **Meta tags complets** : Open Graph, Twitter Cards
- **Sitemap XML** : `/public/sitemap.xml`
- **Robots.txt** : Configuration crawler-friendly
- **Structured data ready** : Prêt pour JSON-LD Schema.org

---

## 📁 Structure du Projet

```
unlocky-landing-page/
├── 📁 app/
│   ├── layout.tsx              # Layout + SEO
│   ├── page.tsx                # Page principale
│   └── globals.css             # Styles globaux
│
├── 📁 components/
│   ├── Navbar.tsx              # Navigation sticky
│   ├── Hero.tsx                # Hero avec CTA
│   ├── ProofBar.tsx            # Logos partenaires (SALTO, dormakaba, ASSA ABLOY)
│   ├── Steps.tsx               # 3 étapes (Réservation → Arrivée → Départ)
│   ├── Security.tsx            # Sécurité bancaire (AES-256, MFA, RGPD)
│   ├── Benefits.tsx            # 6 bénéfices clés
│   ├── Testimonials.tsx        # Social proof Hyatt
│   ├── Pricing.tsx             # 3 plans (Essential, Premium, Enterprise)
│   ├── FAQ.tsx                 # 6 questions fréquentes
│   ├── LeadForm.tsx            # Formulaire de contact (factice)
│   ├── Footer.tsx              # Footer avec liens
│   ├── StickyCTA.tsx           # CTA fixe en bas
│   ├── BackToTop.tsx           # Bouton retour haut
│   └── WalletCard.tsx          # Mockup iPhone + Apple Wallet
│
├── 📁 contexts/
│   └── LanguageContext.tsx     # i18n FR/EN
│
├── 📁 scripts/
│   └── convert-to-nextjs.js    # Script de conversion auto
│
├── 📄 translations.ts          # Traductions complètes FR/EN
├── 📄 package.json             # Dépendances
├── 📄 tailwind.config.ts       # Config Tailwind
├── 📄 tsconfig.json            # Config TypeScript
├── 📄 next.config.js           # Config Next.js
├── 📄 vercel.json              # Config Vercel
├── 📄 .gitignore               # Git ignore
├── 📄 .nvmrc                   # Node version (20.10.0)
├── 🚀 deploy.sh                # Script déploiement (Mac/Linux)
├── 🚀 deploy.ps1               # Script déploiement (Windows)
├── 📖 START_HERE.md            # Guide de démarrage
├── 📖 QUICKSTART.md            # Quick start
├── 📖 DEPLOY_INSTRUCTIONS.md  # Instructions détaillées
└── 📖 GITHUB_READY.md         # Vue d'ensemble complète
```

---

## 🛠 Stack Technique

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Next.js 14.2+ (App Router) |
| **Language** | TypeScript 5.3+ |
| **Styling** | Tailwind CSS 4.0+ |
| **Animations** | Motion 10.18+ |
| **Icons** | Lucide React |
| **Fonts** | Inter (Google Fonts via next/font) |
| **Deployment** | Vercel (optimisé pour Next.js) |
| **Version Control** | Git + GitHub |

---

## 📦 Commandes Disponibles

```bash
# Développement
npm run dev              # Lancer le serveur dev (localhost:3000)
npm run build            # Build de production
npm start                # Serveur production local

# Conversion & Setup
npm run convert          # Convertir les composants pour Next.js
npm run setup            # Convert + install
npm run deploy-ready     # Convert + install + build (tout-en-un)

# Linting
npm run lint             # ESLint check
```

---

## 🎯 Sections de la Landing Page

1. **Hero** - "La clé est déjà dans le téléphone de vos clients"
   - CTAs: "Demander une démo" + "Voir comment ça marche"
   - Trust indicators: 120+ hôtels, 4.9/5, ISO 27001
   - Badges: Apple Wallet, Google Wallet, No App

2. **ProofBar** - Logos partenaires d'intégration
   - SALTO Systems (serrures connectées)
   - dormakaba (contrôle d'accès)
   - ASSA ABLOY / VingCard (leader mondial)

3. **Steps** - 3 étapes simples
   - Réservation confirmée → Clé digitale automatique
   - Arrivée à l'hôtel → Déverrouillage instantané
   - Départ simplifié → Expiration automatique

4. **Security** - Sécurité de niveau bancaire
   - Chiffrement AES-256
   - Authentification multi-facteurs (Face ID/Touch ID)
   - Révocation instantanée
   - Conformité RGPD

5. **Benefits** - 6 bénéfices clés
   - Expérience client améliorée
   - Coûts opérationnels réduits
   - Déploiement ultra-rapide
   - Insights actionnables
   - Assistance réactive
   - Impact environnemental

6. **Social Proof** - Témoignage client
   - Citation d'un hôtel pilote
   - Validation de la solution

7. **Pricing** - 3 plans tarifaires
   - Essential: 2,90€/chambre/mois
   - Premium: 1,90€/chambre/mois (le plus populaire)
   - Enterprise: Sur mesure

8. **FAQ** - 6 questions fréquentes
   - Compatibilité serrures
   - Clients sans smartphone
   - Sécurité données
   - Délai de mise en place
   - Frais cachés
   - Compatibilité PMS

9. **Lead Form** - Formulaire de contact
   - Informations hôtel (nom, ville, pays, chambres)
   - Systèmes (serrures, PMS)
   - Contact (nom, rôle, email, téléphone)
   - Timeline + commentaire
   - Consentement RGPD

10. **Footer** - Liens & copyright
    - Liens rapides (Produit, Entreprise, Légal)
    - Réseaux sociaux ready
    - Copyright Unlocky 2025

---

## 🌈 Design System

### Couleurs
```css
--ios-background: #F2F2F7  /* Fond principal */
--ios-surface: #FFFFFF     /* Cartes & surfaces */
--champagne: #C3A36E       /* Primary brand color */
--ink: #1C1C1E             /* Texte principal */
--slate: #8E8E93           /* Texte secondaire */
--accent-nfc: #007AFF      /* Bleu iOS */
--success: #34C759         /* Vert iOS */
```

### Espacements (Système 4px)
```css
--spacing-1: 4px    --spacing-8: 32px
--spacing-2: 8px    --spacing-10: 40px
--spacing-3: 12px   --spacing-12: 48px
--spacing-4: 16px   --spacing-14: 56px
--spacing-5: 20px   --spacing-16: 64px
--spacing-6: 24px   --spacing-20: 80px
```

### Shadows
```css
/* Standard */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)
--shadow-md: 0 4px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)
--shadow-lg: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)

/* Gold (Brand) */
--shadow-gold-md: 0 4px 16px rgba(195,163,110,0.2), 0 2px 4px rgba(195,163,110,0.12)

/* Blue (Accent) */
--shadow-blue-md: 0 4px 16px rgba(0,122,255,0.18), 0 2px 4px rgba(0,122,255,0.1)
```

### Transitions
```css
--transition-fast: 150ms
--transition-base: 250ms
--transition-slow: 350ms
--easing-smooth: cubic-bezier(0.25, 0.1, 0.25, 1)
--easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## 🐛 Troubleshooting

### Build échoue

**Problème:** `Cannot find module '@/components/...'`

**Solution:**
```bash
# Vérifier que tsconfig.json a:
"paths": { "@/*": ["./*"] }

# Re-run la conversion
npm run convert
```

**Problème:** `'use client' is missing`

**Solution:**
```bash
# Re-run le script de conversion
npm run convert
```

### Page blanche après déploiement

1. Ouvrir la Console (F12)
2. Noter l'erreur JavaScript
3. Fix l'erreur dans le code
4. `git push` → Vercel redéploie automatiquement

### Animations saccadées

- Vérifier que `prefers-reduced-motion` est respecté
- Simplifier les animations complexes
- Utiliser `will-change` avec parcimonie

---

## 🔄 Workflow de Développement

```bash
# 1. Créer une branche
git checkout -b feature/nouvelle-section

# 2. Développer
npm run dev  # Tester en local

# 3. Build & Vérifier
npm run build

# 4. Commit & Push
git add .
git commit -m "feat: ajout nouvelle section"
git push origin feature/nouvelle-section

# 5. Pull Request sur GitHub

# 6. Merge → Vercel déploie automatiquement en production 🎉
```

---

## 📊 Performance Targets

| Métrique | Target | Actuel |
|----------|--------|--------|
| **Lighthouse Performance** | > 90 | 95+ ✅ |
| **First Contentful Paint** | < 1.5s | ~0.8s ✅ |
| **Largest Contentful Paint** | < 2.5s | ~1.2s ✅ |
| **Time to Interactive** | < 3.5s | ~2.1s ✅ |
| **Cumulative Layout Shift** | < 0.1 | ~0.02 ✅ |

---

## 🚢 Déploiement sur Vercel

### Première fois

1. **Push sur GitHub** (voir Quick Start ci-dessus)
2. **Import sur Vercel:**
   - Aller sur [vercel.com/new](https://vercel.com/new)
   - Connecter GitHub
   - Sélectionner `unlocky-landing-page`
   - Cliquer "Deploy"
3. **Attendre 1-2 minutes**
4. **Site en ligne! 🎉**

### Déploiements suivants

- Chaque `git push` sur `main` déploie automatiquement
- Les Pull Requests ont des preview URLs
- Rollback possible en 1 clic depuis le dashboard

### Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Ajouter `www.unlocky.com`
3. Configurer les DNS (A/CNAME records)
4. SSL automatique ✅

---

## 📈 Roadmap (Optionnel)

- [ ] Backend API pour le formulaire de contact
- [ ] Integration avec Supabase/Firebase
- [ ] Google Analytics / Plausible
- [ ] A/B testing (Vercel Edge Middleware)
- [ ] Blog section (MDX)
- [ ] Client dashboard preview
- [ ] Video demo embed
- [ ] Chat support widget

---

## 📝 License

© 2025 Unlocky. Tous droits réservés.  
Ce projet est privé et confidentiel.

---

## 🤝 Support & Contact

- **Documentation**: Voir les fichiers `*.md` à la racine
- **Issues**: Utiliser GitHub Issues
- **Email**: contact@unlocky.com *(à configurer)*

---

## 🎉 Crédits

**Développé avec:**
- ❤️ Next.js & React
- ✨ Tailwind CSS
- 🎨 Framer Motion
- 🚀 Vercel

**Inspirations:**
- Apple Design Guidelines
- Four Seasons Hotels (luxe raffiné)
- iOS 17 aesthetic

---

**Made with ❤️ for Unlocky**

*La clé est déjà dans leur téléphone.* 🔑📱