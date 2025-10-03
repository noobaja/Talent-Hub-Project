import React from 'react';

// Menerima 'project' sebagai prop
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {project.technologies.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;