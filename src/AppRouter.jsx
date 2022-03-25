import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Projects from './containers/Projects';
import Blog from './containers/Blog';
import NoMatch from './containers/NoMatch';
import ProjectDetails from './containers/ProjectDetails';

export default () => (
  <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/projects"><Projects /></Route>
    <Route path="/projects/:slug"><ProjectDetails /></Route>
    <Route path="/blog"><Blog /></Route>
    <Route path="/about-us"><About /></Route>
    <Route path="/contact-us"><Contact /></Route>

    <Route exact path="/:locale/"><Home /></Route>
    <Route exact path="/:locale/projects"><Projects /></Route>
    <Route path="/:locale/projects/:slug"><ProjectDetails /></Route>
    <Route path="/:locale/blog"><Blog /></Route>
    <Route path="/:locale/about-us"><About /></Route>
    <Route path="/:locale/contact-us"><Contact /></Route>
    <Route path="/:locale/covid19"><Covid19 /></Route>
    <Route path="*"><NoMatch /></Route>
  </Switch>
);
