import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Nav';

function App() {

  return (
    <Router>
        <div>
          <Nav />
        </div>
    </Router>
  )
}

export default App;