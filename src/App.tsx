import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Header } from './components/layout/Header';
import { ScrollProgress } from './components/ui/ScrollProgress';
export function App() {
  return <div className="relative w-full min-h-screen bg-stone-50 text-stone-900 overflow-hidden">
      <ScrollProgress />
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>;
}