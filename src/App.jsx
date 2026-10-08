import React from 'react';
import { GlobalBackground } from './components/layout/GlobalBackground';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Technologies } from './components/sections/Technologies';
import { FinalCTA } from './components/sections/FinalCTA';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFF] text-brand-dark selection:bg-brand-indigo/20 selection:text-brand-indigo overflow-x-hidden">
      {/* Unified Global Atmospheric Background Canvas */}
      <GlobalBackground />

      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        <Hero />
        <Services />
        <Technologies />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
