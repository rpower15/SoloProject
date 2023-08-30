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

import { createSlice } from '@reduxjs/toolkit';

//this state governs the state of the entire app
const initialState = {
  someState: '',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    ADD_CARD: (state, action) => {
      return state;
    },
    DELETE_CARD: (state, action) => {
      return state;
    },
    UPDATE_CARD: (state, action) => {
      return state;
    },
  },
});

export const { ADD_CARD, DELETE_CARD, UPDATE_CARD } = projectSlice.actions;
export default projectSlice.reducer;
