import React from 'react';

const Hobbies = ({ onSectionClick, isDarkMode, setIsDarkMode }) => {
    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
                <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Mes Hobbies</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Je me passionne pour l’entraînement en salle et le sport en général. Toujours curieux et avide de connaissances, je suis de près les évolutions dans le domaine de l’informatique ainsi que l’actualité des marchés financiers et des cryptomonnaies. Profiter des moments de qualité avec les personnes qui m’entourent est également essentiel pour moi.
                </p>
            </div>
        </div>
    );
};

export default Hobbies;