import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Project from './Project';

function Navbar() {
  return (
    <nav>
      <ul>
        <li id='nav-bar'>
          <Link to='/'>Return to Notebook</Link>
          <Link to='/project'></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
