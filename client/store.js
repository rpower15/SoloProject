/**
 * ************************************
 *
 * @module  store.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import projectsReducer from './reducers/projectsReducer';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore(
  { reducer: projectsReducer },
  composeWithDevTools(),
);
export default store;
