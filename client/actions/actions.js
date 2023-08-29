/**
 * ************************************
 *
 * @module  actions.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

export const addCardActionCreator = projectId => ({
  type: types.ADD_CARD,
  payload: projectId,
});

export const deleteCardActionCreator = projectId => ({
  type: types.DELETE_CARD,
  payload: projectId,
});
