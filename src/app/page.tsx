'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Steps } from '@/components/Steps';
import { Security } from '@/components/Security';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Security />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <LeadForm />
        <Footer />
      </main>
      <StickyCTA />
      <BackToTop />
    </>
  );
}
