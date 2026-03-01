import { ExternalLink} from 'lucide-react';
import github from '../assets/Github_Invertocat_Black_Clearspace.svg';
import upNextLoomi from '../assets/upnext.png';

const projects = [
  {
    title: 'UpNext',
    description:
      'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
    image: upNextLoomi,
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Loomi',
    description:
      'A comprehensive component library with accessibility-first principles and extensive documentation.',
    image:
      'https://images.unsplash.com/photo-1771189255245-225dcea3f652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzcxODIyMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['TypeScript', 'React', 'Storybook', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Resident HealthCare System',
    description:
      'A collaborative task management tool with real-time updates, team workspaces, and productivity insights.',
    image:
      'https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MTc3NDY0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    github: '#',
    live: '#',
  },
];


const Projects = () => {
  return (

    <section id="projects" className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
      <p className="text-lg text-gray-600 mb-12">A selection of my recent work. Each project represents a unique challenge and learning experience.</p>

      {/* The Grid Container */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
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
          ))}
        </div>

      <button className="block mx-auto text-xs px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-12">
        See More
      </button>
    </section>
  );
};

export default Projects;