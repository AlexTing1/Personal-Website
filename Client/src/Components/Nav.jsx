import React, { useState } from 'react';
import css from './css/nav.css';

function Nav() {
  const [pageLinks, setPageLinks] = useState([
    {
      id: '1',
      href: '#about',
      text: 'About',
      isActive: false,
    },
    {
      id: '2',
      href: '#techList',
      text: 'Tech Skills',
      isActive: false,
    },
  ]);
  const [activeLink, setActiveLink] = useState(null);

  function onClick(event) {
    console.log(event.target);
    console.log(event.target.id);
    console.log(activeLink);
    setActiveLink(event.target.id);
  }

  return (
    <nav className={css.nav}>
      <span className={css.name}>Alex Ting</span>
      <div className={css.pageLinks}>
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
