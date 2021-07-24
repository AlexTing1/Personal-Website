import React from 'react';
import css from './css/skillsList.css';

function SkillsList({ list }) {
  return (
    <div>
      {list.map((data) => (
        <div className={css.block}>
          <img src={data.image} alt="img" className={css.image} />
          <span className={css.text}>{data.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
