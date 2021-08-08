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
      <div className={css.carousel}>
        <Carousel>

          {images.map((image) => (
            <div>
              <img src={image} className={css.imgModal} alt="" />
            </div>
          ))}

        </Carousel>
      </div>
    </div>

  );
}

export default App;
