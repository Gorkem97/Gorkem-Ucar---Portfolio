import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Gamepad2, 
  Check, 
  Layers, 
  Sparkles, 
  Calendar, 
  Cpu,
  ChevronRight,
  Code
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#2D3436]/60 backdrop-blur-xs">
        
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#FCFAF7] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E5E0D8] z-10 my-8"
        >
          {/* Header Image / Gallery preview */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#2D3436]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436] via-[#2D3436]/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="modal-close-btn"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#2D3436] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Title in Cover */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#8E9775] text-white text-xs font-semibold shadow-2xs">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  {project.year}
                </span>
                {project.metrics && (
                  <span className="px-3 py-1 rounded-full bg-[#2D3436] text-white text-xs font-semibold shadow-2xs">
                    {project.metrics.value}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium font-heading text-white">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 font-sans mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            
            {/* Action Links Bar */}
            <div className="flex flex-wrap items-center gap-3 p-3 bg-white rounded-2xl border border-[#E5E0D8]">
              {project.links.itchio && (
                <a
                  href={project.links.itchio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#8E9775] hover:bg-[#7A8363] text-white rounded-xl text-sm font-semibold shadow-2xs transition-colors"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Play on Itch.io</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D3436] hover:bg-[#3D4446] text-white rounded-xl text-sm font-semibold shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code (GitHub)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#8E9775] hover:bg-[#7A8363] text-white rounded-xl text-sm font-semibold shadow-2xs transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>

            {/* Long Narrative Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8E9775]" />
                <span>About & Project Overview</span>
              </h4>
              <p className="text-base text-[#555555] leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            {/* Screenshots Gallery if available */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E9775] mb-3">
                  Screenshots & Gallery
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.screenshots.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden aspect-video bg-[#F3F0EC] border border-[#E5E0D8] shadow-2xs">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-[#E5E0D8]">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#2D3436] mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8E9775]" />
                  <span>Key Mechanics & Features</span>
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-[#555555]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E9775] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Highlights / Engineering Details */}
            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <div className="bg-[#F3F0EC] p-5 rounded-2xl border border-[#E5E0D8]">
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#2D3436] mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#8E9775]" />
                  <span>Engineering & Optimization Notes</span>
                </h4>
                <ul className="space-y-2">
                  {project.technicalHighlights.map((th, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-sm text-[#333333] font-medium">
                      <ChevronRight className="w-4 h-4 shrink-0 mt-0.5 text-[#8E9775]" />
                      <span>{th}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A7A7A] mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#8E9775]" />
                <span>Technologies & Libraries</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white text-[#2D3436] border border-[#E5E0D8] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-white border-t border-[#E5E0D8] flex items-center justify-between">
            <span className="text-xs text-[#7A7A7A]">
              Computer Engineering & Game Development Portfolio
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#F3F0EC] hover:bg-[#E8E4DC] text-[#2D3436] text-sm font-medium transition-colors cursor-pointer border border-[#E5E0D8]"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
