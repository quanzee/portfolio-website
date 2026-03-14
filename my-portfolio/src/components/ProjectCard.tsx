import { ExternalLink} from 'lucide-react';
import github from '../assets/Github_Invertocat_Black_Clearspace.svg';

const ProjectCard = ({ project }) => {
    return (
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                  >
                    <img src={github} alt="GitHub" className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          )}

export default ProjectCard;