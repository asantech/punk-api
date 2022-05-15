import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import NavContext from './context/NavContext';

import NavBar from './components/NavBar';

import Home from './components/Home';
import NotFound from './components/NotFound';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    currentTab: 'all-tab',
    setState: this.setState.bind(this), // بررسی شود
  };
  render() {
    return (
      <NavContext.Provider value={this.state}>
        <div className='pt-4'>
          <header>
            <NavBar />
          </header>
          <main className='container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/not-found' component={NotFound} />
              <Redirect to='not-found' />
            </Switch>
          </main>
        </div>
      </NavContext.Provider>
    );
  }
}

export default App;
