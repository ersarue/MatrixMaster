import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Blog from './Blog';
import About from './About';
import VisionMission from './VisionMission';
import Albums from './Albums';
import Contact from './Contact';
import Donation from './Donate';
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome to Pachachaca Foundation </h1>
          <ul className='header'>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/vision-mission'>VisionMission</NavLink>
            </li>
            <li>
              <NavLink to='/albums'>Albums</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/donation'>Donation</NavLink>
            </li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/about' component={About} />
            <Route path='/vision-mission' component={VisionMission} />
            <Route path='/albums' component={Albums} />
            <Route path='/contact' component={Contact} />
            <Route path='/donation' component={Donation} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
