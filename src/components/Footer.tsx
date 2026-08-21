import React from 'react';
import { ArrowUp, Github, Gamepad2, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF5EB] border-t border-[#EAE2D3] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main CTA Section Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#EAE2D3]">
          
          {/* Left Column: Huge Headline & "saying hi" link */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E232A] tracking-tight leading-tight max-w-2xl">
              Let's make something amazing together.
            </h2>

            <div className="pt-2">
              <span className="text-xl sm:text-2xl text-[#1E232A] font-bold">
                Start by{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#E26D46] hover:text-[#C55732] underline decoration-2 underline-offset-8 transition-colors cursor-pointer"
                >
                  saying hi
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: Information & Nav Menu */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E232A] block mb-2">
                Information
              </span>
              <p className="text-sm text-[#737C8B] font-medium leading-relaxed">
                Politecnico di Torino<br />
                Torino, Piedmont, Italy
              </p>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-[#235E63] hover:underline mt-2 inline-block"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-2.5 pt-2 text-xs font-bold uppercase tracking-wider text-[#4A505C]">
              <a href="#services" className="hover:text-[#1E232A] transition-colors">
                ( SERVICES )
              </a>
              <a href="#works" className="hover:text-[#1E232A] transition-colors">
                WORKS
              </a>
              <a href="#experience" className="hover:text-[#1E232A] transition-colors">
                EXPERIENCE
              </a>
              <button
                onClick={onOpenCV}
                className="text-left text-[#E26D46] hover:text-[#C55732] transition-colors cursor-pointer"
              >
                PRINTABLE RESUME
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Signature & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="font-handwriting text-2xl font-bold text-[#1E232A]">
              Görkem Uçar
            </span>
            <span className="text-xs text-[#737C8B]">
              • © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.itchio}
              target="_blank"
              rel="noreferrer"
              title="Itch.io"
              className="w-9 h-9 rounded-full bg-white border border-[#EAE2D3] text-[#1E232A] hover:bg-[#235E63] hover:text-white hover:border-[#235E63] flex items-center justify-center transition-all shadow-xs"
            >
              <Gamepad2 className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-9 h-9 rounded-full bg-white border border-[#EAE2D3] text-[#1E232A] hover:bg-[#1E232A] hover:text-white hover:border-[#1E232A] flex items-center justify-center transition-all shadow-xs"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-full bg-white border border-[#EAE2D3] text-[#1E232A] hover:bg-[#EAE2D3] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
