import React from 'react';
import ProjectCard from './ProjectCard';
import mymeetic from '../assets/mymeetic.png';
import maquette from '../assets/maquette.png'; 
import battleship from '../assets/battleship.png'; 
import puissance4 from '../assets/puissance4.png'; 
import racingjs from '../assets/racingjs.png'; 
import mytwitter1 from '../assets/MyTwitter1.png'; 
import mytwitter2 from '../assets/MyTwitter2.png'; 
import scribbl1 from '../assets/Scribbl1.png'; 
import scribbl2 from '../assets/Scribbl2.png'; 
import scribbl3 from '../assets/Scribbl3.png'; 
import htmlGaming from '../assets/html-gaming.png'; 
import myApp1 from '../assets/MyApp1.png'; 
import myApp2 from '../assets/MyApp2.png'; 

const projectsData = [
  {
    id: 1,
    title: "My Meetic",
    description: "Une application de rencontre moderne",
    media: mymeetic,
    type: "image",
    tags: ["Bootstrap", "PHP"]
  },
  {
    id: 2,
    title: "Maquette Responsive",
    description: "Un projet via une maquette responsive",
    media: maquette,
    type: "image",
    tags: ["HTML", "CSS", "Responsive Design"]
  },
  {
    id: 3,
    title: "Battleship",
    description: "Le fameux jeu Battleship",
    media: battleship,
    type: "image",
    tags: [ "JS"]
  },
  {
    id: 4,
    title: "Puissance 4",
    description: "Une version du jeu Puissance 4",
    media: puissance4,
    type: "image",
    tags: ["JS"]
  },
  {
    id: 5,
    title: "Racing JS",
    description: "Un projet full Javascript",
    media: racingjs,
    type: "image",
    tags: ["JS"]
  },
  {
    id: 6,
    title: "MyTwitter",
    description: "Un clone de Twitter",
    media: [mytwitter1, mytwitter2],
    type: "images",
    tags: ["Ajax", "JQuery", "HTML", "CSS"]
  },
  {
    id: 7,
    title: "ScribbleTech",
    description: "Une application de dessin",
    media: [scribbl1, scribbl2, scribbl3],
    type: "images",
    tags: ["JS"]
  },
  {
    id: 8,
    title: "HTML Gaming",
    description: "Projet de développement d'un jeu",
    media: htmlGaming,
    type: "image",
    tags: ["JS"]
  },
  {
    id: 9,
    title: "My App",
    description: "Une application avec plusieurs fonctionnalités via des API",
    media: [myApp1, myApp2],
    type: "images",
    tags: ["React", "API"]
  }
];

const Projects = () => {
  return (
      <section id="projects" className="bg-white py-20">
          <div className="container mx-auto px-4 md:px-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 mb-10">
                  <h2 className="text-3xl font-bold text-white mb-6">Projets d'école</h2>
                  <p className="text-gray-200 mb-10">
                      Voici quelques-uns de mes projets réalisés dans le cadre de ma formation à la 
                      <a href="https://www.webacademie.org/" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-400"> WebAcadémie d'Epitech </a>.
                      Ces projets illustrent mes compétences en développement web et ma capacité à travailler sur des solutions demandées et proposées. 
                      Chaque projet fut une étape importante dans mon parcours, me permettant d'appliquer mes connaissances et d'acquérir de nouvelles compétences.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsData.map(project => (
                      <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
          </div>
      </section>
  );
};

export default Projects;