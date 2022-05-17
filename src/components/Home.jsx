import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { render } from '@testing-library/react';

import AppContext from '../context/AppContext';
import HomePageContext from '../context/HomePageContext';

import * as beverageServices from '../services/beverageServices';

import NavBar from '../components/NavBar';
import BeverageInfoModal from '../components/common/BeverageInfoModal';
import TabPane from './common/TabPane';
import BeveragesSegment from './common/BeveragesSegment';

class Home extends Component {
  static contextType = AppContext;
  state = {
    currentTab: 'all',
    beverages: {
      all: {
        list: [],
        query: {
          page: 1,
        },
        isLoading: false,
      },
      'pizza-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'pizza',
        },
        isLoading: false,
      },
      'steak-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'steak',
        },
        isLoading: false,
      },
    },
    modalDisplay: false,
  };

  componentDidMount() {
    this.loadSelectedBeverages({ id: 'all', query: { page: 1 } });
  }

  convertQueryObjToStr(query) {
    let queryStr = '';
    for (let i in query) {
      if (queryStr !== '') queryStr += '&';
      queryStr += i + '=' + query[i];
    }
    return queryStr;
  }

  getSelectedBeverages = async ({ id, query }) => {
    const { beverages } = this.state;
    const queryStr = this.convertQueryObjToStr(query);
    const selectedBeverages = await beverageServices.getBeverages(
      queryStr ?? ''
    );
    return selectedBeverages;
  };

  loadSelectedBeverages = async ({ id, query }) => {
    if (this.state.beverages[id].isLoading === false) {
      const state = { ...this.state };
      state.beverages[id].isLoading = true;
      this.setState(state);
    }
    const state = { ...this.state };
    try {
      const selectedBeverages = await this.getSelectedBeverages({
        id,
        query,
      });

      const beverages = { ...this.state.beverages };
      beverages[id].list = selectedBeverages;
      beverages[id].query = query;
      beverages[id].isLoading = false;
      state.beverages = beverages;
      toast.success('beverages are loaded successfully.');
    } catch (error) {
      toast.error(error.message);
      state.beverages[id].isLoading = false;
    }
    this.setState(state);
  };

  updateBeverages = newState => {
    this.setState(newState);
  };

  showBeverageInfoModal = beverageInfo => {
    // render(<BeverageInfoModal show={true} />);
    render(
      ReactDOM.createPortal(
        <BeverageInfoModal show={true} beverageInfo={beverageInfo} />,
        document.getElementById('overlay-root')
      )
    );
    // const state = { ...this.state };
    // state.modalDisplay = true;
    // this.setState(state);
  };

  tabOnChangeHandler = async ({ id, query }) => {
    const state = { ...this.state };
    state.currentTab = id;
    this.setState(state);

    if (state.beverages[id].list.length === 0) {
      this.loadSelectedBeverages({ id, query });
    }
  };

  render() {
    return (
      <HomePageContext.Provider
        value={{
          state: this.state,
          tabOnChangeHandler: this.tabOnChangeHandler,
          showBeverageInfoModal: this.showBeverageInfoModal,
          updateBeverages: this.updateBeverages,
          loadSelectedBeverages: this.loadSelectedBeverages,
        }}
      >
        <>
          <Link className='btn btn-primary position-absolute end-0' to='/cart'>
            Cart ( {this.context.state.cart.length} )
          </Link>

          <NavBar />
          <div className='tab-content pt-2'>
            <TabPane
              id='all'
              component={() => (
                <BeveragesSegment id='all' title='All Beverages' />
              )}
            />
            <TabPane
              id='pizza-pairable'
              component={() => (
                <BeveragesSegment
                  id='pizza-pairable'
                  title='Pizza Paired Beverages'
                />
              )}
            />
            <TabPane
              id='steak-pairable'
              component={() => (
                <BeveragesSegment
                  id='steak-pairable'
                  title='Steak Paired Beverages'
                />
              )}
            />
          </div>

          {/* {ReactDOM.createPortal(
            <BeverageInfoModal
              show={this.state.modalDisplay}
              beverageInfo={{}}
            />,
            document.getElementById('overlay-root')
          )} */}
        </>
      </HomePageContext.Provider>
    );
  }
}

export default Home;
