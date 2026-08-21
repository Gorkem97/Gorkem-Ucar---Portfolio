import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Cpu, Sparkles, Globe } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'game-engine':
        return <Gamepad2 className="w-5 h-5 text-[#1F5A63]" />;
      case 'programming-cs':
        return <Cpu className="w-5 h-5 text-[#F5AF38]" />;
      case 'tools-art':
        return <Sparkles className="w-5 h-5 text-[#E26D46]" />;
      default:
        return <Globe className="w-5 h-5 text-[#235E63]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
            Technical Stack &amp; Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#737C8B] font-light max-w-xl mx-auto">
            Core capabilities spanning Unity &amp; C# since 2021, scalable architecture, AI workflow integration, practical 2D/3D &amp; lighting design, and GitHub group collaboration.
          </p>
        </div>

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF5EB] border border-[#EAE2D3] flex items-center justify-center">
                    {getIcon(category.id)}
                  </div>
                  <h3 className="text-base font-bold text-[#1E232A]">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#EAE2D3] text-xs font-medium text-[#1E232A] flex items-center gap-1.5"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-[#235E63] font-bold">
                        • {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
