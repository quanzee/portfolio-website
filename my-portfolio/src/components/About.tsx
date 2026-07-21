import aboutMeImg from '../assets/about_me_placeholder.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gray-50">
            <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm Janna. I'm a developer based in Melbourne with a background spanning <b>software development, data</b> and <b>consulting</b>.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I'm currently completing a <b>Master of IT</b> at <b>RMIT</b>, where I'm researching multi-agent AI systems for my thesis — but my broader interest is in how technology and data can be applied practically to <b>solve real problems</b>, not just in research settings.
            </p>
            <p className="text-lg text-gray-600 mb-6">    
              I previously worked in <b>economics and policy consulting</b>, which shaped how I approach problems: analytically, with an eye for the bigger picture and how decisions affect people. That mix of <b>technical and business thinking</b> is what I bring to any team I work with, whether that's <b>building software, analysing requirements</b> or <b>helping translate ideas into delivery</b>.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Outside of work, my hobbies include <b>reading</b> on a wide range of topics from non-fiction to manga, <b>drawing</b>, <b>going to the gym</b> and <b>playing board games with friends</b>. I approach both my work and hobbies with a mindset of <b>curiosity and continuous learning</b>, 
              always eager to explore new ideas.
            </p>
            <p className="text-lg text-gray-600">
              I am currently looking for opportunities to contribute my skills to impactful projects and to gain new work experience. Feel free to reach out if you want to connect or collaborate!
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