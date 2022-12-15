import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storage.services';

import AppContext from './context/AppContext';

import HomePage from 'views/home/homePage/HomePage';
import CartPage from 'views/cart/cartPage/CartPage';
import FavoritesPage from 'views/favorites/favoritesPage/FavoritesPage';
import NotFoundPage from 'views/errors/notFoundPage/NotFoundPage';
import ContactMePage from 'views/contactMe/contactMePage/ContactMePage';
import AppInfoPage from 'views/appInfo/appInfoPage/AppInfoPage';
import AboutMePage from 'views/aboutMe/aboutMePage/AboutMePage';

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
            <Route path='/' exact component={HomePage} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/favorites' exact component={FavoritesPage} />
            <Route path='/contact-me' exact component={ContactMePage} />
            <Route path='/app-info' exact component={AppInfoPage} />
            <Route path='/about-me' exact component={AboutMePage} />
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
