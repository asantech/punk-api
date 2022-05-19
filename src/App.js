import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash';

import AppContext from './context/AppContext';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Favourites from './components/Favourites';

import BeverageInfoModal from './components/common/BeverageInfoModal';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    cart: [],
    favourites: [],
    modalDisplay: false,
    currentBeverage: {},
  };

  setDataToStorage = (key, data, expirationDuration) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        expirationTime: new Date().getTime() + expirationDuration * 1000,
      })
    );
  };

  getStoredExpirationTime = storageKey => {
    const storedVal = localStorage.getItem(storageKey);
    return JSON.parse(storedVal).expirationTime;
  };

  getStoredData(storageKey) {
    const storedVal = localStorage.getItem(storageKey);
    return JSON.parse(storedVal).data;
  }

  doesStorageKeyExist(storageKey) {
    return localStorage.getItem(storageKey) === null ? false : true;
  }

  isExpirationTimePassed = exiprationTime => {
    return new Date().getTime() >= exiprationTime;
  };

  componentDidMount() {
    let hasStoredData = false;
    const newState = { ...this.state };
    if (
      !this.doesStorageKeyExist('cart') ||
      this.isExpirationTimePassed(this.getStoredExpirationTime('cart'))
    ) {
      this.setDataToStorage('cart', [], 0);
    } else {
      newState['cart'] = this.getStoredData('cart');
      hasStoredData = true;
    }

    if (
      !this.doesStorageKeyExist('favourites') ||
      this.isExpirationTimePassed(this.getStoredExpirationTime('favourites'))
    ) {
      this.setDataToStorage('favourites', [], 0);
    } else {
      newState['favourites'] = this.getStoredData('favourites');
      hasStoredData = true;
    }

    if (hasStoredData) this.setState(newState);
  }

  isItemAdded = (collection, beverageInfo) => {
    const selectedItem = _.filter(collection, function (item) {
      return item.id === beverageInfo.id;
    });
    return selectedItem.length ? true : false;
  };

  setCurrentBeverage = beverageInfo => {
    const newState = { ...this.state };
    newState.currentBeverage = beverageInfo;
    return newState;
  };

  addToCollection = (collectionName, item, newState, expirationDuration) => {
    if (!this.isItemAdded(this.state[collectionName], item)) {
      let collection = [...this.state[collectionName]];
      collection.push(item);
      this.setDataToStorage(collectionName, collection, expirationDuration);
      newState[collectionName] = collection;
      toast.success(`The item got successfully added to ${collectionName}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error(`This item is already added to ${collectionName}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    return newState;
  };

  removeFromCollection = (collectionName, item, newState) => {
    if (this.isItemAdded(this.state[collectionName], item)) {
      let collection = [...this.state[collectionName]];
      collection = collection.filter(_item => _item.id !== item.id);
      if (collection.length === 0) this.setDataToStorage(collectionName, [], 0);
      newState[collectionName] = collection;
      toast.success(
        `The item got successfully removed from ${collectionName}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } else {
      toast.error(`This item is already removed from ${collectionName}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    return newState;
  };

  displayBeverageInfoModal = newState => {
    newState.modalDisplay = !this.state.modalDisplay;
    this.setState(newState);
  };

  render() {
    const appContextVal = {
      state: this.state,
      isItemAdded: this.isItemAdded,
      addToCollection: this.addToCollection,
      removeFromCollection: this.removeFromCollection,
      setCurrentBeverage: this.setCurrentBeverage,
      displayBeverageInfoModal: this.displayBeverageInfoModal,
    };

    // console.log(
    //   'cart',
    //   !this.doesStorageKeyExist('cart') ||
    //     this.isExpirationTimePassed(this.getStoredExpirationTime('cart'))
    // );
    // console.log(
    //   'favourites',
    //   !this.doesStorageKeyExist('favourites') ||
    //     this.isExpirationTimePassed(this.getStoredExpirationTime('favourites'))
    // );

    // if (
    //   !this.doesStorageKeyExist('cart') ||
    //   this.isExpirationTimePassed(this.getStoredExpirationTime('cart'))
    // )
    //   this.setDataToStorage('cart', [], 0);

    // if (
    //   !this.doesStorageKeyExist('favourites') ||
    //   this.isExpirationTimePassed(this.getStoredExpirationTime('favourites'))
    // )
    //   this.setDataToStorage('favourites', [], 0);

    return (
      <AppContext.Provider value={appContextVal}>
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
        {
          <BeverageInfoModal
            show={this.state.modalDisplay}
            beverageInfo={this.state.currentBeverage}
            appContext={appContextVal} // بعدا اصلاح شود و از context گرفته شود
          />
        }
      </AppContext.Provider>
    );
  }
}

export default App;
