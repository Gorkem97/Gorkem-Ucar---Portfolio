import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, FileText, ArrowRight } from 'lucide-react';
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

      const sections = ['home', 'services', 'works', 'experience', 'testimonials', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
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
    { id: 'services', label: 'SERVICES', href: '#services', isPill: true },
    { id: 'works', label: 'WORKS', href: '#works' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
    { id: 'skills', label: 'TECH STACK', href: '#skills' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#EAE2D3] shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-22 sm:h-24">
          
          {/* Script Signature Logo */}
          <a
            href="#home"
            id="brand-logo"
            className="group flex items-center focus:outline-none"
          >
            <span className="font-handwriting text-3xl sm:text-4xl font-bold text-[#1E232A] group-hover:text-[#235E63] transition-colors tracking-wide">
              Görkem
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              
              if (link.isPill) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    id={`nav-link-${link.id}`}
                    className={`px-4 py-1.5 rounded-full border text-xs tracking-wider font-semibold transition-all duration-200 ${
                      isActive
                        ? 'border-[#235E63] text-[#235E63] bg-[#235E63]/5'
                        : 'border-[#1E232A]/20 text-[#1E232A] hover:border-[#1E232A]'
                    }`}
                  >
                    ( {link.label} )
                  </a>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`text-xs tracking-wider font-semibold uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[#235E63]'
                      : 'text-[#4A505C] hover:text-[#1E232A]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions: Phone + Resume */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              id="navbar-phone-btn"
              className="flex items-center gap-2.5 text-xs font-semibold text-[#1E232A] hover:text-[#235E63] transition-colors group"
            >
              <span>{personalInfo.phone}</span>
              <div className="w-8 h-8 rounded-full bg-white border border-[#EAE2D3] group-hover:border-[#235E63] group-hover:bg-[#235E63] group-hover:text-white flex items-center justify-center transition-all text-[#235E63] shadow-xs">
                <Phone className="w-3.5 h-3.5" />
              </div>
            </a>

            <button
              onClick={onOpenCV}
              id="navbar-cv-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E232A] hover:bg-[#235E63] rounded-full transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#F5AF38]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenCV}
              id="mobile-quick-cv-btn"
              className="px-3 py-1.5 text-[#1E232A] bg-white border border-[#EAE2D3] rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <FileText className="w-3 h-3 text-[#235E63]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Menu"
              className="p-2 rounded-full text-[#1E232A] hover:bg-[#EAE2D3]/60 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-[#FAF5EB] border-b border-[#EAE2D3] px-6 pt-2 pb-6 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#235E63] text-white'
                      : 'text-[#1E232A] hover:bg-[#EAE2D3]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-[#EAE2D3] flex flex-col gap-3">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-[#EAE2D3] text-[#1E232A] text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#235E63]" />
                  <span>{personalInfo.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1E232A] text-white text-xs font-semibold"
                >
                  <FileText className="w-4 h-4 text-[#F5AF38]" />
                  <span>View Printable Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
