import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#333333] flex flex-col selection:bg-[#8E9775]/20 selection:text-[#525B3E]">
      {/* Navigation */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 2. Projects & Works Showcase */}
        <ProjectsSection />

        {/* 3. Tech Stack & Capabilities */}
        <SkillsSection />

        {/* 4. Background & Milestones */}
        <ExperienceTimeline />

        {/* 5. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCV={() => setIsCVOpen(true)} />

      {/* CV Modal Preview & Print */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
