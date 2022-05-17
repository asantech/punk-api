import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppContext from './context/AppContext';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    cart: [],
  };

  addToCart = beverageInfo => {
    const state = { ...this.state };
    const cart = [...this.state.cart];
    cart.push(beverageInfo);
    state.cart = cart;
    this.setState(state);
  };

  removeFromCart = beverageInfo => {
    const state = { ...this.state };
    const cart = [...this.state.cart];
    cart = cart.filter(b => b.id !== beverageInfo.id);
    state.cart = cart;
    this.setState(state);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
        }}
      >
        <ToastContainer theme='colored' />
        <div className='pt-4'>
          <main className='container position-relative p-0'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/not-found' component={NotFound} />
              <Redirect to='not-found' />
            </Switch>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
