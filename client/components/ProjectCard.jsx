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

const ProjectCard = props => {
  const { name, dateCreated, description, image } = props.data;

  const dispatch = useDispatch();
  const deleteCard = () => {
    return dispatch(DELETE_CARD(props._id));
  };
  const updateCard = () => {
    return dispatch(UPDATE_CARD(props._id));
  };

  return (
    <div className='projectBox'>
      <div className='thumbnail'>
        <img height='125px' src={image} />
      </div>
      <p>
        <strong>Project Name: </strong>
        <br></br>
        {name}
      </p>
      <br></br>
      <p>
        <strong>Date Created: </strong>
        <br></br>
        {dateCreated}
      </p>
      <br></br>
      <p>
        <strong>Description: </strong>
        <br></br>
        {description}
      </p>
      <br></br>
      <div className='projectbtn'>
        <button id='updatebtn' onClick={() => updateCard()}>
          Edit Project
        </button>
        <button onClick={() => deleteCard()}>Delete Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
