const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
      <p className="text-lg text-gray-600 mb-12">A selection of my recent work. Each project represents a unique challenge and learning experience.</p>

      {/* The Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold mb-2">Virtual Town: AI Agents</h3>
          <p className="text-gray-600">A minor thesis project exploring multi-agent systems using LLMs.</p>
          <div className="mt-4 text-blue-600 font-medium">React • TypeScript • OpenAI</div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold mb-2">Data Science Portfolio</h3>
          <p className="text-gray-600">Analysis of Malayan Communist Party history using NLP techniques.</p>
          <div className="mt-4 text-blue-600 font-medium">Python • Pandas • NLTK</div>
        </div>

      </div>
    </section>
  );
};

export default Projects;