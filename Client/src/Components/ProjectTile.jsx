import React from 'react';
import css from './css/projectTile.css';
import TechList from './TechList';

function ProjectTile({ tile }) {
  console.log(tile.img);
  return (
    <div className={css.container}>
      <div id="tile image" className={css.imgContainer}>
        <img src={tile.imgDisplay} alt="default display" className={css.img} />
      </div>
      <div id="text block" className={css.textBlock}>
        <h2>{tile.title}</h2>
        <p>{tile.body}</p>
        <TechList list={tile.tech} />
      </div>
    </div>
  );
}

export default ProjectTile;
