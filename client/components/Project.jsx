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
import {
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD,
} from '../reducers/projectsReducer';

const Project = props => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();
  const deleteCard = () => {
    return dispatch(DELETE_CARD(props.id));
  };
  const updateCard = () => {
    return dispatch(UPDATE_CARD(props.id));
  };
  return (
    <div className='projectBox'>
      <p>
        <strong>Project Name: </strong>
        {/* {`${projects.projectList[props.index].projectId}`} */}
      </p>
      <p>
        <strong>Description: </strong>
        {/* {`${projects.projectList[props.index].projectId}`} */}
      </p>
      <button onClick={() => updateCard()}>Update Card</button>
      <button onClick={() => deleteCard()}>Delete Card</button>
    </div>
  );
};

export default Project;
