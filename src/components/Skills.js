import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiBootstrap, SiPhp, SiSymfony, SiDocker, SiTailwindcss, SiMysql, SiExpress, SiGithub, SiFigma, SiNotion } from 'react-icons/si';
import { MdArrowBack } from 'react-icons/md';
import Footer from './Footer';



const hardSkillsData = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 85 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 80 },
  { name: 'Node.js', icon: FaNode, color: '#339933', level: 70 },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#563D7C', level: 80 },
  { name: 'PHP', icon: SiPhp, color: '#4F5B93', level: 75 },
  { name: 'Symfony', icon: SiSymfony, color: '#000000', level: 70 },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 65 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 75 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 70 },
  { name: 'Express.js', icon: SiExpress, color: '#000000', level: 70 },
  { name: 'GitHub', icon: SiGithub, color: '#181717', level: 80 },
  { name: 'Figma', icon: SiFigma, color:'#F24E1E', level: 75},
  { name:'Notion', icon: SiNotion, color:'#000000', level: 65}
];

const softSkillsData = [
  { name: 'Gestion du Stress', level: 80 },
  { name: 'Travail en Équipe', level: 90 },
  { name: 'Motivation', level: 90 },
  { name: 'Sens des Responsabilités', level: 90 },
  { name: 'Autonomie', level: 90 },
  { name: 'Discipline', level: 100 },
  { name:'Gestion de Projets', level: 70}
];

const SkillBar = ({ name, Icon, color, level }) => {
    return (
        <motion.div 
            className="mb-6 bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
        >
            <div className="flex items-center mb-2">
                <motion.div 
                    whileHover={{ rotateY: 360 }} 
                    transition={{ duration: 0.5 }}
                    className="bg-gray-100 p-2 rounded-full mr-3"
                >
                    {Icon && <Icon size={24} color={color} />}
                </motion.div>
                <span className="text-lg font-semibold text-gray-800">{name}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                    className="h-3 rounded-full"
                    style={{ backgroundColor: color || '#6B7280' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
            <span className="text-sm text-gray-600 mt-1 block">{level}%</span>
        </motion.div>
    );
};

const SkillContainer = ({ title, skills, gradientFrom, gradientTo }) => (
    <motion.div 
        className="mb-20 bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className={`p-6 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
            <h3 className="text-4xl font-extrabold text-white text-center">
                {title}
            </h3>
        </div>
        <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <SkillBar
                            name={skill.name}
                            Icon={skill.icon}
                            color={skill.color}
                            level={skill.level}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section id="skills" className="flex-grow py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <SkillContainer 
                        title="Technical Skills" 
                        skills={hardSkillsData} 
                        gradientFrom="blue-600" 
                        gradientTo="indigo-600"
                    />
                    
                    <SkillContainer 
                        title="Soft Skills" 
                        skills={softSkillsData} 
                        gradientFrom="purple-600" 
                        gradientTo="pink-600"
                    />

                    
                    <motion.div 
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a
                            href="https://www.webacademie.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:bg-purple-700"
                        >
                            <MdArrowBack className="mr-2" size={24} />
                            Visit Web@cadémie
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Skills;