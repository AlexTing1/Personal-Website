import React from 'react';
import SkillsList from './SkillsList';
import css from './css/skills.css';

function Skills() {
  const frontEnd = [
    {
      name: 'CSS 3',
      image: 'https://www.pinclipart.com/picdir/middle/495-4955744_css-logo-png-css-logo-black-and-white.png',
    },
    {
      name: 'CSS Stylized Components',
      image: 'https://www.pinclipart.com/picdir/middle/495-4955744_css-logo-png-css-logo-black-and-white.png',
    },
    {
      name: 'HTML 5',
      image: 'https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png',
    },
    {
      name: 'Javascript',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaDwMXCAs7jDTjs4SqVzXV8SxPXGuwDXRZQ&usqp=CAU',
    },
    {
      name: 'Jquery',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjNUcWh2uEKZvqFK_oRHiUnqI2UR5NAJ1-7nNhPhNsK1tTngnl9kgqdHM60hN7vSp6Sw&usqp=CAU',
    },
    {
      name: 'React',
      image: 'https://img.favpng.com/1/17/24/react-logo-png-favpng-m00s95CAF5ngxbSc2NfvnypRP.jpg',
    },
  ];

  const backEnd = [
    {
      name: 'Node.js',
      image: 'https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png',
    },
    {
      name: 'Express',
      image: 'https://e7.pngegg.com/pngimages/130/641/png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo.png',
    },
    {
      name: 'MySQL',
      image: 'https://e7.pngegg.com/pngimages/252/959/png-clipart-mysql-database-server-microsoft-sql-server-others-text-logo.png',
    },
    {
      name: 'PostgreSQL',
      image: 'https://w7.pngwing.com/pngs/89/118/png-transparent-computer-icons-postgresql-database-others-logo-head-silhouette-thumbnail.png',
    },
    {
      name: 'MongoDB',
      image: 'https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png',
    },
    {
      name: 'Mongoose',
      image: 'https://w7.pngwing.com/pngs/292/793/png-transparent-mongodb-logo-node-js-computer-icons-fontshop-international-angle-logo-black.png',
    },
    {
      name: 'Firebase',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png',
    },
    {
      name: 'REST APIs',
      image: 'https://e7.pngegg.com/pngimages/592/502/png-clipart-logo-application-programming-interface-computer-programming-application-software-api-text-photography-thumbnail.png',
    },
  ];

  return (
    <div>
      <h1>Tech Skills</h1>
      <div className={css.container}>
        <div className={css.front}>
          <SkillsList list={frontEnd} name="Frontend" />
        </div>
        <div className={css.back}>
          <SkillsList list={backEnd} name="Backend" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
