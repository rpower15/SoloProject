/**
 * ************************************
 *
 * @module  ProjectsCreator
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that renders each project card
 *
 * ************************************
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD } from '../reducers/projectsReducer';
import store from '../store';

const ProjectsCreator = props => {
  const addProject = () => {
    const name = document.getElementById('name').value;
    props.dispatch(ADD_CARD(name));
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      addProject();
    }
  };
  return (
    <div>
      {/* <label htmlFor='name'>Name of Project: </label>
      <input
        type='text'
        id='name'
        onKeyDown={key => handleKeyPress(key)}></input>
      <button type='button' onClick={() => addProject()}>
        Save Project
      </button> */}
    </div>
  );
};

export default ProjectsCreator;
