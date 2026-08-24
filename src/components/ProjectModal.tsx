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
  Cpu,
  ChevronRight,
  Code
} from 'lucide-react';
import { Project } from '../types';
import { ContinuousVideoPlayer } from './ContinuousVideoPlayer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#1E232A]/70 backdrop-blur-xs">
        
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#FAF5EB] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EAE2D3] z-10 my-8"
        >
          {/* Header Video / Image Showcase */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1E232A]">
            {project.videos && project.videos.length > 0 ? (
              <ContinuousVideoPlayer
                videos={project.videos}
                fallbackImage={project.coverImage}
                autoPlay={true}
                muted={true}
                playsInline={true}
                className="w-full h-full"
                objectFit="cover"
              />
            ) : (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-90"
              />
            )}
            
            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E232A] via-[#1E232A]/30 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="modal-close-btn"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1E232A] flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Title in Cover */}
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#1F5A63] text-white text-xs font-bold shadow-xs">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                  {project.year}
                </span>
                {project.metrics && (
                  <span className="px-3 py-1 rounded-full bg-[#F5AF38] text-[#1E232A] text-xs font-bold shadow-xs">
                    {project.metrics.value}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
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
            <div className="flex flex-wrap items-center gap-3 p-3 bg-white rounded-2xl border border-[#EAE2D3]">
              {project.links.itchio && (
                <a
                  href={project.links.itchio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#235E63] hover:bg-[#1A4B50] text-white rounded-xl text-sm font-bold shadow-xs transition-colors"
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E232A] hover:bg-[#343D49] text-white rounded-xl text-sm font-bold shadow-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#EAE2D3] text-[#1E232A] hover:bg-[#FAF5EB] rounded-xl text-sm font-bold transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#737C8B] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5AF38]" />
                <span>Overview & Context</span>
              </h4>
              <p className="text-sm sm:text-base text-[#4A505C] leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>

            {/* Features & Key Systems */}
            {project.features && project.features.length > 0 && (
              <div className="p-5 bg-white rounded-2xl border border-[#EAE2D3]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E232A] mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#235E63]" />
                  <span>Key Features & Mechanics</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A505C]">
                      <div className="w-4 h-4 rounded-full bg-[#FAF5EB] border border-[#EAE2D3] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#235E63]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Highlights */}
            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <div className="p-5 bg-white rounded-2xl border border-[#EAE2D3]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E232A] mb-3 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-[#E26D46]" />
                  <span>Engineering & Architecture</span>
                </h4>
                <ul className="space-y-2">
                  {project.technicalHighlights.map((th, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A505C]">
                      <ChevronRight className="w-4 h-4 text-[#E26D46] shrink-0 mt-0.5" />
                      <span>{th}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#737C8B] mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#235E63]" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-[#EAE2D3] text-xs font-medium text-[#1E232A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
