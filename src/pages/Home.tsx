import React from 'react';
import { Hero } from '../components/Hero';
import { Steps } from '../components/Steps';
import { Benefits } from '../components/Benefits';
import { FAQ } from '../components/FAQ';
import { LeadForm } from '../components/LeadForm';

export function Home() {
    return (
        <>
            <Hero />
            <Steps />
            <Benefits />
            <FAQ />
            <LeadForm />
        </>
    );
}
