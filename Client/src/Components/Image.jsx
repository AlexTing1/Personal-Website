import React from 'react';
import css from './css/image.css';

function Image() {
  return (
    <div id="image" className={css.container}>
      <img className={css.image} src="https://www.tahiti.com/images1/thumbs/BOBILM-Beach-1200x720.jpg" alt="borabora" />
      <div className={css.imageTextContainer}>
        <h1 className={css.imageTextName}>Alexander Ting</h1>
        <h2 className={css.imageTextTitle}>Full-stack Software Engineer</h2>
      </div>

    </div>
  );
}

export default Image;
