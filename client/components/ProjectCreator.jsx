/**
 * ************************************
 *
 * @module  ProjectCreator
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that takes user input for new project creation
 *
 * ************************************
 */

import React from 'react';

const ProjectCreator = props => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <button role='newProject' onClick={() => openInNewTab('/project')}>
      Create New Project
    </button>
  );
};

export default ProjectCreator;
