/**
 * ************************************
 *
 * @module  index.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import projectsReducer from './projectsReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  projects: projectsReducer,
});

// make the combined reducers available for import
export default reducers;
