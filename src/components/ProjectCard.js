import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
      <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
      >
          {project.type === 'images' ? (
              <div className="flex overflow-x-auto">
                  {project.media.map((image, index) => (
                      <img key={index} src={image} alt={`${project.title} image ${index + 1}`} className="w-full h-48 object-cover mr-2" />
                  ))}
              </div>
          ) : (
              <img src={project.media} alt={project.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-gray-200 mb-2">{project.description}</p>
              <div className="flex flex-wrap">
                  {project.tags.map(tag => (
                      <span key={tag} className="bg-white text-blue-500 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                  ))}
              </div>
          </div>
      </motion.div>
  );
};

export default ProjectCard;