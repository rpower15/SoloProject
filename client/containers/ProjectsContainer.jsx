/**
 * ************************************
 *
 * @module  ProjectsContainer
 * @author  Rachel Power
 * @date    8-29-23
 * @description stateful component that renders ProjectsDisplay
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
// import child components...
import ProjectsCreator from '../components/ProjectsCreator';
import ProjectsDisplay from '../components/ProjectsDisplay.jsx';

const ProjectsContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className='innerbox'>
      {<ProjectsCreator />}
      {<ProjectsDisplay />}
    </div>
  );
};

export default ProjectsContainer;
