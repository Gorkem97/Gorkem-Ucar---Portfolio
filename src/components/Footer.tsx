import React from 'react';
import { ArrowUp, Github, Gamepad2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E0D8] py-12 bg-[#FCFAF7]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="text-center sm:text-left">
          <span className="font-medium text-sm text-[#2D3436]">
            Görkem Uçar
          </span>
          <p className="text-xs text-[#7A7A7A] mt-0.5 font-light">
            © {new Date().getFullYear()} • Unity & C# Game Developer
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-5 text-xs font-medium text-[#7A7A7A]">
          <a href="#projects" className="hover:text-[#2D3436] transition-colors">
            Works
          </a>
          <a href="#skills" className="hover:text-[#2D3436] transition-colors">
            Tech Stack
          </a>
          <a href="#experience" className="hover:text-[#2D3436] transition-colors">
            Background
          </a>
          <button
            onClick={onOpenCV}
            className="text-[#8E9775] hover:text-[#7A8363] transition-colors cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* Actions & Scroll to top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.itchio}
            target="_blank"
            rel="noreferrer"
            title="Itch.io"
            className="p-2 rounded-full bg-white border border-[#E5E0D8] text-[#555555] hover:text-[#8E9775] transition-colors shadow-2xs"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="p-2 rounded-full bg-white border border-[#E5E0D8] text-[#555555] hover:text-[#2D3436] transition-colors shadow-2xs"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={scrollToTop}
            title="Back to top"
            className="p-2 rounded-full bg-white border border-[#E5E0D8] text-[#555555] hover:text-[#2D3436] transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
