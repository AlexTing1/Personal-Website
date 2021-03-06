import React from 'react';
import blue from '../../dist/img/blueOcean/index';
import puppy from '../../dist/img/puppyRanker';
import pegasus from '../../dist/img/pegasusShopping';
import twitterSent from '../../dist/img/twitterSentimentAnalysis';
import ProjectTile from './ProjectTile';
import css from './css/projects.css';
import descriptions from '../../../projectDescriptions';

function Projects() {
  const blueOcean = {
    title: 'Harmony App',
    body: descriptions.blueOceanBody,
    bodyCarosel: descriptions.blueOceanCarosel,
    tech: ['Javascript', 'React', 'React Router', 'Firebase', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/SEASJO1-Blue-Ocean-2/Harmony',
    imgDisplay: blue.logo,
    img: blue.images,
    css: css.harmonyCss,
  };

  const puppyRanker = {
    title: 'Puppy Ranker',
    body: descriptions.puppyRanker,
    bodyCarosel: descriptions.puppyRankerCarosel,
    tech: ['Javascript', 'React', 'MongoDB', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/AlexTing1/Puppy-Ranker',
    imgDisplay: puppy.logo,
    img: puppy.images,
    css: css.puppyCss,
  };

  const pegasusShopping = {
    title: 'Pegasus Shopping',
    body: descriptions.pegasus,
    bodyCarosel: descriptions.pegasusCarosel,
    tech: ['Javascript', 'React', 'AWS', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    githut: 'https://github.com/Pegasus-Shopping/PegasusShopFront',
    imgDisplay: pegasus.logo,
    img: pegasus.images,
    css: css.pegasusCss,
  };

  const twitterSentimentAnalysis = {
    title: 'Twitter Sentiment Analysis',
    body: descriptions.twitterSent,
    bodyCarosel: descriptions.twitterSentCarosel,
    tech: ['Javascript', 'CSS', 'React', 'MongoDB', 'Axios', 'Express', 'Webpack', 'Babel', 'Jest'],
    github: 'https://github.com/AlexTing1/Twitter-Analysis',
    imgDisplay: twitterSent.logo,
    img: twitterSent.images,
    css: css.twitterSent,
  };

  return (
    <div id="projects" className={css.container}>
      <div className={css.title}>
        <h1>Projects</h1>
      </div>
      <div className={css.tiles}>
        <ProjectTile tile={blueOcean} />
        <ProjectTile tile={twitterSentimentAnalysis} />
        <ProjectTile tile={puppyRanker} />
        <ProjectTile tile={pegasusShopping} />
      </div>

    </div>
  );
}

export default Projects;
