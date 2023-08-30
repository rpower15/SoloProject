/**
 * ************************************
 *
 * @module  MainContainer
 * @author  Rachel Power
 * @date    8-29-23
 * @description stateful component that renders ProjectsContainer
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
// import from child components...
import NewProjectCreator from '../components/NewProjectCreator';
import ProjectsContainer from './ProjectsContainer.jsx';

const MainContainer = () => {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>Engineering Design Notebook</h1>
        <NewProjectCreator />
        <ProjectsContainer />
      </div>
    </div>
  );
};

export default MainContainer;
