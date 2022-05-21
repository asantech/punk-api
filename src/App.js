import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storageServices';

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

  componentDidMount() {
    const newState = { ...this.state };
    storageServices.initializeStorage('cart');
    storageServices.initializeStorage('favourites');

    newState['cart'] = storageServices.getStoredData('cart');
    newState['favourites'] = storageServices.getStoredData('favourites');

    this.setState(newState);
  }

  setCurrentBeverage = beverageInfo => {
    const newState = { ...this.state };
    newState.currentBeverage = beverageInfo;
    return newState;
  };

  displayBeverageInfoModal = newState => {
    newState.modalDisplay = !this.state.modalDisplay;
    this.setState(newState);
  };

  render() {
    const appContextVal = {
      state: this.state,
      setCurrentBeverage: this.setCurrentBeverage,
      displayBeverageInfoModal: this.displayBeverageInfoModal,
    };

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
