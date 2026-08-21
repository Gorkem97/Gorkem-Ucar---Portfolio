import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Gamepad2, 
  Mail, 
  ArrowRight, 
  FileText, 
  MapPin,
  GraduationCap,
  Upload,
  Check,
  Camera
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [copied, setCopied] = useState(false);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('gorkem_portfolio_avatar');
    if (saved) {
      setCustomAvatar(saved);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomAvatar(result);
        localStorage.setItem('gorkem_portfolio_avatar', result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Image priority: Custom uploaded photo -> public profile.jpg -> profile.svg
  const activeAvatar = customAvatar || '/profile.jpg';

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            
            {/* University & Location Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-[#7A7A7A] mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E0D8] text-[#2D3436] shadow-2xs">
                <GraduationCap className="w-4 h-4 text-[#8E9775]" />
                <span>Computer Engineering @ <strong>Politecnico di Torino</strong></span>
              </div>

              <span className="text-[#B5B0A8] hidden sm:inline">•</span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-[#E5E0D8] text-[#555555]">
                <MapPin className="w-3.5 h-3.5 text-[#8E9775]" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Display Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#2D3436] tracking-tight leading-[1.08]">
                Görkem Uçar
              </h1>
              <p className="mt-5 text-xl sm:text-2xl md:text-2.5xl text-[#555555] font-light leading-snug">
                Unity & C# Game Developer & Computer Engineering Student at Politecnico di Torino.
              </p>
            </motion.div>

            {/* Concise 1-sentence bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-[#7A7A7A] font-light max-w-xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#2D3436] hover:bg-[#3D4446] rounded-full transition-all duration-200 shadow-2xs group cursor-pointer"
              >
                <span>View Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#8E9775]" />
              </a>

              <button
                onClick={onOpenCV}
                id="hero-view-cv-btn"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#2D3436] bg-white hover:bg-[#F3F0EC] border border-[#E5E0D8] rounded-full transition-all duration-200 shadow-2xs hover:border-[#8E9775] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#8E9775]" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#555555] hover:text-[#2D3436] hover:bg-white rounded-full border border-transparent hover:border-[#E5E0D8] transition-all cursor-pointer"
              >
                <span>Contact</span>
              </a>

              <div className="h-5 w-[1px] bg-[#E5E0D8] mx-1 hidden sm:block" />

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socialLinks.itchio}
                  target="_blank"
                  rel="noreferrer"
                  title="Itch.io Games"
                  className="p-2.5 bg-white hover:bg-[#8E9775] hover:text-white text-[#555555] border border-[#E5E0D8] rounded-full transition-all shadow-2xs"
                >
                  <Gamepad2 className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Repositories"
                  className="p-2.5 bg-white hover:bg-[#2D3436] hover:text-white text-[#555555] border border-[#E5E0D8] rounded-full transition-all shadow-2xs"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#F3F0EC] text-[#555555] border border-[#E5E0D8] rounded-full text-xs font-medium transition-all shadow-2xs cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#8E9775]" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-[#8E9775]" />
                  )}
                  <span>{copied ? 'Copied!' : personalInfo.email}</span>
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Seamless Framed Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[320px] sm:max-w-[360px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              
              {/* Outer Decorative Frame Container */}
              <div className="p-3 sm:p-3.5 rounded-[32px] sm:rounded-[38px] bg-white border border-[#E5E0D8] shadow-sm relative group transition-all duration-300 hover:shadow-md hover:border-[#D1CABF]">
                
                {/* Inner Image Wrapper with Matched Border Radius */}
                <div className="relative aspect-square w-full rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#E6E1D8]">
                  <img
                    src={activeAvatar}
                    onError={(e) => {
                      // Fallback to SVG if local image file not yet present
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/profile.svg')) {
                        target.src = '/profile.svg';
                      }
                    }}
                    alt="Görkem Uçar"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Vignette & Lighting Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                  {/* Interactive Upload Overlay */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload or change photo"
                    className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 text-white transition-opacity duration-200 cursor-pointer ${
                      isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-2.5 rounded-full bg-white/20 border border-white/40">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium bg-black/50 px-3 py-1 rounded-full border border-white/20">
                      {customAvatar ? 'Change Photo' : 'Upload / Drop Photo'}
                    </span>
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />

                  {/* Clean Bottom Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E9775]" />
                      <span>Politecnico di Torino</span>
                    </div>

                    <div className="px-2.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#2D3436] text-[10px] font-medium border border-white/60 shadow-2xs">
                      Unity 3D / C#
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
