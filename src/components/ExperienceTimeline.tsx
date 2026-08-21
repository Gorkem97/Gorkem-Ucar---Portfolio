import React from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E9775] block mb-2">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D3436] tracking-tight">
            Background & Journey
          </h2>
          <p className="mt-3 text-base text-[#7A7A7A] font-light max-w-xl">
            Key academic roots, certifications, and game development milestones.
          </p>
        </div>

        {/* Minimalist Timeline List */}
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E0D8] shadow-2xs hover:border-[#8E9775] transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="md:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-lg font-medium text-[#2D3436]">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FCFAF7] border border-[#E5E0D8] text-[#8E9775]">
                    {item.organization}
                  </span>
                </div>

                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 self-start md:self-auto">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#FCFAF7] text-[#7A7A7A] border border-[#E5E0D8]">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
