import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF5EB] text-[#1E232A] flex flex-col selection:bg-[#F5AF38]/30 selection:text-[#1F5A63]">
      {/* Navigation Bar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section (Hey There, I'm Görkem + Artistic Splash Portrait + Stats) */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 2. What do I help? (Services / Capabilities + Stacked Pill Cards) */}
        <ServicesSection />

        {/* 3. My Work Experience (2-column Journey & Milestones) */}
        <ExperienceTimeline />

        {/* 4. My Latest Works (Colored Cards Gallery & Demos) */}
        <ProjectsSection />

        {/* 5. Honors & Recognition (Testimonial Quote Cards) */}
        <TestimonialsSection />

        {/* 6. Technical Stack & Capabilities */}
        <SkillsSection />

        {/* 7. Get in Touch Form */}
        <ContactSection />
      </main>

      {/* 8. Footer (Let's make something amazing together. Start by saying hi) */}
      <Footer onOpenCV={() => setIsCVOpen(true)} />

      {/* Printable / Downloadable CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
