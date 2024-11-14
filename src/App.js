import React, { useState, useEffect } from 'react';
import IntroPage from './components/IntroPage';
import Portfolio from './components/Portfolio'; 
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PersonalProjects from './components/PersonalProjects'; 
import Hobbies from './components/Hobbies'; 
import { motion } from 'framer-motion'; 
import './App.css';
import './index.css';

const App = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [activeSection, setActiveSection] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false); // Déplacer ici

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const renderActiveSection = () => {
        switch(activeSection) {
            case 'about':
                return <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            case 'skills':
                return <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            case 'projects':
                return <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            case 'contact':
                return <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            case 'personalProjects':
                return <PersonalProjects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            case 'hobbies':
                return <Hobbies isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
            default:
                return null;
        }
    };

    if (showIntro) {
        return <IntroPage onComplete={() => setShowIntro(false)} />;
    }

    return (
        <div className={`App bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-black'}`}>
            {activeSection ? (
                <>
                    {renderActiveSection()}
                    
                    <motion.button 
                        className="fixed top-4 left-4 px-4 py-2 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg cursor-pointer hover:shadow-xl transition duration-300 text-white font-bold"
                        onClick={() => setActiveSection(null)}
                        whileHover={{ scale: 1.1 }}
                    >
                        Home
                    </motion.button>
                </>
            ) : (
                <Portfolio onSectionClick={handleSectionClick} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            )}
        </div>
    );
};

export default App;