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
  addCardActionCreator,
  deleteCardActionCreator,
  updateCardActionCreator,
} from '../actions/actions';

const Project = props => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();
};

export default Project;
