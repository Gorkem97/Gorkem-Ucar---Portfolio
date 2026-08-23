import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Code, 
  Gamepad2,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, projectsData, timelineData, skillCategories } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-[#1E232A]/70 backdrop-blur-xs">
        
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#EAE2D3] z-10 my-6"
        >
          {/* Top Bar for Modal Actions (Hidden in Print) */}
          <div className="p-4 sm:p-5 bg-[#FAF5EB] border-b border-[#EAE2D3] flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#235E63]" />
              <span className="font-bold text-sm sm:text-base text-[#1E232A]">
                Resume Preview (CV) • {personalInfo.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#235E63] hover:bg-[#1A4B50] text-white text-xs sm:text-sm font-bold rounded-full transition-colors shadow-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 hover:bg-[#EAE2D3] text-[#737C8B] hover:text-[#1E232A] rounded-full transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-[#1E232A] space-y-8 font-sans">
            
            {/* CV Header */}
            <div className="border-b-2 border-[#235E63] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#FAF5EB] border border-[#EAE2D3] shrink-0 hidden sm:block">
                    <img
                      src="/profile.jpg"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.endsWith('/profile.svg')) {
                          target.src = '/profile.svg';
                        }
                      }}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-extrabold text-[#1E232A] tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-sm font-bold text-[#235E63] mt-0.5">
                      {personalInfo.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right text-xs text-[#737C8B] space-y-1">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#235E63]" />
                    <span>{personalInfo.email}</span>
                  </div>
                  {personalInfo.phone && (
                    <div className="flex sm:justify-end items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#235E63]" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  )}
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#235E63]" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-2 pt-1 font-bold text-[#1E232A]">
                    <span>GitHub: github.com/Gorkem97</span>
                    <span>•</span>
                    <span>Itch.io: gorkemucar.itch.io</span>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <p className="mt-4 text-xs sm:text-sm text-[#4A505C] leading-relaxed font-light">
                {personalInfo.bio} Focused on modular gameplay systems, scalable C# state machines, AI workflow enhancement, VR interaction systems, and cooperative GitHub team development.
              </p>
            </div>

            {/* Section: Education & Diplomas */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#235E63] flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Certifications</span>
              </h2>

              <div className="space-y-3">
                <div className="bg-[#FAF5EB] p-4 rounded-2xl border border-[#EAE2D3]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#1E232A]">
                      Politecnico di Torino — Bachelor of Science in Computer Engineering
                    </span>
                    <span className="text-xs font-bold text-[#235E63]">2024 – Present</span>
                  </div>
                  <div className="text-xs text-[#737C8B] mt-0.5">
                    Location: Torino, Italy • Academic Focus: <strong>Computer Engineering</strong>
                  </div>
                  <p className="text-xs text-[#4A505C] mt-1.5 font-light">
                    Core coursework in computer architecture, software engineering, and computational systems.
                  </p>
                </div>

                <div className="bg-[#FAF5EB] p-4 rounded-2xl border border-[#EAE2D3]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#1E232A]">
                      Buca İnci Özer Tırnaklı Science High School — High School Degree
                    </span>
                    <span className="text-xs font-bold text-[#235E63]">2018 – 2022</span>
                  </div>
                  <div className="text-xs text-[#737C8B] mt-0.5">
                    Location: İzmir, Turkey • Final Grade: <strong>95.73 / 100</strong>
                  </div>
                  <p className="text-xs text-[#4A505C] mt-1.5 font-light">
                    Graduated with high honors, demonstrating strong academic foundation in mathematics.
                  </p>
                </div>

                <div className="bg-[#FAF5EB] p-4 rounded-2xl border border-[#EAE2D3]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#1E232A]">
                      Game Academy (Oyun ve Uygulama Akademisi) — Game Developer Program
                    </span>
                    <span className="text-xs font-bold text-[#235E63]">2022 – 2023</span>
                  </div>
                  <p className="text-xs text-[#4A505C] mt-1.5 font-light">
                    Hands-on training building a strong foundation in modular code design and an intuition in all aspects of video game development.
                  </p>
                </div>

                <div className="bg-[#FAF5EB] p-4 rounded-2xl border border-[#EAE2D3]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-sm text-[#1E232A]">
                      Entrepreneurship Skills Pass (ESP) — JA Europe
                    </span>
                    <span className="text-xs font-bold text-[#235E63]">2022</span>
                  </div>
                  <p className="text-xs text-[#4A505C] mt-1.5 font-light">
                    International certification verifying enterprise management, product leadership, and team collaboration in national finals.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Honors & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#235E63] flex items-center gap-2 mb-3">
                <Award className="w-4 h-4" />
                <span>Honors &amp; Awards</span>
              </h2>

              <div className="bg-white p-4 rounded-2xl border border-[#EAE2D3]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-sm text-[#1E232A]">
                    3rd Place in Psychology Category — ICYSS 2021
                  </span>
                  <span className="text-xs font-medium text-[#737C8B]">Belgrade, Serbia • 2021</span>
                </div>
                <p className="text-xs text-[#4A505C] mt-1 font-light">
                  Awarded at the International Conference of Young Social Scientists for rigorous empirical research and statistical analysis.
                </p>
              </div>
            </div>

            {/* Section: Projects & Game Releases */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#235E63] flex items-center gap-2 mb-3">
                <Gamepad2 className="w-4 h-4" />
                <span>Featured Game Releases &amp; Prototypes</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectsData.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-2xl border border-[#EAE2D3] bg-[#FAF5EB]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#1E232A]">{p.title}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#235E63] border border-[#EAE2D3]">
                        {p.categoryLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4A505C] mt-1 line-clamp-2 font-light">
                      {p.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-white text-[#737C8B] border border-[#EAE2D3]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Technical & Language Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#235E63] flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4" />
                  <span>Technical Competencies</span>
                </h2>

                <div className="space-y-2 text-xs">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="p-3 rounded-2xl bg-white border border-[#EAE2D3]">
                      <span className="font-bold text-[#1E232A] block mb-0.5">
                        {cat.name}:
                      </span>
                      <span className="text-[#737C8B] text-[11px] font-light">
                        {cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#235E63] flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Language Proficiency</span>
                </h2>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE2D3] space-y-2.5 text-xs">
                  {personalInfo.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-[#EAE2D3]/60 pb-1.5 last:border-none last:pb-0">
                      <span className="font-bold text-[#1E232A]">{lang.language}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FAF5EB] text-[#235E63] text-[11px] font-bold">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar in Modal */}
          <div className="p-4 bg-[#FAF5EB] border-t border-[#EAE2D3] flex items-center justify-between print:hidden">
            <span className="text-xs text-[#737C8B]">
              Europass Curriculum Vitae • Görkem Uçar
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-[#EAE2D3] text-[#1E232A] text-xs font-bold rounded-full hover:bg-[#EAE2D3] cursor-pointer transition-colors shadow-xs"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
