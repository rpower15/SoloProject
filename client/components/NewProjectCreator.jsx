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
import { Link } from 'react-router-dom';

const NewProjectCreator = props => {
  // const openInNewTab = url => {
  //   const projectName = document.getElementById('name').value;
  //   document.getElementById('name').value = '';
  //   window.open(url, '_blank', 'noreferrer');
  // };
  // const handleKeyPress = e => {
  //   if (e.key === 'Enter') {
  //     openInNewTab('/project');
  //   }
  // };
  // function EnableDisable() {
  //   //Reference the Button.
  //   const btnSubmit = document.getElementById('btnSubmit');
  //   const name = document.getElementById('name');

  //   //Verify the TextBox value.
  //   if (name.value.trim() != '') {
  //     //Enable the TextBox when TextBox has value.
  //     btnSubmit.disabled = false;
  //   } else {
  //     //Disable the TextBox when TextBox is empty.
  //     btnSubmit.disabled = true;
  //   }
  // }

  return (
    <div id='new-project'>
      <label htmlFor='name'>Name of New Project: </label>
      <input type='text' id='name'></input>
      <Link to='/project'>
        {/* <button role='newProject' onClick={() => openInNewTab('/project')}> */}
        <button id='btnSubmit' value='Submit'>
          Create New Project
        </button>
      </Link>
    </div>
  );
};

export default NewProjectCreator;
