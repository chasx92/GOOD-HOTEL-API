import { useEffect } from 'react';
import { MobileHeader } from '../components/mobile/MobileHeader';
import { MobileHero } from '../components/mobile/MobileHero';
import { MobileFeatures } from '../components/mobile/MobileFeatures';
import { MobileSteps } from '../components/mobile/MobileSteps';
import { MobileCTA } from '../components/mobile/MobileCTA';

export function MobileHome() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MobileHeader />
      <main className="space-y-8">
        <MobileHero />
        <MobileFeatures />
        <MobileSteps />
        <MobileCTA />
      </main>
    </div>
  );
}
