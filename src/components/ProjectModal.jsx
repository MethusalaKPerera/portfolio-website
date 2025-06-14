import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import MediaGallery from './MediaGallery';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-800 z-10 flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
                
        <div className="p-8">
          {/* Media Gallery */}
          <MediaGallery gallery={project.gallery} />
                    
          {/* Project Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </div>
                    
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
                        
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-purple-500/30 text-purple-200 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
                    
          {/* Action Buttons */}
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;