import React from 'react';
import css from './css/projectTile.css';

function ProjectTile({ tile }) {

  return (
    <div className={css.container}>
      <h2>{tile.title}</h2>
    </div>
  );
}

export default ProjectTile;
