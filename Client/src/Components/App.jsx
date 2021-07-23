import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from './Nav';
import Image from './Image';
import About from './About';
import css from './css/app.css';

function App() {
  return (
    <div className={css.container}>
      <Nav />
      <Image />
      <About />
    </div>
  );
}

export default App;
