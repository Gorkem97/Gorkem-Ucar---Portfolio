import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Github, 
  ArrowUpRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'game', label: 'Games & Jams' },
    { id: 'vr', label: 'VR' },
    { id: 'ai', label: 'AI & Workflows' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  // Assign distinct themed banner colors for cards like in the reference image
  const cardThemes = [
    { headerBg: 'bg-[#F5AF38]', badgeText: 'text-[#1E232A]', label: 'AI Workflow & Arch' },
    { headerBg: 'bg-[#1F5A63]', badgeText: 'text-white', label: 'Unity 3D Game' },
    { headerBg: 'bg-[#2D3E50]', badgeText: 'text-white', label: 'VR / 6-DoF' },
    { headerBg: 'bg-[#E26D46]', badgeText: 'text-white', label: 'Game Jam Release' },
  ];

  return (
    <section id="works" className="py-20 sm:py-28 bg-[#FAF5EB] border-t border-[#EAE2D3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header with Title & Explore Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E232A] tracking-tight">
              My Latest Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#737C8B] font-light">
              Unity 3D games, AI workflow integration, and VR experiences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-full border border-[#EAE2D3]">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#1E232A] text-white shadow-xs'
                        : 'text-[#737C8B] hover:text-[#1E232A]'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <a
              href="https://github.com/Gorkem97?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-[#E26D46] hover:text-[#C55732] transition-colors"
            >
              <span>Explore All Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl border border-[#EAE2D3] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Colored Themed Header area matching the reference image cards */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className={`p-6 ${theme.headerBg} relative cursor-pointer overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-base sm:text-lg font-bold ${theme.badgeText}`}>
                        {project.title}
                      </span>
                      <p className={`text-xs ${theme.badgeText} opacity-80 mt-0.5`}>
                        {project.categoryLabel}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Screenshot Mockup Container */}
                  <div className="mt-5 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 aspect-16/10 bg-[#EAE2D3]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#4A505C] font-normal leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FAF5EB] text-[#4A505C] border border-[#EAE2D3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-4 border-t border-[#EAE2D3] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-[#1E232A] group-hover:text-[#235E63] inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#E26D46]" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.links.itchio && (
                        <a
                          href={project.links.itchio}
                          target="_blank"
                          rel="noreferrer"
                          title="Play on Itch.io"
                          className="p-2 rounded-full bg-[#FAF5EB] hover:bg-[#235E63] hover:text-white text-[#1E232A] transition-all"
                        >
                          <Gamepad2 className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          title="GitHub Code"
                          className="p-2 rounded-full bg-[#FAF5EB] hover:bg-[#1E232A] hover:text-white text-[#1E232A] transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
