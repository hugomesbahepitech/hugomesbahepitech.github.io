import React from 'react';
import { FaGithub, FaLinkedin, FaFootballBall, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/CV_HUGO.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <a href="https://github.com/hugomesbahepitech" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hugo-m-2ba176163" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.transfermarkt.fr/hugo-mesbah/profil/spieler/324807" target="_blank" rel="noopener noreferrer" className="mx-3 hover:text-blue-400">
            <FaFootballBall size={24} />
          </a>
          <a href={profileImage} download="Hugo_Mesbah_Photo.png" className="mx-3 hover:text-blue-400">
            <FaDownload size={24} />
          </a>
        </div>
        <p className="text-center mt-4">© Hugo Mesbah. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;