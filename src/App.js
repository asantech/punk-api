import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';

import AppContext from './context/AppContext';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Favourites from './components/Favourites';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    cart: this.getStoredData(sessionStorage.getItem('cart')),
    favourites: this.getStoredData(sessionStorage.getItem('favourites')),
  };

  componentDidMount() {
    if (
      sessionStorage.getItem('cart') === null ||
      this.isExpirationTimePassed(
        this.getStoredExpirationTime(sessionStorage.getItem('cart'))
      )
    )
      sessionStorage.setItem(
        'cart',
        JSON.stringify({
          data: [],
          expirationTime: 0,
        })
      );

    if (
      sessionStorage.getItem('favourites') === null ||
      this.isExpirationTimePassed(
        this.getStoredExpirationTime(sessionStorage.getItem('favourites'))
      )
    )
      sessionStorage.setItem(
        'favourites',
        JSON.stringify({
          data: [],
          expirationTime: 0,
        })
      );
  }

  isItemAdded = (collection, beverageInfo) => {
    const selectedItem = _.filter(collection, function (item) {
      return item.id === beverageInfo.id;
    });
    return selectedItem.length ? true : false;
  };

  addToCollection = (collectionName, item, expirationDuration) => {
    if (!this.isItemAdded(this.state[collectionName], item)) {
      const state = { ...this.state };
      let collection = [...this.state[collectionName]];
      collection.push(item);
      state[collectionName] = collection;
      this.setState(state);
      toast.success(`The item got successfully added to ${collectionName}.`);
      this.setDataToSessionStorage(
        collectionName,
        collection,
        expirationDuration
      );
    } else {
      toast.error(`This item is already deleted from ${collectionName}.`);
    }
  };

  removeFromCollection = (collectionName, item) => {
    if (this.isItemAdded(this.state[collectionName], item)) {
      const state = { ...this.state };
      let collection = [...this.state[collectionName]];
      collection = collection.filter(_item => _item.id !== item.id);
      if (collection.length === 0)
        this.setDataToSessionStorage(collectionName, [], 0);
      state[collectionName] = collection;
      this.setState(state);
      toast.success(`The item got successfully added to ${collectionName}.`);
    } else {
      toast.error(`This item is already deleted from ${collectionName}.`);
    }
  };

  setDataToSessionStorage = (key, data, expirationDuration) => {
    sessionStorage.setItem(
      key,
      JSON.stringify({
        data,
        expirationTime: new Date().getTime() + expirationDuration,
      })
    );
  };

  getStoredExpirationTime = jsonStr => {
    return JSON.parse(jsonStr).expirationTime;
  };

  getStoredData(jsonStr) {
    return JSON.parse(jsonStr).data;
  }

  isExpirationTimePassed = exiprationTime => {
    return new Date().getTime() >= exiprationTime;
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          isItemAdded: this.isItemAdded,
          addToCollection: this.addToCollection,
          removeFromCollection: this.removeFromCollection,
        }}
      >
        <ToastContainer theme='colored' />
        <div className='pt-4'>
          <main className='container position-relative p-0'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/favourites' exact component={Favourites} />
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
