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

import React from 'react';
import Project from './ProjectCard.jsx';
import { useSelector } from 'react-redux';

const ProjectsDisplay = props => {
  const projects = useSelector(state => state.projects);
  const displayProjects = [];

  //fetch database objects

  // for (let i = 0; i < projects.projectsList.length; i++) {
  //   displayProjects.push(<Project key={projects.projectList[i].id} />);

  //   {
  //     displayProjects;
  //   }
  // }

  return (
    <div className='displayBox'>
      <h2>Projects</h2>
      {displayProjects}
    </div>
  );
};

export default ProjectsDisplay;
