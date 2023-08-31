import React from 'react';
import Navbar from './navbar.jsx';

function Project() {
  const name = document.getElementById('name').value;
  return (
    <div>
      <Navbar />
      <br></br>
      <div>
        <h1 className='header'>{name}</h1>
        <button id='saveProject' value='Submit'>
          Save Project
        </button>
      </div>
    </div>
  );
}

export default Project;
