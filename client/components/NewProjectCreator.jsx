/**
 * ************************************
 *
 * @module  NewProjectCreator
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that renders a button to create a new project
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';
import store from '../store';
import { projectSlice } from '../reducers/projectsReducer';

const NewProjectCreator = props => {
  const openInNewTab = url => {
    const projectName = document.getElementById('name').value;
    document.getElementById('name').value = '';
    window.open(url, '_blank', 'noreferrer');
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      openInNewTab('/project');
    }
  };
  return (
    <div>
      <label htmlFor='name'>Name of New Project: </label>
      <input
        type='text'
        id='name'
        onKeyDown={key => handleKeyPress(key)}></input>
      <button role='newProject' onClick={() => openInNewTab('/project')}>
        Create New Project
      </button>
    </div>
  );
};

export default NewProjectCreator;
