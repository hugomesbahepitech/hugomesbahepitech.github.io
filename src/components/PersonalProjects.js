import React from 'react';
import BotImage from '../assets/Bot.png'; 

const PersonalProjects = ({ onSectionClick, isDarkMode, setIsDarkMode }) => {
    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
            <h2 className="text-3xl font-bold mb-6">Projets Personnels</h2>
            <p>Voici un de mes projets personnels...</p>

           
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Bot de Trading</h3>
                <img 
                    className="w-full rounded-lg" 
                    src={BotImage} 
                    alt="Bot de Trading" 
                />
                <p className="mt-4 text-gray-700">
                    Ce bot de trading est configuré en Pine Script sur l'application TradingView. Il analyse les tendances du marché et exécute des ordres basés sur des stratégies prédéfinies.
                </p>
            </div>
        </div>
    );
};

export default PersonalProjects;