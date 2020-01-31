import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import {Textbox} from './components/Textbox';
import {About}from './components/About';

const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Textbox />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
