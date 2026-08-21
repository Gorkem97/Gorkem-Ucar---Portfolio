import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Github, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  ArrowUpRight 
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
    { id: 'ai', label: 'AI & Antigravity' },
    { id: 'algorithms', label: 'Algorithms' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E9775] block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D3436] tracking-tight">
              Featured Works
            </h2>
            <p className="mt-3 text-base text-[#7A7A7A] font-light max-w-xl">
              Unity 3D games, experimental antigravity mechanics, VR, and algorithms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F3F0EC] rounded-full border border-[#E5E0D8] self-start sm:self-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#2D3436] shadow-2xs font-semibold'
                      : 'text-[#7A7A7A] hover:text-[#2D3436]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white rounded-3xl border border-[#E5E0D8] overflow-hidden shadow-2xs hover:border-[#8E9775] transition-all flex flex-col"
            >
              {/* Card Image */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative aspect-16/10 overflow-hidden bg-[#F3F0EC] cursor-pointer"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-md text-[#2D3436] border border-[#E5E0D8]/60 shadow-2xs">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-medium text-[#2D3436] hover:text-[#8E9775] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <span className="text-xs text-[#7A7A7A] font-light shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-[#555555] font-light leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#FCFAF7] text-[#7A7A7A] border border-[#E5E0D8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E5E0D8]/60 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-[#8E9775] hover:text-[#7A8363] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.links.itchio && (
                        <a
                          href={project.links.itchio}
                          target="_blank"
                          rel="noreferrer"
                          title="Play on Itch.io"
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-[#F3F0EC] hover:bg-[#8E9775] hover:text-white text-[#2D3436] transition-all"
                        >
                          <Gamepad2 className="w-3 h-3" />
                          <span>Itch.io</span>
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-[#F3F0EC] hover:bg-[#2D3436] hover:text-white text-[#2D3436] transition-all"
                        >
                          <Github className="w-3 h-3" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
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
