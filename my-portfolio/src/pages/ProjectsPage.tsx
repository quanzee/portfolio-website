import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage = () => {
    return (
      <section className="container mx-auto px-6 py-24"> 
        <Navbar />
      <h2 className="text-4xl md:text-5xl mb-4">All Projects</h2>
        <p className="text-lg text-gray-600 mb-12">A full list of projects from hackathons, university, and personal endeavors. Click on a project to learn more.</p>
        {/* The Grid Container */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    );
};

export default ProjectsPage;