import aboutMeImg from '../assets/about_me_placeholder.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gray-50">
            <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm Janna. I'm a developer based in Melbourne who loves building everything from sleek full-stack applications to complex LLM systems. 
              I'm currently pursuing a Master of IT, where I'm spending most of my time researching <b>autonomous AI agents</b> and <b>multi-agent systems</b> for my thesis.
            </p>
            <p className="text-lg text-gray-600 mb-6">    
              I previously worked in <b>economics and policy consulting</b>, which gives me a unique lens 
              on how technology affects the world. I thrive at the intersection of <b>data science</b> and <b>software engineering</b>, bringing an analytical mindset from my consulting background to every line of code.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Outside of work, my hobbies include <b>reading</b> on a wide range of topics from non-fiction to manga, <b>drawing</b>, <b>going to the gym</b> and <b>playing board games with friends</b>. I approach both my work and hobbies with a mindset of <b>curiosity and continuous learning</b>, 
              always eager to explore new ideas.
            </p>
            <p className="text-lg text-gray-600">
              I am currently looking for opportunities to contribute my skills to impactful projects and to gain new work experience.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={aboutMeImg}
              alt="Placeholder Image"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
        <button className="block w-fit text-m px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors mt-12">
          View Resume
        </button>
        </section>
    );
};

export default About;