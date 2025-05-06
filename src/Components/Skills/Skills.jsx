import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiC, SiCplusplus, SiLinux, SiGnubash, SiGit } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Linux", icon: <SiLinux className="text-yellow-100" /> },
  { name: "Bash", icon: <SiGnubash className="text-green-300" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4 bg-gradient-to-tr from-[#1e3a8a] to-[#0f172a] text-white rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-exo font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-center text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
