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
  projects: [],
  error: null,
  loading: false,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    ADD_CARD: (state, action) => {
      const newProject = {
        name: action.payload.name,
        dateCreated: Date.now(),
        problem: action.payload.problem,
        ask: action.payload.ask,
        imagine: action.payload.imagine,
        plan: action.payload.plan,
        create: action.payload.create,
        test: action.payload.test,
        improve: action.payload.improve,
        share: action.payload.share,
        debrief: action.payload.debrief,
      };
      state.projectsList.push(newProject);
      return state;
    },
    DELETE_CARD: (state, action) => {
      return state;
    },
    SAVE_CARD: (state, action) => {
      return state;
    },
    UPDATE_CARD: (state, action) => {
      return state;
    },
  },
});

export const { ADD_CARD, DELETE_CARD, SAVE_CARD, UPDATE_CARD } =
  projectSlice.actions;
export default projectSlice.reducer;
