# Guide de Contribution

Merci de votre intérêt pour contribuer au projet **Openli Landing Page** ! 🎉

Ce document fournit les directives pour contribuer efficacement au projet.

---

## 📋 Table des Matières

1. [Code de Conduite](#code-de-conduite)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Workflow de Développement](#workflow-de-développement)
5. [Standards de Code](#standards-de-code)
6. [Structure des Commits](#structure-des-commits)
7. [Pull Requests](#pull-requests)
8. [Tests](#tests)
9. [Documentation](#documentation)

---

## 📜 Code de Conduite

### Nos Engagements

- ✅ Être respectueux et professionnel
- ✅ Accepter les critiques constructives
- ✅ Se concentrer sur ce qui est meilleur pour le projet
- ✅ Faire preuve d'empathie envers les autres contributeurs

### Comportements Inacceptables

- ❌ Langage offensant ou dévalorisant
- ❌ Trolling, insultes ou attaques personnelles
- ❌ Harcèlement public ou privé
- ❌ Publication d'informations privées sans permission

---

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** : >= 18.17.0 (voir `.nvmrc`)
- **npm** : >= 9.0.0
- **Git** : Version récente
- **Éditeur** : VS Code recommandé avec extensions :
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

---

## 💻 Installation

### 1. Fork & Clone

```bash
# Fork le projet sur GitHub, puis :
git clone https://github.com/VOTRE-USERNAME/openli-landing.git
cd openli-landing
```

### 2. Installer les Dépendances

```bash
npm install
```

### 3. Configuration Environnement

```bash
# Copier le template d'environnement
cp .env.example .env.local

# Éditer .env.local avec vos valeurs si nécessaire
```

### 4. Lancer le Serveur de Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 🔄 Workflow de Développement

### 1. Créer une Branche

Toujours créer une branche depuis `main` :

```bash
git checkout main
git pull origin main
git checkout -b type/description-courte
```

**Types de branches :**
- `feat/` : Nouvelle fonctionnalité
- `fix/` : Correction de bug
- `docs/` : Documentation uniquement
- `style/` : Formatage, missing semi-colons, etc.
- `refactor/` : Refactoring sans changement de comportement
- `perf/` : Amélioration de performance
- `test/` : Ajout ou correction de tests
- `chore/` : Maintenance, dependencies, config

**Exemples :**
```bash
git checkout -b feat/add-contact-form-backend
git checkout -b fix/hero-mobile-layout
git checkout -b docs/update-deployment-guide
```

### 2. Développer

```bash
# Lancer le serveur de développement
npm run dev

# Vérifier le code en temps réel
npm run lint
npm run type-check
```

### 3. Tester

```bash
# Build de production local
npm run build

# Tester le build
npm start
```

### 4. Commit

Voir [Structure des Commits](#structure-des-commits)

### 5. Push & Pull Request

```bash
git push origin feat/ma-fonctionnalite
```

Puis créer une Pull Request sur GitHub.

---

## 🎨 Standards de Code

### TypeScript

```typescript
// ✅ BON : Types explicites
interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  // ...
}

// ❌ MAUVAIS : any et types manquants
export function Hero(props: any) {
  // ...
}
```

### React Components

```tsx
// ✅ BON : Named export, types stricts, client component quand nécessaire
'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`btn btn-${variant}`}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.button>
  );
}

// ❌ MAUVAIS : Default export, inline styles complexes
export default function Button(props) {
  return <button style={{ color: 'blue', fontSize: 16 }}>{props.label}</button>;
}
```

### Tailwind CSS

```tsx
// ✅ BON : Classes utilitaires réutilisables
<div className="max-w-7xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold text-gray-900">Title</h1>
</div>

// ❌ MAUVAIS : Trop de classes ou classes custom inutiles
<div className="my-custom-container-with-padding-and-margin">
  <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Title</h1>
</div>
```

### Nommage

| Type | Convention | Exemple |
|------|-----------|---------|
| **Composants** | PascalCase | `Hero.tsx`, `WalletCard.tsx` |
| **Fonctions** | camelCase | `scrollToSection()`, `handleSubmit()` |
| **Variables** | camelCase | `isLoading`, `userEmail` |
| **Constants** | SCREAMING_SNAKE_CASE | `MAX_ITEMS`, `API_ENDPOINT` |
| **Types/Interfaces** | PascalCase | `HeroProps`, `UserData` |
| **CSS Classes** | kebab-case | `hero-section`, `cta-button` |

### Imports

**Ordre standardisé :**

```typescript
// 1. React & Next.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

// 2. Bibliothèques externes
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

// 3. Composants internes
import { Button } from './components/ui/button';
import { Hero } from './components/Hero';

// 4. Contexts & Hooks
import { useLanguage } from './contexts/LanguageContext';

// 5. Utils & Helpers
import { cn } from './lib/utils';

// 6. Types
import type { HeroProps } from './types';

// 7. Styles (si nécessaire)
import './styles.css';
```

---

## 📝 Structure des Commits

### Format Conventionnel

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation seulement
- `style`: Formatage (whitespace, missing semi-colons)
- `refactor`: Refactoring sans changement de comportement
- `perf`: Amélioration de performance
- `test`: Ajout/correction de tests
- `chore`: Maintenance, dependencies, config

### Exemples

```bash
# Nouvelle fonctionnalité
git commit -m "feat(contact): add email validation to LeadForm"

# Correction de bug
git commit -m "fix(navbar): resolve sticky positioning on mobile Safari"

# Documentation
git commit -m "docs(readme): update deployment instructions for Vercel"

# Style
git commit -m "style(hero): format code with Prettier"

# Refactoring
git commit -m "refactor(steps): extract StepCard component"

# Performance
git commit -m "perf(images): implement lazy loading for hero images"

# Avec body et footer
git commit -m "feat(i18n): add Spanish language support

Add complete Spanish translations for all sections.
Update LanguageContext to support 'es' locale.

Closes #42"
```

### Règles

- ✅ Utiliser l'impératif présent : "add" pas "added" ou "adds"
- ✅ Ne pas capitaliser la première lettre
- ✅ Pas de point final
- ✅ Limite de 50 caractères pour le subject
- ✅ Body optionnel de 72 caractères max par ligne
- ✅ Référencer les issues avec `Closes #123`

---

## 🔍 Pull Requests

### Checklist avant PR

- [ ] Le code build sans erreurs (`npm run build`)
- [ ] Pas d'erreurs ESLint (`npm run lint`)
- [ ] Pas d'erreurs TypeScript (`npm run type-check`)
- [ ] Code formaté avec Prettier (`npm run format`)
- [ ] Tests passent (si applicable)
- [ ] Documentation à jour
- [ ] Changements testés en local
- [ ] Commit messages suivent la convention

### Template de PR

```markdown
## 📝 Description

Courte description des changements.

## 🎯 Type de Changement

- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## 🧪 Comment Tester

1. Cloner la branche
2. Lancer `npm install`
3. Lancer `npm run dev`
4. Aller sur http://localhost:3000/...
5. Vérifier que...

## 📸 Screenshots (si applicable)

![Before](url)
![After](url)

## ✅ Checklist

- [ ] Code build sans erreurs
- [ ] Testé sur Chrome/Safari/Firefox
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accessibility check (ARIA, focus, contrast)
- [ ] Documentation à jour
- [ ] Pas de console.log() ou code debug

## 🔗 Issues Liées

Closes #123
Related to #456
```

### Processus de Review

1. **Créer la PR** : Avec description claire et screenshots si UI
2. **Review automatique** : Vercel Preview Deploy + CI checks
3. **Review humaine** : Attendre l'approbation d'un mainteneur
4. **Adresser les commentaires** : Effectuer les modifications demandées
5. **Merge** : Squash and merge (par le mainteneur)

---

## 🧪 Tests

### Tests Manuels (Actuellement)

Avant chaque PR, tester :

1. **Desktop** (1440px) :
   - Chrome, Firefox, Safari
   - Toutes les sections visibles
   - Interactions fonctionnelles
   - Smooth scroll

2. **Tablet** (768px) :
   - iPad Safari/Chrome
   - Layout adapté
   - Touch interactions

3. **Mobile** (390px) :
   - iPhone Safari/Chrome
   - Android Chrome
   - Menu mobile
   - CTA sticky visible

4. **Accessibilité** :
   - Navigation clavier (Tab)
   - Screen reader (VoiceOver/NVDA)
   - Contraste des couleurs
   - ARIA labels

### Tests Automatisés (Futur)

```bash
# À implémenter
npm run test          # Jest + React Testing Library
npm run test:e2e      # Playwright
npm run test:a11y     # Pa11y ou axe-core
```

---

## 📚 Documentation

### Quand Documenter

- **Nouvelle fonctionnalité** : Ajouter section dans README.md
- **Changement d'API** : Mettre à jour les types et exemples
- **Nouvelle dépendance** : Expliquer pourquoi dans package.json ou docs
- **Configuration** : Documenter les variables d'environnement
- **Composant complexe** : JSDoc comments + usage example

### Format JSDoc

```typescript
/**
 * Button component with Motion animations
 * 
 * @example
 * ```tsx
 * <Button 
 *   label="Click me" 
 *   onClick={() => console.log('clicked')}
 *   variant="primary"
 * />
 * ```
 * 
 * @param props - Button properties
 * @param props.label - Button text content
 * @param props.onClick - Click handler function
 * @param props.variant - Visual style variant
 */
export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}
```

---

## 🐛 Signaler un Bug

### Template d'Issue

```markdown
## 🐛 Description du Bug

Courte description du problème.

## 📸 Reproduction

1. Aller sur '...'
2. Cliquer sur '...'
3. Scroller jusqu'à '...'
4. Observer l'erreur

## 🎯 Comportement Attendu

Ce qui devrait se passer.

## 🖼️ Screenshots

Si applicable, ajouter des screenshots.

## 🌍 Environnement

- OS: [e.g. macOS 14.0, Windows 11]
- Browser: [e.g. Chrome 120, Safari 17]
- Screen size: [e.g. 1920x1080, iPhone 15 Pro]
- Node version: [e.g. 18.17.0]

## 📝 Contexte Additionnel

Toute autre information utile.
```

---

## ❓ Questions

Si vous avez des questions :

1. **Consulter la doc** : Lire les fichiers `.md` à la racine
2. **GitHub Discussions** : Poser vos questions dans Discussions
3. **Email** : sam.grailled@gmail.com pour questions urgentes

---

## 🎉 Merci !

Vos contributions sont précieuses pour améliorer Openli Landing Page ! 🙏

**Mainteneurs :**
- Samuel Chetrit ([@samuel-chetrit](https://github.com/samuel-chetrit))

---

**Dernière mise à jour** : 20 novembre 2025  
**Version** : 1.0.0
