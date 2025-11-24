#!/usr/bin/env node

/**
 * Script de conversion automatique pour Next.js
 * Convertit tous les composants React en composants Next.js
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '..', 'components');

// Liste des fichiers à convertir
const filesToConvert = [
  'Navbar.tsx',
  'Hero.tsx',
  'ProofBar.tsx',
  'Steps.tsx',
  'Security.tsx',
  'Benefits.tsx',
  'Testimonials.tsx',
  'Pricing.tsx',
  'FAQ.tsx',
  'LeadForm.tsx',
  'Footer.tsx',
  'StickyCTA.tsx',
  'BackToTop.tsx',
  'WalletCard.tsx',
  'SEOHead.tsx',
  'SmoothScroll.tsx',
  'SectionDivider.tsx',
];

function convertFile(filename) {
  const filePath = path.join(COMPONENTS_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier ignoré (n'existe pas): ${filename}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Ajouter 'use client' si pas déjà présent
  if (!content.includes("'use client'") && !content.includes('"use client"')) {
    content = "'use client';\n\n" + content;
    modified = true;
  }

  // 2. Remplacer motion/react par framer-motion
  if (content.includes("from 'motion/react'")) {
    content = content.replace(/from ['"]motion\/react['"]/g, "from 'framer-motion'");
    modified = true;
  }

  // 3. Remplacer les imports relatifs par des imports absolus @/
  // ./components/ → @/components/
  content = content.replace(/from ['"]\.\\/components\//g, "from '@/components/");
  // ../components/ → @/components/
  content = content.replace(/from ['"]\.\.\/components\//g, "from '@/components/");
  // ../contexts/ → @/contexts/
  content = content.replace(/from ['"]\.\.\/contexts\//g, "from '@/contexts/");
  // ./contexts/ → @/contexts/
  content = content.replace(/from ['"]\.\\/contexts\//g, "from '@/contexts/");
  // ../translations → @/translations
  content = content.replace(/from ['"]\.\.\/translations['"]/g, "from '@/translations'");

  if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Converti: ${filename}`);
  } else {
    console.log(`ℹ️  Déjà à jour: ${filename}`);
  }
}

console.log('🚀 Conversion des composants pour Next.js...\n');

filesToConvert.forEach(file => {
  convertFile(file);
});

console.log('\n✨ Conversion terminée!');
console.log('\n📝 Prochaines étapes:');
console.log('1. npm install');
console.log('2. npm run build');
console.log('3. npm run dev (pour tester)');
console.log('4. git add . && git commit -m "Convert to Next.js"');
console.log('5. git push');
