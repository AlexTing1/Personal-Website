import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nav from './Nav';
import Image from './Image';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import css from './css/app.css';
import puppy from '../../dist/img/puppyRanker';

function App() {
  const { images } = puppy;

  return (
    <div>
      <div className={css.container}>
        <Nav />
        <Image />
        <About />
        <Skills />
        <Projects />
      </div>
      <div>
        <Carousel>

          <div>
            <img src={images[0]} alt="" />
          </div>

          <div>
            <img src={images[1]} alt="" />
          </div>

          <div>
            <img src={images[2]} alt="" />
          </div>

          <div>
            <img src={images[3]} alt="" />
          </div>

        </Carousel>
      </div>
    </div>

  );
}

export default App;
