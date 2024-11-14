import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLanguage, FaFutbol, FaCode, FaYoutube, FaLink } from 'react-icons/fa';
import profileImage from '../assets/hugo1.png';
import footballImage from '../assets/hugo3.png'; 
import hugo2Image from '../assets/hugo2.png'; 
import frenchFlag from '../assets/french-flag.png'; 
import englishFlag from '../assets/english-flag.png'; 
import Footer from './Footer';



const SectionContainer = ({ children, title, icon, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
  >
    <motion.div 
      className={`p-6 ${gradient} text-white`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-2xl font-bold flex items-center">
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, delay }}
        >
          {icon}
        </motion.span>
        <span className="ml-2">{title}</span>
      </h3>
    </motion.div>
    <motion.div 
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.3 }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const About = ({ onSectionClick, isDarkMode, setIsDarkMode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr'); 
  const languages = [
    {
      lang: 'Français',
      level: 'Natif',
      flag: frenchFlag,
      description: 'Langue maternelle avec une excellente maîtrise.'
    },
    {
      lang: 'Anglais',
      level: 'Courant',
      flag: englishFlag,
      description: 'Capacité à communiquer efficacement dans un environnement professionnel.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <SectionContainer 
          title="WHO I'AM ?" 
          icon={<FaUser className="mr-2" />}
          gradient="bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.3}
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.img 
              src={profileImage} 
              alt="Hugo Mesbah" 
              className="h-48 w-48 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
            />
            <motion.p 
              className="text-gray-700 leading-relaxed text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              Ancien footballeur professionnel en Ligue 2 et international français U16-U19, j'ai 
              récemment effectué une reconversion dans le développement web. Mon parcours unique 
              allie la discipline et l'esprit d'équipe du sport de haut niveau aux compétences 
              techniques du développement.
            </motion.p>
          </div>
        </SectionContainer>

        <SectionContainer 
  title="Parcours Sportif" 
  icon={<FaFutbol className="mr-2" />}
  gradient="bg-gradient-to-r from-green-500 to-blue-500"
  delay={0.5}
>
  <div className="flex flex-col md:flex-row items-center justify-between">
    <motion.img 
      src={footballImage} 
      alt="Hugo Mesbah Footballeur"
      className="h-48 w-48 object-cover rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
    />
    
    <ul className="space-y-4 text-left flex-grow">
      <motion.li 
        className="flex items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <FaFutbol className="mr-2 mt-1 text-green-600" />
        <div>
          <h4 className="font-semibold">Footballeur Professionnel</h4>
          <p className="text-gray-600">TOURS FC (2015 - 2019) et Luxembourg (2020 - 2021)</p>
        </div>
      </motion.li>
      <motion.li 
        className="flex items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
      >
        <FaFutbol className="mr-2 mt-1 text-green-600" />
        <div>
          <h4 className="font-semibold">Équipe de France</h4>
          <p className="text-gray-600">10 sélections (U16 à U19), Coupe du Monde U17 au Chili</p>
        </div>
      </motion.li>
    </ul>

    <div className="mt-4 md:mt-0 md:w-1/3">
      <h4 className="font-semibold text-lg">Liens Utiles :</h4>
      
      <div className="bg-white rounded-lg shadow-md p-4 mt-2">
        <ul className="space-y-2">
          <li>
            <a href="https://www.youtube.com/watch?v=w1vErp7UVyE" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaYoutube className="mr-2" /> Vidéo YouTube
            </a>
          </li>
          <li>
            <a href="https://www.transfermarkt.fr/hugo-mesbah/profil/spieler/324807" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaLink className="mr-2" /> Fiche Joueur
            </a>
          </li>
          <li>
            <a href="https://www.fff.fr/equipe-nationale/joueur/9639-mesbah-hugo/fiche.html" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              FFF Profil
            </a>
          </li>
        </ul>

        <img src={hugo2Image} alt='Hugo Epitech' className='h-auto w-full max-w-xs rounded-lg shadow-md mt-4' />
        
      </div>
    </div>

  </div>
</SectionContainer>

<SectionContainer 
  title="Education" 
  icon={<FaGraduationCap className="mr-2" />}
  gradient="bg-gradient-to-r from-purple-500 to-pink-500"
  delay={0.7}
>
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    className="text-left"
  >
    
    
    

    <h4 className="font-semibold text-lg mt-6">Parcours Éducatif</h4>
    <p className="text-gray-600 mb-2">Baccalauréat (ES) - Économies Sociales (spécialité) Sciences Politiques - 2017</p>
    <p className="text-gray-600 mb-2">EPITECH ÉCOLE NICE | BAC +2 - Développeur Web | RNCP NIVEAU 5 - 2022/2024</p>
    
    <h5 className="font-semibold">Compétences Acquises :</h5>
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>Apprentissage des langages de programmation (PHP / JS)</li>
      <li>Réalisation de différents projets en équipe, notamment la reprogrammation de Twitter et de Meetic, en utilisant une base de données sur un dépôt Git.</li>
      <li>Maîtrise de l'architecture Front-end et Back-end ainsi que de l'orientée objet.</li>
      <li>Travail sur l'architecture MVC pour garantir une séparation des préoccupations et une maintenance efficace du code.</li>
      <li>Utilisation de PHPmyadmin / MySQL.</li>
    </ul>

    <h5 className="font-semibold">Expérience en Alternance :</h5>
    <p className="text-gray-600 mb-2">2024 SOLUM (SAMSUNG) | Alternance BAC+2 - Gestion de Projet</p>
    
    <p className="text-gray-600">
      En transitionnant de développeur informatique à gestionnaire de projet axé réseaux et systèmes, j'ai été confronté à divers défis qui ont enrichi mes compétences en communication, responsabilité et techniques informatiques.
      J'ai établi une communication efficace avec les clients pour comprendre leurs besoins et attentes. J'ai été impliqué dans la planification méthodique garantissant le succès des projets.
      De plus, j'ai pris en charge la formation des utilisateurs finaux sur les nouveaux systèmes et procédures.
    </p>

    <p className="text-gray-600">
      Sur le plan technique, j'ai acquis une expérience pratique en configurant des réseaux, administrant des systèmes d'exploitation, et préparant des serveurs. 
      Mon implication lors des installations de serveurs a consolidé mes compétences techniques.
      Cette expérience m'a doté d'une palette complète de compétences allant de la communication à l'expertise technique.
    </p>

  </motion.div>
</SectionContainer>

        
<SectionContainer 
  title="Langues Parlées" 
  icon={<FaLanguage className="mr-2" />}
  gradient="bg-gradient-to-r from-red-500 to-yellow-500"
  delay={0.8}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {languages.map((language) => (
      <motion.div 
        key={language.lang} 
        onClick={() => setSelectedLanguage(language.lang)} 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}  
        className="bg-white rounded-lg shadow-lg p-4 cursor-pointer flex items-center justify-between"
      >
        
        <div className="flex items-center">
          <img src={language.flag} alt={`Drapeau ${language.lang}`} className="w-12 h-12 rounded-full mr-3" />
          <div>
            <h5 className="font-semibold text-lg">{language.lang}</h5>
            <p className="text-gray-500">{language.level}</p>
          </div>
        </div>

      
        {selectedLanguage === language.lang && (
          <motion.p 
            className="text-gray-600 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {language.description}
          </motion.p>
        )}
      </motion.div>
    ))}
  </div>
</SectionContainer>

      </div>
    </div>

    
  );
};


export default About;