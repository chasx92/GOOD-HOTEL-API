import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { BackToTop } from './components/BackToTop';
import { SEOHead } from './components/SEOHead';
import { SmoothScroll } from './components/SmoothScroll';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import { LegalNotice } from './pages/LegalNotice';
import { TermsOfSales } from './pages/TermsOfSales';
import { MobileHome } from './pages/MobileHome';
import { FONT_BODY } from './styles/typography';

function AppContent() {
  const { language } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden" style={{ background: '#F2F2F7' }}>
        {/* SEO Meta Tags & Structured Data */}
        <SEOHead />

        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#007AFF] focus:ring-offset-4"
          style={{
            background: '#007AFF',
            color: '#FFFFFF',
            fontFamily: FONT_BODY,
            fontSize: '15px',
            fontWeight: 600,
          }}
        >
          {language === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
        </a>

        <header>
          <Navbar />
        </header>

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/conditions-generales" element={<TermsOfSales />} />
            <Route path="/mobile" element={<MobileHome />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>

        <StickyCTA />
        <BackToTop />
        <SmoothScroll />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}