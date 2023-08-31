/**
 * ************************************
 *
 * @module  ProjectsDisplay
 * @author  Rachel Power
 * @date    8-29-23
 * @description presentation component that renders n Project components
 *
 * ************************************
 */

import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import { useSelector } from 'react-redux';

const data = [
  {
    name: 'Parachute Design Challenge',
    description: 'Design a parachute to slow the descent of a falling egg',
    dateCreated: 'August 31, 2023',
    image: './assets/egg.jpg',
    _id: 'test',
  },
];
const displayProjects = [];

for (let i = 0; i < data.length; i++) {
  displayProjects.push(<ProjectCard key={data[i]._id} data={data[i]} />);
}
// async function componentDidMount() {
//   const displayProjects = [];
//   const requestOptions = {
//     method: 'GET',
//   };
//   const response = await fetch('/projectCards', requestOptions);
//   const data = await response.json();

//   for (let i = 0; i < data.length; i++) {
//     displayProjects.push(<ProjectCard key={data[i]._id} />);
//   }
//   return displayProjects;
// }

// const ProjectCards = componentDidMount();

const ProjectsDisplay = props => {
  // const projects = useSelector(state => state.projects);

  return (
    <div className='displayBox'>
      <h2>Projects</h2>
      {displayProjects}
    </div>
  );
};

export default ProjectsDisplay;
