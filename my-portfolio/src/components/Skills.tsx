import {
  Code2,
  Palette,
  Bot,
  GitBranch,
  Layers,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Fullstack Development',
    skills: ['Python', 'Java','React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'SQL'],
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'Procreate', 'UI/UX Design', 'Prototyping', 'Wireframing'],
  },
  {
    icon: Bot,
    title: 'Data Science',
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'R Studio'],
  },
  {
    icon: GitBranch,
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub'],
  },
  {
    icon: Layers,
    title: 'Other Skills',
    skills: ['Microsoft Office', 'Research & Analysis'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
            <h2 className="text-4xl md:text-5xl mb-4">Skills</h2>
            <p className="text-lg text-gray-600 mb-12">
                Skills built through a blend of academic learning, personal projects, and real-world experience. 
            </p>
      
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <Icon className="w-8 h-8 mb-4 text-gray-700" />
                <h3 className="text-xl mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Skills;