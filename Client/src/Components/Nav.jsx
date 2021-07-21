import React from 'react';
import css from './style.css';

function Nav() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/alexanderting1998/">
        <img className={css.icon} src="https://yt3.ggpht.com/ytc/AKedOLQUW9FJ6oz2WOkfU_2SbFanfDvOXrYVfE4SuaDyrz0=s900-c-k-c0x00ffffff-no-rj" alt="LinkedIn" />
      </a>
      <a href="https://github.com/AlexTing1">
        <img className={css.icon} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
      </a>
    </div>
  );
}

export default Nav;
