import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Cpu, Sparkles, Globe } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'game-engine':
        return <Gamepad2 className="w-4 h-4 text-[#8E9775]" />;
      case 'programming-cs':
        return <Cpu className="w-4 h-4 text-[#8E9775]" />;
      case 'tools-art':
        return <Sparkles className="w-4 h-4 text-[#8E9775]" />;
      default:
        return <Globe className="w-4 h-4 text-[#8E9775]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E9775] block mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D3436] tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-base text-[#7A7A7A] font-light max-w-xl">
            Specialized toolset centered on Unity 3D, C#, C, and algorithmic logic.
          </p>
        </div>

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E0D8] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-xl bg-[#FCFAF7] border border-[#E5E0D8]">
                    {getIcon(category.id)}
                  </div>
                  <h3 className="text-lg font-medium text-[#2D3436]">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-full bg-[#FCFAF7] border border-[#E5E0D8] text-xs font-medium text-[#444444] flex items-center gap-1.5"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-[#8E9775] font-semibold">
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
