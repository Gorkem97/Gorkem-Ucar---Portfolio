import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-between h-full py-4">
            
            {/* Title & Email */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E232A] tracking-tight leading-[1.08]">
                  Hey There,<br />
                  <span className="text-[#1E232A]">I'm Görkem</span>
                </h1>
              </motion.div>

              {/* Terracotta/Orange underlined email link */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 sm:mt-10"
              >
                <div className="inline-flex flex-col items-start group">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    onClick={handleCopyEmail}
                    title="Click to copy email address"
                    className="text-sm sm:text-base font-semibold text-[#E26D46] hover:text-[#C55732] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{personalInfo.email}</span>
                    {copied && (
                      <span className="text-xs bg-[#1E232A] text-white px-2 py-0.5 rounded-full font-normal flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#F5AF38]" /> Copied!
                      </span>
                    )}
                  </a>
                  {/* Decorative Hand-drawn style underline */}
                  <div className="w-full h-0.5 bg-[#E26D46] mt-0.5 rounded-full" />
                </div>
              </motion.div>
            </div>

            {/* Big Stat Callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 sm:mt-16 pt-6 flex items-baseline gap-3"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1E232A] tracking-tight font-heading leading-none">
                10+
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E232A]">
                  PROJECTS &amp; GAMES
                </span>
                <span className="text-[11px] font-medium text-[#737C8B]">
                  Unity &amp; C# • Since 2021
                </span>
              </div>
            </motion.div>

          </div>

          {/* ================= CENTER VISUAL (PORTRAIT + TEAL SPLASH) ================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex items-center justify-center"
            >
              
              {/* Background Teal Artistic Paint Splash (SVG) */}
              <div className="absolute -inset-6 sm:-inset-10 z-0 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full text-[#1F5A63] opacity-95 transition-transform duration-700 hover:scale-105"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M420,120 C460,180 470,260 440,330 C410,400 340,460 260,470 C180,480 110,440 70,380 C30,320 20,240 50,170 C80,100 150,40 230,30 C310,20 380,60 420,120 Z" />
                  {/* Paint splatter accents */}
                  <circle cx="90" cy="110" r="14" fill="#1F5A63" />
                  <circle cx="65" cy="140" r="7" fill="#1F5A63" />
                  <circle cx="440" cy="90" r="12" fill="#1F5A63" />
                  <circle cx="465" cy="120" r="6" fill="#1F5A63" />
                  <circle cx="410" cy="420" r="16" fill="#1F5A63" />
                  <circle cx="120" cy="440" r="10" fill="#1F5A63" />
                  <path d="M380,40 Q430,20 450,60 Q420,80 380,40 Z" fill="#1F5A63" />
                  <path d="M50,390 Q30,440 70,450 Q80,410 50,390 Z" fill="#1F5A63" />
                </svg>
              </div>

              {/* Main Portrait Frame */}
              <div className="relative z-10 w-[270px] h-[340px] sm:w-[320px] sm:h-[390px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#E6DFD3] group">
                <img
                  src="/profile.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/profile.svg')) {
                      target.src = '/profile.svg';
                    }
                  }}
                  alt="Görkem Uçar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E232A]/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Small floating tag at bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-[#1E232A]/80 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#F5AF38] animate-pulse" />
                    <span>Polito 2024</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white/90 text-[#1E232A] text-[10px] font-bold shadow-xs">
                    Since 2021
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-between h-full py-4 space-y-10 lg:space-y-0">
            
            {/* Tagline Statement */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pt-2"
            >
              <p className="text-base sm:text-lg text-[#1E232A] font-normal leading-snug">
                I make scalable and cooperative systems for games, enhancing productivity with AI-integrated workflows.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[#737C8B] font-light leading-relaxed">
                Computer Engineering student at Politecnico di Torino with hands-on Unity &amp; C# experience since 2021, focused on modular architecture and cooperative team workflows on GitHub.
              </p>
            </motion.div>

            {/* Official Seal / Stamp Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3.5 pt-6"
            >
              {/* Circular Emblem with polito.jpeg */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-[#1E232A] overflow-hidden p-0.5 shrink-0 relative shadow-sm bg-white">
                <img
                  src="/polito.jpeg"
                  alt="Politecnico di Torino"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Seal Label */}
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E232A] leading-tight">
                  POLITECNICO DI TORINO
                </span>
                <span className="text-[10px] font-semibold text-[#235E63] uppercase tracking-wide mt-0.5">
                  COMPUTER ENGINEERING
                </span>
                <span className="text-[9px] font-medium text-[#737C8B] uppercase tracking-wider">
                  UNITY GAME DEVELOPER
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
