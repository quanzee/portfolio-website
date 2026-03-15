import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {

  const featuredProjects = projects.slice(0, 3); // Show only the first 3 projects on the homepage

  return (

    <section id="projects" className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
      <p className="text-lg text-gray-600 mb-12">A selection of my recent work. Each project represents a unique challenge and learning experience.</p>

      {/* The Grid Container */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      <Link to="/projects" className="block mx-auto w-fit text-m px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-12">
        See More
      </Link>
    </section>
  );
};

export default Projects;