import React from 'react';
import css from './css/image.css';

function Image() {
  return (
    <div id="image" className={css.container}>
      <img className={css.image} src="https://www.tahiti.com/images1/thumbs/BOBILM-Beach-1200x720.jpg" alt="borabora" />
      <h2 className={css.imageText}>Alex Ting</h2>
    </div>
  );
}

export default Image;
