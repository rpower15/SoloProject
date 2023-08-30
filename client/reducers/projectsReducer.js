/**
 * ************************************
 *
 * @module  projectsReducer
 * @author  Rachel Power
 * @date    8-29-23
 * @description reducer for project data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

//this state governs the state of the entire app
const initialState = {};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CARD: {
    }
    case types.DELETE_CARD: {
    }
    case types.UPDATE_CARD: {
    }
    default: {
      return state;
    }
  }
};

export default projectsReducer;
