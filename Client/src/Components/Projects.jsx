import React from 'react';
import blue from '../../dist/img/blueOcean/index';
import ProjectTile from './ProjectTile';

function Projects() {
  const blueOcean = {
    title: 'Harmony App',
    body: 'Harmony is a mobile-first group chat app that lets users and their friends stay connected. Users for our app can create chat rooms with multiple text and video channels.',
    tech: ['Javascript', 'React', 'React Router', 'Firebase', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/SEASJO1-Blue-Ocean-2/Harmony',
    img: blue,
  };

  return (
    <div>
      <ProjectTile tile={blueOcean} />
    </div>
  );
}

export default Projects;
