import React from 'react';
import css from './css/techList.css';

function TechList({ list }) {
  return (
    <div>
      <h3 className={css.techTitle}>Tech Used: </h3>
      {list.map((tech) => (
        <span className={css.tech}>{tech}</span>
      ))}
    </div>
  );
}

export default TechList;
