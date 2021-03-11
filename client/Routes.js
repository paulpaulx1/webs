import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Code from './components/Code';
import { Art } from './components/Art';
import Experience from './components/Experience';
import SingleArt from './components/SingleArt';
import Contact from './components/Contact'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/about' component={Home} />
      <Route exact path='/code' component={Code} />
      <Route exact path='/art' component={Art} />
      <Route exact path='/exp' component={Experience} />
      <Route exact path='/art:id' component={SingleArt} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </Router>
);
