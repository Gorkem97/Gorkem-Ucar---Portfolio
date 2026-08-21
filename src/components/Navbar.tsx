import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Send, Github, Gamepad2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projects', label: 'Works', href: '#projects' },
    { id: 'skills', label: 'Tech Stack', href: '#skills' },
    { id: 'experience', label: 'Background', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FCFAF7]/90 backdrop-blur-md shadow-2xs border-b border-[#E5E0D8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <span className="font-heading font-medium text-lg tracking-tight text-[#2D3436] group-hover:text-[#8E9775] transition-colors">
              Görkem Uçar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#2D3436] bg-white border border-[#E5E0D8] shadow-2xs'
                      : 'text-[#7A7A7A] hover:text-[#2D3436]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              id="navbar-cv-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#2D3436] bg-white hover:bg-[#F3F0EC] border border-[#E5E0D8] rounded-full transition-all shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#8E9775]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              id="navbar-contact-cta"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#8E9775] hover:bg-[#7A8363] rounded-full transition-all shadow-2xs cursor-pointer"
            >
              <span>Get in Touch</span>
              <Send className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              id="mobile-quick-cv-btn"
              className="p-1.5 text-[#2D3436] bg-white border border-[#E5E0D8] rounded-full text-xs font-medium flex items-center gap-1 px-2.5 shadow-2xs"
            >
              <FileText className="w-3 h-3 text-[#8E9775]" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Menu"
              className="p-2 rounded-full text-[#2D3436] hover:bg-[#F3F0EC] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FCFAF7] border-b border-[#E5E0D8] px-6 pt-2 pb-6 shadow-md overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#8E9775] text-white font-semibold'
                      : 'text-[#333333] hover:bg-[#F3F0EC]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-[#E5E0D8] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-[#E5E0D8] text-[#2D3436] text-sm font-medium shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-[#8E9775]" />
                  <span>View Resume</span>
                </button>
                
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#8E9775] text-white text-sm font-semibold shadow-2xs"
                >
                  <span>Get in Touch</span>
                  <Send className="w-3.5 h-3.5" />
                </a>

                {/* Social links row in mobile */}
                <div className="flex items-center justify-center gap-4 pt-2 text-[#7A7A7A]">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-[#E5E0D8] hover:text-[#2D3436]"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.itchio}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white border border-[#E5E0D8] hover:text-[#8E9775]"
                  >
                    <Gamepad2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
