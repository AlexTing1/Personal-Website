import React from 'react';
import css from './css/techList.css';

function TechList({ list }) {
  return (
    <div /* className={css.techContainer} */>
      <h3 className={css.techTitle}>Tech Used: </h3>
      <div className={css.techContainer}>
        {list.map((tech) => (
          <span className={css.tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default TechList;
