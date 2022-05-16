import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='pt-4'>
        <main className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/not-found' component={NotFound} />
            <Redirect to='not-found' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
