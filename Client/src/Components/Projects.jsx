import React from 'react';
import blue from '../../dist/img/blueOcean/index';
import puppy from '../../dist/img/puppyRanker/';
import pegasus from '../../dist/img/pegasusShopping';
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

  const puppyRanker = {
    title: 'Puppy Ranker',
    body: descriptions.puppyRanker,
    tech: ['Javascript', 'React', 'MongoDB', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/AlexTing1/Puppy-Ranker',
    imgDisplay: puppy.logo,
    img: puppy,
  };

  const pegasusShopping = {
    title: 'Pegasus Shopping',
    body: descriptions.pegasus,
    tech: ['Javascript', 'React', 'AWS', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    githut: 'https://github.com/Pegasus-Shopping/PegasusShopFront',
    imgDisplay: pegasus.logo,
    img: pegasus,
  };

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1>Projects</h1>
      </div>
      <div className={css.tiles}>
        <ProjectTile tile={blueOcean} />
        <ProjectTile tile={puppyRanker} />
        <ProjectTile tile={pegasusShopping} />
      </div>

    </div>
  );
}

export default Projects;
