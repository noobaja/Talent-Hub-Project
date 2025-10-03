// src/components/profile/SkillsSection.jsx
import React from 'react';

// Anggap kita menerima array of strings, contoh: ['React', 'Node.js', 'Figma']
const SkillsSection = ({ skills }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Keahlian</h2>
      <div className="flex flex-wrap gap-2">
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500">Keahlian belum ditambahkan.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;