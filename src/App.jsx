import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import * as storageServices from './services/storage.services';

import { AppContext } from './context/App';
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

function App() {
  const appContext = useContext(AppContext);
  const { appState, setAppState } = appContext;

  useEffect(() => {
    const newAppState = { ...appState };
    storageServices.initializeStorage('cart');
    storageServices.initializeStorage('favorites');

    newAppState['cart'] = storageServices.getStoredData('cart');
    newAppState['favorites'] = storageServices.getStoredData('favorites');

    setAppState(newAppState);
  }, []);

  return (
    <>
      <ToastContainer theme='colored' />
      <Header />
      <NavBar />
      <main className='m-0 p-0' style={{ minHeight: '500px' }}>
        <BeveragesProvider>
          <MainRouter />
        </BeveragesProvider>
      </main>
      <Footer />
      <BeverageInfoModal />
    </>
  );
}

export default App;
