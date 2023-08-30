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

const NewProjectCreator = props => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <button role='newProject' onClick={() => openInNewTab('/project')}>
      Create New Project
    </button>
  );
};

export default NewProjectCreator;
