import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHeart, FaLightbulb } from 'react-icons/fa';
import Footer from './Footer';

const Portfolio = ({ onSectionClick }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const sections = [
        { name: 'À Propos', icon: FaUser, color: 'from-blue-500 to-purple-600', section: 'about' },
        { name: 'Compétences', icon: FaCode, color: 'from-blue-600 to-purple-700', section: 'skills' },
        { name: 'Projets', icon: FaProjectDiagram, color: 'from-blue-400 to-purple-500', section: 'projects' },
        { name: 'Contact', icon: FaEnvelope, color: 'from-indigo-500 to-purple-600', section: 'contact' },
        { name: 'Projets Personnels', icon: FaProjectDiagram, color: 'from-blue-500 to-indigo-600', section: 'personalProjects' },
        { name: 'Hobbies', icon: FaHeart, color: 'from-purple-500 to-blue-600', section: 'hobbies' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <motion.div 
                className={`flex-grow p-8 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-black'}`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 
                    className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-montserrat tracking-wider"
                    variants={titleVariants}
                >
                    HOME PAGE
                </motion.h1>

                
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
                    variants={containerVariants}
                >
                    {sections.map((item, index) => (
                        <motion.button
                            key={item.section}
                            className={`flex flex-col items-center justify-center p-6 bg-gradient-to-br ${item.color} text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2`}
                            onClick={() => onSectionClick(item.section)}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0px 0px 8px rgb(255,255,255)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1 + index * 0.1
                                }}
                            >
                                <item.icon className="text-5xl mb-3" />
                            </motion.div>
                            <span className="text-lg font-medium">{item.name}</span>
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Portfolio;