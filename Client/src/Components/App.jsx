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
import Skills from './Skills';
import css from './css/app.css';

function App() {
  return (
    <Router>
      <div className={css.container}>
        <Nav />
        <Image />
        <About />
        <Skills />
      </div>
      <Switch>
        <Route
          path="/linkedIn"
          component={() => {
            window.location.href = 'https://www.linkedin.com/in/alexanderting1998/';
            return null;
          }}
        />
      </Switch>
    </Router>

  );
}

export default App;
