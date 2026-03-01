import aboutMeImg from '../assets/about_me_placeholder.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-gray-50">
            <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer and designer who loves creating beautiful,
              functional, and user-friendly digital experiences. With a background
              in both frontend development and UX design, I bring a unique
              perspective to every project.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or sharing my thoughts on
              technology and creativity.
            </p>
            <p className="text-lg text-gray-600">
              I believe in building products that not only look great but also
              solve real problems and make a positive impact.
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
        </section>
    );
};

export default About;