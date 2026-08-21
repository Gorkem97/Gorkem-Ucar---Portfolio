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
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#737C8B] font-light max-w-md mx-auto">
            Available for game development collaborations, internships, and discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Direct Details */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-5 rounded-3xl bg-white border border-[#EAE2D3] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#737C8B] block">Email</span>
                  <a
                    href={personalInfo.socialLinks.email}
                    className="text-sm font-bold text-[#1E232A] hover:text-[#E26D46] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2.5 text-[#737C8B] hover:text-[#1E232A] hover:bg-[#FAF5EB] rounded-2xl transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#235E63]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-5 rounded-3xl bg-white border border-[#EAE2D3] shadow-xs">
                <span className="text-xs font-semibold text-[#737C8B] block">Location</span>
                <span className="text-sm font-bold text-[#1E232A]">
                  {personalInfo.location}
                </span>
              </div>

              {/* Phone */}
              {personalInfo.phone && (
                <div className="p-5 rounded-3xl bg-white border border-[#EAE2D3] shadow-xs">
                  <span className="text-xs font-semibold text-[#737C8B] block">Phone</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-[#1E232A] hover:text-[#235E63] transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EAE2D3] text-xs font-bold text-[#1E232A] hover:bg-[#235E63] hover:text-white transition-all shadow-xs"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play on Itch.io</span>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#EAE2D3] text-xs font-bold text-[#1E232A] hover:bg-[#1E232A] hover:text-white transition-all shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repos</span>
              </a>
            </div>

          </div>

          {/* Message Form */}
          <div className="md:col-span-7">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center bg-white rounded-3xl border border-[#EAE2D3] shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#235E63] text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1E232A]">
                  Message Sent
                </h3>
                <p className="mt-2 text-sm text-[#737C8B] font-light max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. I will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2 text-xs font-bold rounded-full bg-[#FAF5EB] border border-[#EAE2D3] text-[#1E232A] hover:bg-white transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E232A] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#FAF5EB] border border-[#EAE2D3] rounded-2xl text-sm text-[#1E232A] placeholder-[#9E9E9E] focus:outline-none focus:border-[#235E63] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E232A] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-[#FAF5EB] border border-[#EAE2D3] rounded-2xl text-sm text-[#1E232A] placeholder-[#9E9E9E] focus:outline-none focus:border-[#235E63] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E232A] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry..."
                    className="w-full px-4 py-3 bg-[#FAF5EB] border border-[#EAE2D3] rounded-2xl text-sm text-[#1E232A] placeholder-[#9E9E9E] focus:outline-none focus:border-[#235E63] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E232A] hover:bg-[#235E63] text-white text-xs font-bold rounded-full shadow-xs transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectEmail}
                    className="text-xs font-semibold text-[#E26D46] hover:text-[#C55732] transition-colors cursor-pointer"
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
