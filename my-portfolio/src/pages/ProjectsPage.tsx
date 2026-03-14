import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage = () => {
    return (
      <section className="container mx-auto px-4 py-16 mt-20">
        <Navbar />
        <h1 className="text-4xl font-bold mb-8">All Projects</h1>
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