import React, { lazy, Suspense } from 'react';
import { Hero } from './components/Layout/Hero';
import { AboutMe } from './components/Layout/AboutMe';
import { USPCard } from './components/Layout/CareerObjective';
import { WorkExperience } from './components/Layout/WorkExperience';

import { TechnicalSkills } from './components/Layout/TechnicalSkills';
import { SoftSkillsLanguages } from './components/Layout/SoftSkillsLanguages';
import { Certifications } from './components/Layout/Certifications';
import { Education } from './components/Layout/Education';
import { ContactCTA } from './components/Layout/ContactCTA';
import { Footer } from './components/Layout/Footer';
import { Noise } from './components/UI/Noise';
import { MeshGradient } from './components/UI/MeshGradient';
import { GridPattern } from './components/UI/GridPattern';
import { ParticleNetwork } from './components/UI/ParticleNetwork';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden selection:bg-black/10 selection:text-black transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MeshGradient />
        <Noise />
        {/* Desktop: Canvas particle network (md screens and up) */}
        <div className="hidden md:block">
          <ParticleNetwork />
        </div>
        {/* Mobile: Static SVG grid (below md) */}
        <div className="block md:hidden">
          <GridPattern />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <USPCard />
        <WorkExperience />

        <TechnicalSkills />
        <SoftSkillsLanguages />
        <Certifications />
        <Education />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}