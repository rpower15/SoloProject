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
    return dispatch(DELETE_CARD(projectInfo._id));
  };
  const updateCard = () => {
    return dispatch(UPDATE_CARD(projectInfo._id));
  };

  return (
    <div className='projectBox'>
      <img width='80%' src={image} />
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
        <button onClick={() => updateCard()}>Update Card</button>
        <button onClick={() => deleteCard()}>Delete Card</button>
      </div>
    </div>
  );
};

export default ProjectCard;
