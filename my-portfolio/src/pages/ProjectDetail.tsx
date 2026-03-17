import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams(); // a hook to read the ID from the URL and then find the matching project in project.ts
  
  // Find the specific project in your array
  const project = projects.find((p) => p.id === parseInt(projectId));
  const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if (project?.contentPath) {
        fetch(project.contentPath)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
        }
    }, [project]);

  // If the user types a fake URL, show a basic 404
  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="flex flex-col gap-5 mt-30 px-6">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
          >
                    <Github size={16} />
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
                <img src= {project.heroImage} alt={project.title} className="w-full rounded-lg shadow-lg" />
              </div>

      <article className="prose lg:prose-xl mx-auto px-6">
      {/* This component turns # Heading into <h1>Heading</h1> */}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
    </div>
  );
};

export default ProjectDetail;