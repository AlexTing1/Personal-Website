import React, { useState } from 'react';
import css from './css/nav.css';

function Nav() {
  const pageLinks = [
    {
      id: '1',
      href: '#about',
      text: 'About',
    },
    {
      id: '2',
      href: '#techList',
      text: 'Tech Skills',
    },
    {
      id: '3',
      href: '#projects',
      text: 'Projects',
    },
  ];
  const [activeLink, setActiveLink] = useState(null);

  function onClick(event) {
    setActiveLink(event.target.id);
  }

  function reset() {
    setActiveLink(null);
  }

  return (
    <nav className={css.nav}>
      <div className={css.pageLinks}>
        <a href="#image" className={css.active} onClick={reset}>
          <span className={css.name}>Alex Ting</span>
        </a>
        {pageLinks.map((linkObject) => {
          if (activeLink === linkObject.id) {
            return (
              <a href={linkObject.href} className={css.active} onClick={onClick}>
                <span id={linkObject.id} className={css.text}>{linkObject.text}</span>
              </a>
            );
          }
          return (
            <a href={linkObject.href} className={css.link} onClick={onClick}>
              <span id={linkObject.id} className={css.text}>{linkObject.text}</span>
            </a>
          );
        })}
      </div>
      <div className={css.iconLinks}>
        <a href="https://www.linkedin.com/in/alexanderting1998/">
          <img className={css.icon} src="https://yt3.ggpht.com/ytc/AKedOLQUW9FJ6oz2WOkfU_2SbFanfDvOXrYVfE4SuaDyrz0=s900-c-k-c0x00ffffff-no-rj" alt="LinkedIn" />
        </a>
        <a href="https://github.com/AlexTing1">
          <img className={css.icon} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
        </a>
      </div>

    </nav>
  );
}

export default Nav;
