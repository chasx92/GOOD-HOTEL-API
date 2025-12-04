#!/bin/bash

# Bash script pour déployer Unlocky Landing Page
# Usage: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Déploiement Unlocky Landing Page"
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Étape 1: Conversion et Build
echo -e "${YELLOW}📦 Étape 1/3: Préparation du code...${NC}"
npm run deploy-ready

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build échoué! Vérifiez les erreurs ci-dessus.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build réussi!${NC}"
echo ""

# Étape 2: Git
echo -e "${YELLOW}📤 Étape 2/3: Préparation Git...${NC}"

# Vérifier si c'est un repo git
if [ ! -d .git ]; then
    echo -e "${CYAN}Initialisation du repository Git...${NC}"
    git init
    git add .
    git commit -m "Initial commit - Unlocky Landing Page"
    git branch -M main
    
    echo ""
    echo -e "${YELLOW}⚠️  Configuration du remote GitHub requise:${NC}"
    echo "git remote add origin https://github.com/VOTRE-USERNAME/unlocky-landing-page.git"
    echo "git push -u origin main"
    echo ""
    echo -e "${CYAN}Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub${NC}"
else
    echo -e "${CYAN}Repository Git détecté, ajout des changements...${NC}"
    git add .
    git commit -m "Update - Unlocky Landing Page"
    
    # Vérifier si un remote existe
    if git remote -v | grep -q origin; then
        echo -e "${CYAN}Push vers GitHub...${NC}"
        git push
        echo -e "${GREEN}✅ Code pushé sur GitHub!${NC}"
    else
        echo -e "${YELLOW}⚠️  Aucun remote configuré. Ajoutez-le avec:${NC}"
        echo "git remote add origin https://github.com/VOTRE-USERNAME/unlocky-landing-page.git"
        echo "git push -u origin main"
    fi
fi

echo ""

# Étape 3: Vercel
echo -e "${YELLOW}☁️  Étape 3/3: Déploiement Vercel${NC}"
echo ""
echo -e "${CYAN}Deux options pour déployer sur Vercel:${NC}"
echo ""
echo -e "${NC}Option A (Recommandée) - Interface Web:${NC}"
echo "  1. Allez sur https://vercel.com/new"
echo "  2. Connectez votre compte GitHub"
echo "  3. Sélectionnez 'unlocky-landing-page'"
echo "  4. Cliquez 'Deploy'"
echo ""
echo -e "${NC}Option B - CLI:${NC}"
echo "  npm i -g vercel"
echo "  vercel --prod"
echo ""
echo -e "${GREEN}✅ Préparation terminée!${NC}"
echo -e "${CYAN}Votre projet est prêt pour le déploiement! 🎉${NC}"
