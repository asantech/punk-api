import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storage.services';

import AppContext from './context/AppContext';
import { BeveragesProvider } from 'context/Beverages';

import MainRouter from 'components/routing/MainRouter';

import Header from 'components/layout/header/Header';
import NavBar from 'components/layout/navigation/mainMenu/MainMenu';
import Footer from 'components/layout/footer/Footer';
import BeverageInfoModal from 'modals/BeverageInfoModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons-font/dist/bootstrap-icons-font.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

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
        <main className='m-0 p-0' style={{ minHeight: '500px' }}>
          <BeveragesProvider>
            <MainRouter />
          </BeveragesProvider>
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
