import React from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getDotColor = (accent: string) => {
    switch (accent) {
      case 'teal':
        return '#1F5A63';
      case 'orange':
        return '#E26D46';
      case 'amber':
        return '#F5AF38';
      case 'blue':
      default:
        return '#1F5A63';
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#737C8B] font-light max-w-md mx-auto">
            Academic foundations, game development experience, and technical milestones.
          </p>
        </div>

        {/* 2-Column Experience Rows */}
        <div className="space-y-10 sm:space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pb-10 border-b border-[#EAE2D3]/60 last:border-0"
            >
              {/* Left Column: Organization & Date */}
              <div className="md:col-span-4">
                <h3 className="text-base sm:text-lg font-bold text-[#1E232A]">
                  {item.organization}
                </h3>
                <span className="text-xs sm:text-sm text-[#737C8B] font-medium block mt-0.5">
                  {item.period}
                </span>
                <span className="text-[11px] font-semibold text-[#235E63] mt-1 inline-block">
                  {item.location}
                </span>
              </div>

              {/* Right Column: Colored Bullet Dot + Role + Description */}
              <div className="md:col-span-8 flex items-start gap-4">
                {/* Dot */}
                <div
                  className="w-3.5 h-3.5 rounded-full shrink-0 mt-1 shadow-xs"
                  style={{ backgroundColor: getDotColor(item.accentColor) }}
                />

                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-[#1E232A]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#4A505C] font-normal leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white border border-[#EAE2D3] text-[#4A505C]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
