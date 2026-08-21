import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Gamepad2, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Award,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo, timelineData, projectsData, skillCategories } from '../data/portfolioData';

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
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-[#2D3436]/70 backdrop-blur-xs print:p-0 print:bg-white print:static">
        
        {/* Backdrop */}
        <div className="fixed inset-0 print:hidden" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E5E0D8] z-10 my-4 sm:my-8 print:shadow-none print:border-none print:rounded-none print:m-0"
        >
          {/* Top Bar for Modal Actions (Hidden in Print) */}
          <div className="p-4 sm:px-8 bg-[#F3F0EC] border-b border-[#E5E0D8] flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8E9775]" />
              <span className="font-heading font-medium text-sm sm:text-base text-[#2D3436]">
                Resume Preview (CV) - {personalInfo.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#8E9775] hover:bg-[#7A8363] text-white text-xs sm:text-sm font-medium rounded-full transition-colors shadow-2xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 hover:bg-[#E8E4DC] text-[#7A7A7A] hover:text-[#2D3436] rounded-full transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-[#2D3436] space-y-8 font-sans">
            
            {/* CV Header */}
            <div className="border-b-2 border-[#8E9775] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#E6E1D8] border border-[#E5E0D8] shrink-0 hidden sm:block">
                    <img
                      src={localStorage.getItem('gorkem_portfolio_avatar') || personalInfo.avatarUrl || '/profile.svg'}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-light font-heading text-[#2D3436] tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-base font-medium text-[#8E9775] mt-0.5">
                      {personalInfo.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:text-right text-xs text-[#7A7A7A] space-y-1">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#8E9775]" />
                    <span>{personalInfo.email}</span>
                  </div>
                  {personalInfo.phone && (
                    <div className="flex sm:justify-end items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#8E9775]" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  )}
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8E9775]" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-2 pt-1 font-medium text-[#2D3436]">
                    <span>GitHub: github.com/gorkemucar</span>
                    <span>•</span>
                    <span>Itch.io: gorkemucar.itch.io</span>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                {personalInfo.bio} Specialized in Unity 3D engine programming with C#, 360-degree arbitrary gravity traversal mechanics, VR interaction systems, and modular game architectures.
              </p>
            </div>

            {/* Section: Education & Diplomas */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Certifications</span>
              </h2>

              <div className="space-y-3">
                <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-[#E5E0D8]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-medium text-sm text-[#2D3436]">
                      Politecnico di Torino — Bachelor of Science in Computer Engineering
                    </span>
                    <span className="text-xs font-medium text-[#8E9775]">2023 – Present</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] mt-0.5">
                    Location: Torino, Italy • Academic Focus: <strong>Computer Systems & Software Engineering</strong>
                  </div>
                  <p className="text-xs text-[#555555] mt-1.5 font-light">
                    Studies in computer architecture, object-oriented software engineering, computational algorithms, and systems programming.
                  </p>
                </div>

                <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-[#E5E0D8]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-medium text-sm text-[#2D3436]">
                      Buca İnci Özer Tırnaklı Science High School — High School Degree
                    </span>
                    <span className="text-xs font-medium text-[#8E9775]">2018 – 2022</span>
                  </div>
                  <div className="text-xs text-[#7A7A7A] mt-0.5">
                    Location: İzmir, Turkey • Final Grade: <strong>95.73 / 100</strong>
                  </div>
                  <p className="text-xs text-[#555555] mt-1.5 font-light">
                    Rigorous scientific curriculum emphasizing advanced mathematics, physics, and analytical problem-solving.
                  </p>
                </div>

                <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-[#E5E0D8]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-medium text-sm text-[#2D3436]">
                      Game Academy (Oyun ve Uygulama Akademisi) — Hypercasual Game Developer
                    </span>
                    <span className="text-xs font-medium text-[#8E9775]">2022 – 2023</span>
                  </div>
                  <p className="text-xs text-[#555555] mt-1.5 font-light">
                    Comprehensive game production curriculum covering Unity engine architecture, C# scripting, mechanics prototyping, level pacing, and store deployment.
                  </p>
                </div>

                <div className="bg-[#FCFAF7] p-4 rounded-2xl border border-[#E5E0D8]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-medium text-sm text-[#2D3436]">
                      Entrepreneurship Skills Pass (ESP) — JA Europe
                    </span>
                    <span className="text-xs font-medium text-[#8E9775]">2021</span>
                  </div>
                  <p className="text-xs text-[#555555] mt-1.5 font-light">
                    International certification verifying theoretical and practical business acumen, enterprise management, and innovation leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Honors & Awards */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] flex items-center gap-2 mb-3">
                <Award className="w-4 h-4" />
                <span>Honors & Awards</span>
              </h2>

              <div className="bg-white p-4 rounded-2xl border border-[#E5E0D8]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-medium text-sm text-[#2D3436]">
                    3rd Place in Psychology Category — ICYSS 2021
                  </span>
                  <span className="text-xs font-medium text-[#7A7A7A]">Belgrade, Serbia • 2021</span>
                </div>
                <p className="text-xs text-[#555555] mt-1 font-light">
                  Awarded at the International Conference of Young Social Scientists for rigorous empirical research and statistical analysis.
                </p>
              </div>
            </div>

            {/* Section: Projects & Game Releases */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] flex items-center gap-2 mb-3">
                <Gamepad2 className="w-4 h-4" />
                <span>Featured Game Releases & Prototypes</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectsData.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-2xl border border-[#E5E0D8] bg-[#FCFAF7]">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-xs text-[#2D3436]">{p.title}</span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F3F0EC] text-[#8E9775] border border-[#E5E0D8]">
                        {p.categoryLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#555555] mt-1 line-clamp-2 font-light">
                      {p.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-white text-[#7A7A7A] border border-[#E5E0D8]">
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
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4" />
                  <span>Technical Competencies</span>
                </h2>

                <div className="space-y-2 text-xs">
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="p-3 rounded-2xl bg-white border border-[#E5E0D8]">
                      <span className="font-medium text-[#2D3436] block mb-0.5">
                        {cat.name}:
                      </span>
                      <span className="text-[#7A7A7A] text-[11px] font-light">
                        {cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Language Proficiency</span>
                </h2>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E0D8] space-y-2.5 text-xs">
                  {personalInfo.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-[#E5E0D8]/60 pb-1.5 last:border-none last:pb-0">
                      <span className="font-medium text-[#2D3436]">{lang.language}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#F3F0EC] text-[#8E9775] text-[11px] font-semibold">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar in Modal */}
          <div className="p-4 bg-[#F3F0EC] border-t border-[#E5E0D8] flex items-center justify-between print:hidden">
            <span className="text-xs text-[#7A7A7A]">
              Europass Curriculum Vitae • Görkem Uçar
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-white border border-[#E5E0D8] text-[#2D3436] text-xs font-medium rounded-full hover:bg-[#E8E4DC] cursor-pointer transition-colors shadow-2xs"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
