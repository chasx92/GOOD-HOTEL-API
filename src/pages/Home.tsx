import React from 'react';
import { Hero } from '../components/Hero';
import { ProofBar } from '../components/ProofBar';
import { Steps } from '../components/Steps';
import { Benefits } from '../components/Benefits';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { LeadForm } from '../components/LeadForm';

export function Home() {
    return (
        <>
            <Hero />
            <ProofBar />
            <Steps />
            <Benefits />
            <Pricing />
            <FAQ />
            <LeadForm />
        </>
    );
}
