import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroPage = ({ onComplete }) => {
    const text = "I'm Hugo MESBAH, I'm a web developer";

    useEffect(() => {
        const timer = setTimeout(() => onComplete(), text.length * 100 + 3000); 
        return () => clearTimeout(timer);
    }, [onComplete, text.length]);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
            <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-8 text-center"
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
            >
                {text.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: index * 0.05 }} 
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

            
            <div className="w-full max-w-md mt-8">
                <motion.div 
                    className="h-2 bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }} 
                    transition={{ duration: text.length * 0.05 + 2.5 }} 
                />
            </div>
        </div>
    );
};

export default IntroPage;