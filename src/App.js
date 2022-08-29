import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storageServices';

import AppContext from './context/AppContext';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

import BeverageInfoModal from './components/common/Modals/BeverageInfoModal';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    cart: [],
    favorites: [],
    modalDisplay: false,
    currentBeverage: {},
  };

  componentDidMount() {
    const newState = { ...this.state };
    storageServices.initializeStorage('cart');
    storageServices.initializeStorage('favorites');

    newState['cart'] = storageServices.getStoredData('cart');
    newState['favorites'] = storageServices.getStoredData('favorites');

    this.setState(newState);
  }

  displayBeverageInfoModal = newState => {
    newState.modalDisplay = !this.state.modalDisplay;
    this.setState(newState);
  };

  render() {
    const appContextVal = {
      state: this.state,
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
              <Route path='/favorites' exact component={Favorites} />
              <Route path='/not-found' component={NotFound} />
              <Redirect to='not-found' />
            </Switch>
          </main>
        </div>
        <BeverageInfoModal
          show={this.state.modalDisplay}
          beverageInfo={this.state.currentBeverage}
        />
      </AppContext.Provider>
    );
  }
}

export default App;
