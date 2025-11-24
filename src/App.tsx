import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { Steps } from './components/Steps';
import { Security } from './components/Security';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { BackToTop } from './components/BackToTop';
import { SEOHead } from './components/SEOHead';
import { SmoothScroll } from './components/SmoothScroll';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { language } = useLanguage();

  return (
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
          fontFamily: '-apple-system, SF Pro Display, sans-serif',
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
        <Hero />
        <ProofBar />
        <Steps />
        <Security />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>

      <footer>
        <Footer />
      </footer>

      <StickyCTA />
      <BackToTop />
      <SmoothScroll />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}