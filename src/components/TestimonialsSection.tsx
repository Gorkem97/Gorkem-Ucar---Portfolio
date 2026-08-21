import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Trophy, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { recognitionsData } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % recognitionsData.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + recognitionsData.length) % recognitionsData.length);
  };

  const getIcon = (tag: string) => {
    if (tag.includes('Award')) return <Trophy className="w-4 h-4 text-[#F5AF38]" />;
    if (tag.includes('Academic')) return <GraduationCap className="w-4 h-4 text-[#1F5A63]" />;
    return <Award className="w-4 h-4 text-[#E26D46]" />;
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
            Honors &amp; Recognition
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#737C8B] font-light max-w-lg mx-auto">
            Academic achievements, international jury honors, and certified credentials.
          </p>
        </div>

        {/* 3 Testimonial / Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recognitionsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Top Tag & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#EAE2D3] text-xs font-semibold text-[#1E232A]">
                    {getIcon(item.tag)}
                    <span>{item.tag}</span>
                  </div>

                  <Quote className="w-6 h-6 text-[#EAE2D3] group-hover:text-[#F5AF38] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#4A505C] font-normal leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Entity details */}
              <div className="pt-5 border-t border-[#EAE2D3] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#1F5A63] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E232A]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-medium text-[#737C8B]">
                    {item.role} • {item.year}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Minimalist Navigation indicator */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-[#235E63]" />
          <div className="w-2 h-2 rounded-full bg-[#EAE2D3]" />
          <div className="w-2 h-2 rounded-full bg-[#EAE2D3]" />
        </div>

      </div>
    </section>
  );
};
