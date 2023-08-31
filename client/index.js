/**
 * ************************************
 *
 * @module  index.js
 * @author  Rachel Power
 * @date    8-29-23
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import store from './store';
// import '../stylesheets/styles';

import ReacDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Project from './pages/Project';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('contents'));
root.render(
  // wrap the App in the Provider Component and pass in the store

  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
