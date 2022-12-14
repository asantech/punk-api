import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storageServices';

import AppContext from './context/AppContext';

import Home from 'views/home/homePage/HomePage';
import Cart from 'pages/Cart';
import Favorites from 'pages/Favorites';
import NotFoundPage from 'pages/NotFoundPage';

import Header from 'components/layout/header/Header';
import NavBar from 'components/layout/navigation/MainMenu/MainMenu';
import Footer from 'components/layout/footer/Footer';
import BeverageInfoModal from 'components/common/Modals/BeverageInfoModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons-font/dist/bootstrap-icons-font.css';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';

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
        <Header />
        <NavBar />
        <main className='position-relative m-0 p-0'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/favorites' exact component={Favorites} />
            <Route path='/not-found' component={NotFoundPage} />
            <Redirect to='not-found' />
          </Switch>
        </main>
        <Footer />
        <BeverageInfoModal
          show={this.state.modalDisplay}
          beverageInfo={this.state.currentBeverage}
        />
      </AppContext.Provider>
    );
  }
}

export default App;
