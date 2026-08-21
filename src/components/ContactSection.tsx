import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Github, 
  Gamepad2, 
  Copy, 
  Check, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`[Inquiry] ${formData.name || 'Portfolio Contact'}`);
    const body = encodeURIComponent(`${formData.message || 'Hello Görkem,'}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E9775] block mb-2">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D3436] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-base text-[#7A7A7A] font-light max-w-xl">
            Available for game development collaborations, projects, and discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Direct Details */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A7A7A] block">Email</span>
                  <a
                    href={personalInfo.socialLinks.email}
                    className="text-sm font-medium text-[#2D3436] hover:text-[#8E9775] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 text-[#7A7A7A] hover:text-[#2D3436] hover:bg-[#FCFAF7] rounded-xl transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#8E9775]" /> : <Copy className="w-4 h-4 text-[#7A7A7A]" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-2xs">
                <span className="text-xs text-[#7A7A7A] block">Location</span>
                <span className="text-sm font-medium text-[#2D3436]">
                  {personalInfo.location}
                </span>
              </div>

              {/* Phone */}
              {personalInfo.phone && (
                <div className="p-4 rounded-2xl bg-white border border-[#E5E0D8] shadow-2xs">
                  <span className="text-xs text-[#7A7A7A] block">Phone</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-medium text-[#2D3436] hover:text-[#8E9775] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.itchio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-xs font-medium text-[#2D3436] hover:bg-[#8E9775] hover:text-white transition-all shadow-2xs"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Itch.io</span>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E0D8] text-xs font-medium text-[#2D3436] hover:bg-[#2D3436] hover:text-white transition-all shadow-2xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Message Form */}
          <div className="md:col-span-7">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center bg-white rounded-3xl border border-[#E5E0D8] shadow-2xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#8E9775] text-white flex items-center justify-center mx-auto mb-3 shadow-2xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#2D3436]">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-[#7A7A7A] font-light max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. I will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2 text-xs font-medium rounded-full bg-[#FCFAF7] border border-[#E5E0D8] text-[#2D3436] hover:bg-white transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 rounded-3xl bg-white border border-[#E5E0D8] shadow-2xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#7A7A7A] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 bg-[#FCFAF7] border border-[#E5E0D8] rounded-xl text-sm text-[#2D3436] placeholder-[#B5B0A8] focus:outline-none focus:border-[#8E9775] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#7A7A7A] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 bg-[#FCFAF7] border border-[#E5E0D8] rounded-xl text-sm text-[#2D3436] placeholder-[#B5B0A8] focus:outline-none focus:border-[#8E9775] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#7A7A7A] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or project inquiry..."
                    className="w-full px-3.5 py-2.5 bg-[#FCFAF7] border border-[#E5E0D8] rounded-xl text-sm text-[#2D3436] placeholder-[#B5B0A8] focus:outline-none focus:border-[#8E9775] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8E9775] hover:bg-[#7A8363] text-white text-xs font-medium rounded-full shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmail}
                    className="text-xs text-[#7A7A7A] hover:text-[#2D3436] transition-colors cursor-pointer"
                  >
                    Open Mail App
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
