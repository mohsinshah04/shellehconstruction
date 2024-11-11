import React from 'react';
import './works.css';

const Works = () => {
  const projects = [
    {
      id: 1,
      beforeImage: 'path-to-before-image-1.jpg',
      afterImage: 'path-to-after-image-1.jpg',
      description: 'Project 1 description: What was done, the transformation, etc.'
    },
    {
      id: 2,
      beforeImage: 'path-to-before-image-2.jpg',
      afterImage: 'path-to-after-image-2.jpg',
      description: 'Project 2 description: What was done, the transformation, etc.'
    },
    {
      id: 3,
      beforeImage: 'path-to-before-image-3.jpg',
      afterImage: 'path-to-after-image-3.jpg',
      description: 'Project 3 description: What was done, the transformation, etc.'
    }
  ];

  return (
    <section id="works" className="worksSection">
      <h2 className="worksTitle">Our Projects</h2>
      
      <div className="projectsContainer">
        {projects.map(project => (
          <div key={project.id} className="projectCard">
            <h3 className="projectTitle">Project {project.id}</h3>
            <div className="imagesContainer">
              <div className="imageSlot">
                <h4>Before</h4>
                <img src={project.beforeImage} alt={`Before Project ${project.id}`} className="projectImage" />
              </div>
              <div className="imageSlot">
                <h4>After</h4>
                <img src={project.afterImage} alt={`After Project ${project.id}`} className="projectImage" />
              </div>
            </div>
            <p className="projectDescription">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
