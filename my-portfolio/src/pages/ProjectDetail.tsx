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
      
      <div className="flex flex-col gap-5 mt-10 px-24 py-24 ">
        <div className="grid md:grid-cols-2 gap-2 bg-gray-100 p-6 rounded-lg">

          <div className="flex flex-col gap-4 mt-auto mb-auto">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          
        {/* Show the tags at the top of the page */}
        <div className="flex gap-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
          <p className="text-gray-600">{project.description}</p>

          <div className="flex gap-6">
          <a
            href={project.github}
            className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
          >
                    <Github size={16} />
                    Code
                  </a>

                  {project.live !== '#' && (
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-sm hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  )}
                </div>

                </div>
                  <img src={project.heroImage} alt={project.title} className="max-h-[500px] rounded-lg shadow-lg object-cover mx-auto" />
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
    <article className="prose lg:prose-xl mx-auto px-6">
      {/* This component turns # Heading into <h1>Heading</h1> */}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
    </div>
        </div>
    </div>
  );
};

export default ProjectDetail;