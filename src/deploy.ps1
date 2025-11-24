# PowerShell script pour déployer Openli Landing Page
# Usage: .\deploy.ps1

Write-Host "🚀 Déploiement Openli Landing Page" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Conversion et Build
Write-Host "📦 Étape 1/3: Préparation du code..." -ForegroundColor Yellow
npm run deploy-ready

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build échoué! Vérifiez les erreurs ci-dessus." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi!" -ForegroundColor Green
Write-Host ""

# Étape 2: Git
Write-Host "📤 Étape 2/3: Préparation Git..." -ForegroundColor Yellow

# Vérifier si c'est un repo git
if (-Not (Test-Path .git)) {
    Write-Host "Initialisation du repository Git..." -ForegroundColor Cyan
    git init
    git add .
    git commit -m "Initial commit - Openli Landing Page"
    git branch -M main
    
    Write-Host ""
    Write-Host "⚠️  Configuration du remote GitHub requise:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/VOTRE-USERNAME/openli-landing-page.git"
    Write-Host "git push -u origin main"
    Write-Host ""
    Write-Host "Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub" -ForegroundColor Cyan
} else {
    Write-Host "Repository Git détecté, ajout des changements..." -ForegroundColor Cyan
    git add .
    git commit -m "Update - Openli Landing Page"
    
    $remote = git remote -v
    if ($remote) {
        Write-Host "Push vers GitHub..." -ForegroundColor Cyan
        git push
        Write-Host "✅ Code pushé sur GitHub!" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Aucun remote configuré. Ajoutez-le avec:" -ForegroundColor Yellow
        Write-Host "git remote add origin https://github.com/VOTRE-USERNAME/openli-landing-page.git"
        Write-Host "git push -u origin main"
    }
}

Write-Host ""

# Étape 3: Vercel
Write-Host "☁️  Étape 3/3: Déploiement Vercel" -ForegroundColor Yellow
Write-Host ""
Write-Host "Deux options pour déployer sur Vercel:" -ForegroundColor Cyan
Write-Host ""
Write-Host "Option A (Recommandée) - Interface Web:" -ForegroundColor White
Write-Host "  1. Allez sur https://vercel.com/new"
Write-Host "  2. Connectez votre compte GitHub"
Write-Host "  3. Sélectionnez 'openli-landing-page'"
Write-Host "  4. Cliquez 'Deploy'"
Write-Host ""
Write-Host "Option B - CLI:" -ForegroundColor White
Write-Host "  npm i -g vercel"
Write-Host "  vercel --prod"
Write-Host ""
Write-Host "✅ Préparation terminée!" -ForegroundColor Green
Write-Host "Votre projet est prêt pour le déploiement! 🎉" -ForegroundColor Cyan
