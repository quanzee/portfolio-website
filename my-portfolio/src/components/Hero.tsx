import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-white gap-8">
      <h1 className="text-7xl font-medium text-gray-900">
        Hi, I'm <span className="font-semibold text-8xl">Janna</span>
      </h1>
      <p className="text-2xl text-gray-500 max-w-2xl">
        Master of IT student specialising in Data Science, LLMs and Multi-Agent Systems
      </p>

      <a href="#about">
      <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
        Learn More
        <ArrowDown size={20} />
      </button>
    </a>
    </section>
  );
};

export default Hero;