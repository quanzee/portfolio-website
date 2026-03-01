import { ArrowRight } from "lucide-react";

const Writing = () => {
    return (
        <section id="writing" className="py-24 px-6 bg-white">
            <div className="inline-flex items-end gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl">Writings</h2>
            <button className="inline-flex text-xs items-center gap-1 px-3 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                See More
                <ArrowRight size={10} />
            </button>
            </div>

            {/* The Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Skill Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Virtual Town: AI Agents</h3>
            <p className="text-gray-600">A minor thesis project exploring multi-agent systems using LLMs.</p>
            <div className="mt-4 text-blue-600 font-medium">React • TypeScript • OpenAI</div>

            </div>

            {/* Skill Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Data Science Portfolio</h3>
              <p className="text-gray-600">Analysis of Malayan Communist Party history using NLP techniques.</p>
              <div className="mt-4 text-blue-600 font-medium">Python • Pandas • NLTK</div>
            </div>

            </div>
        </section>
    )
}

export default Writing;