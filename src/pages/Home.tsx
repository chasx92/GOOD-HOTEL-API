import React from 'react';
import { Hero } from '../components/Hero';
import { ProofBar } from '../components/ProofBar';
import { Steps } from '../components/Steps';
import { Benefits } from '../components/Benefits';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { LeadForm } from '../components/LeadForm';
import { SectionDivider } from '../components/SectionDivider';

export function Home() {
    return (
        <>
            <Hero />
            <ProofBar />
            <div className="hidden md:block py-10">
                <SectionDivider variant="blue" />
            </div>
            <Steps />
            <div className="hidden md:block py-10">
                <SectionDivider variant="blue" />
            </div>
            <Benefits />
            <div className="hidden md:block py-10">
                <SectionDivider variant="blue" />
            </div>
            <Pricing />
            <div className="hidden md:block py-10">
                <SectionDivider variant="blue" />
            </div>
            <FAQ />
            <div className="hidden md:block py-10">
                <SectionDivider variant="blue" />
            </div>
            <LeadForm />
        </>
    );
}
