import React from 'react';
import img from '../../dist/img/website_photo.jpg';
import css from './css/about.css';

function About() {
  return (
    <div className={css.page}>
      <h1 className={css.header}>About Me</h1>
      <div className={css.about}>
        {/* <div className={css.picAndTitle}>
        <h1>About me</h1>

      </div> */}

        <img src={img} className={css.profilePic} alt="" />
        <div className={css.paragraph}>
          <h1>Hello World!</h1>
          <p>
            Ever since I was a kid and got my first Star Wars lego set,
            I knew I wanted to be a builder.
            I felt very happy after finishing a lego set and realized that is what
            I wanted to do for a career so
            I thought I would want to be an architect or civil engineer.

          </p>
          <p>
            However, over the years, I have realized that creation is not necessarily physical
            and discovered that I loved virtual creation
            (software engineering) much more than physical creation.
          </p>
        </div>

      </div>
    </div>

  );
}

export default About;
