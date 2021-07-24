import React from 'react';
import { Link } from 'react-router-dom';
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
          <br />
          <div id="button" className={css.buttons}>
            <a href="https://www.linkedin.com/in/alexanderting1998/" className={css.link}>
              <button type="button" className={css.myButton}>
                <img src="https://yt3.ggpht.com/ytc/AKedOLQUW9FJ6oz2WOkfU_2SbFanfDvOXrYVfE4SuaDyrz0=s900-c-k-c0x00ffffff-no-rj" alt="linked" className={css.iconLinks} />
                <span className={css.text}>LinkedIn</span>
              </button>
            </a>
            <a href="https://github.com/AlexTing1" className={css.link}>
              <button type="button" className={css.myButton}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" className={css.iconLinks} />
                <span className={css.text}>Github</span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>

  );
}

export default About;
