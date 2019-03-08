/*********************************************************************************
  WEB422 –Assignment04
  I declare that this assignment is my own work in accordance with Seneca Academic
  Policy. No part of this assignment has been copied manually or electronically 
  from any other source (including web sites) or distributed to other students.
 
  Name: Kenneth Yue    Student ID: 127932176     Date: March 8, 2019

********************************************************************************/ 

import React, { Component } from 'react';
import Overview from './Overview/Overview';
import Projects from './Projects/Projects';
import Teams from './Teams/Teams';
import Employees from './Employees/Employees';
import NotFound from './NotFound/NotFound';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (<Overview />)}/>
        <Route exact path='/projects' render={() => (<Projects />)}/>
        <Route exact path='/teams' render={() => (<Teams />)}/>
        <Route exact path='/employees' render={() => (<Employees />)}/>
        <Route render={() => (<NotFound />)}/>
      </Switch>
    );
  }
}

export default App;
