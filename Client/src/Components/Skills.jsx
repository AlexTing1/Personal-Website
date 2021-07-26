import React from 'react';
import SkillsList from './SkillsList';

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

  ];

  return (
    <div>
      <h1>Tech Skills</h1>
      <SkillsList list={frontEnd} />
    </div>
  );
}

export default Skills;
