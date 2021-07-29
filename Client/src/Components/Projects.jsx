import React from 'react';
import blue from '../../dist/img/blueOcean/index';
import ProjectTile from './ProjectTile';
import css from './css/projects.css';

function Projects() {
  const blueOcean = {
    title: 'Harmony App',
    body: 'Harmony is a mobile-first group chat app that lets users and their friends stay connected. Users for our app can create chat rooms with multiple text and video channels.',
    tech: ['Javascript', 'React', 'React Router', 'Firebase', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/SEASJO1-Blue-Ocean-2/Harmony',
    img: blue,
  };

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1>Projects</h1>
      </div>
      <div className={css.tiles}>
        <ProjectTile tile={blueOcean} />
      </div>

    </div>
  );
}

export default Projects;
