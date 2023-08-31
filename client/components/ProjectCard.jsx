/**
 * ************************************
 *
 * @module  Project
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that renders a single box for each project
 *
 * ************************************
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_CARD, UPDATE_CARD } from '../reducers/projectsReducer';

const ProjectCard = projectInfo => {
  const { name, dateCreated, description, image } = projectInfo;

  const dispatch = useDispatch();
  const deleteCard = () => {
    return dispatch(DELETE_CARD(projectInfo._id));
  };
  const updateCard = () => {
    return dispatch(UPDATE_CARD(projectInfo._id));
  };

  return (
    <div className='projectBox'>
      <img src={image} />
      <p>
        <strong>Project Name: </strong>
        {name}
      </p>
      <p>
        <strong>Date Created: </strong>
        {dateCreated}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <button onClick={() => updateCard()}>Update Card</button>
      <button onClick={() => deleteCard()}>Delete Card</button>
    </div>
  );
};

export default ProjectCard;
