import React from 'react';
import blue from '../../dist/img/blueOcean/index';
import ProjectTile from './ProjectTile';
import css from './css/projects.css';
import descriptions from '../../../projectDescriptions';

function Projects() {
  const blueOcean = {
    title: 'Harmony App',
    body: descriptions.blueOceanBody,
    tech: ['Javascript', 'React', 'React Router', 'Firebase', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/SEASJO1-Blue-Ocean-2/Harmony',
    imgDisplay: blue.login,
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
