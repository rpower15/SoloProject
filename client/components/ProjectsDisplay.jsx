/**
 * ************************************
 *
 * @module  ProjectsDisplay
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that renders n Project components
 *
 * ************************************
 */

import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { useSelector } from 'react-redux';

const ProjectsDisplay = props => {
  const [project, updateProject] = useState([]);
  const displayProjects = [];

  useEffect(() => {
    fetch('/projectCard')
      .then(data => data.json())
      .then(data => updateProject(data))
      .catch(error => console.log('Error', error));
  }, []);

  for (let i = 0; i < project.length; i++) {
    displayProjects.push(
      <ProjectCard key={project[i]._id} data={project[i]} />,
    );
  }

  return (
    <div className='displayBox'>
      <h2>Projects</h2>
      {displayProjects}
    </div>
  );
};

export default ProjectsDisplay;
