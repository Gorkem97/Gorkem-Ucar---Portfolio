import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Sparkles, Layers, Cpu, Users } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'game':
        return <Gamepad2 className="w-6 h-6 text-white" />;
      case 'ai':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'code':
      case 'architecture':
      default:
        return <Layers className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3 White Pill Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EAE2D3] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group"
              >
                {/* Circular Icon with specific bg color */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: service.bgColor }}
                >
                  {getIcon(service.iconType)}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E232A] group-hover:text-[#235E63] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#737C8B] mt-0.5">
                    {service.count}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: "What do I help?" Narrative & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E232A] tracking-tight leading-tight">
                What do I bring?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#4A505C] font-normal leading-relaxed">
                I help design and build scalable interactive applications and game systems with clean code. Combining hands-on Unity &amp; C# experience since 2021 with modern AI workflows, I construct modular architectures capable of expanding across diverse project domains.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#737C8B] font-light leading-relaxed">
                Beyond core systems programming, I possess practical 3D/2D design and lighting foundations (Blender, Affinity, Aseprite) that assist development and help shape project visuals. Experienced in multidisciplinary group projects and collaborative Git/GitHub workflows.
              </p>
            </motion.div>

            {/* Big Numeric Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 border-t border-[#EAE2D3] grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1E232A] tracking-tight font-heading block">
                  2021
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#737C8B] mt-1 block">
                  Unity &amp; C# Experience
                </span>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1E232A] tracking-tight font-heading block">
                  4
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#737C8B] mt-1 block">
                  Shipped Projects
                </span>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1E232A] tracking-tight font-heading block">
                  2024
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#737C8B] mt-1 block">
                  Politecnico di Torino
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
