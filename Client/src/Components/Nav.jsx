import React from 'react';
import css from './css/nav.css';

function Nav() {
  return (
    <nav className={css.nav}>
      <span>Alex Ting</span>
      <a href="https://www.linkedin.com/in/alexanderting1998/">
        <img className={css.icon} src="https://yt3.ggpht.com/ytc/AKedOLQUW9FJ6oz2WOkfU_2SbFanfDvOXrYVfE4SuaDyrz0=s900-c-k-c0x00ffffff-no-rj" alt="LinkedIn" />
      </a>
      <a href="https://github.com/AlexTing1">
        <img className={css.icon} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
      </a>
    </nav>
  );
}

export default Nav;
