import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = ({ onSectionClick, isDarkMode, setIsDarkMode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <section id="contact" className="flex-grow py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contactez-moi
                    </motion.h2>
                    
                    <div className="max-w-md mx-auto">
                        <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white transition-shadow duration-300 hover:shadow-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Restons connectés</h3>
                            <p className="mb-6">N'hésitez pas à me contacter pour toute opportunité ou collaboration.</p>
                            
                            {/* Conteneur centré pour le lien LinkedIn */}
                            <div className="flex justify-center items-center">
                                <motion.a 
                                    href="https://www.linkedin.com/in/hugo-m-2ba176163" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-blue-200 transition duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <FaLinkedin size={24} />
                                   
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.a 
                            href="mailto:hugomesbah@hotmail.fr"
                            className="mt-8 block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Envoyer un email
                        </motion.a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;