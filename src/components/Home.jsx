import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { render } from '@testing-library/react';
import _ from 'lodash';

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
        sort: {
          by: 'name',
          order: 'asc',
        },
        isLoading: false,
      },
      'pizza-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'pizza',
        },
        sort: {
          by: 'name',
          order: 'asc',
        },
        isLoading: false,
      },
      'steak-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'steak',
        },
        sort: {
          by: 'name',
          order: 'asc',
        },
        isLoading: false,
      },
    },
    modalDisplay: false,
  };

  componentDidMount() {
    this.loadSelectedBeverages({
      id: 'all',
      query: { page: 1 },
      state: this.state,
    });
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
    const queryStr = this.convertQueryObjToStr(query);
    const selectedBeverages = await beverageServices.getBeverages(
      queryStr ?? ''
    );
    return selectedBeverages;
  };

  loadSelectedBeverages = async ({ id, query, state }) => {
    if (state.beverages[id].isLoading === false) {
      state.beverages[id].isLoading = true;
      this.setState(state);
    }
    try {
      let selectedBeverages = await this.getSelectedBeverages({
        id,
        query,
      });

      const { beverages } = state;

      selectedBeverages = _.orderBy(
        selectedBeverages,
        [beverages[id].sort.by],
        [beverages[id].sort.order]
      );
      beverages[id].list = selectedBeverages;
      beverages[id].query = query;
      beverages[id].isLoading = false;
      toast.success('beverages are loaded successfully.');
    } catch (error) {
      toast.error(error.message);
      state.beverages[id].isLoading = false;
    }
    this.setState(state);
  };

  sortItems = ({ id, sortBy }) => {
    const { sort } = this.state.beverages[id];

    const newState = { ...this.state };

    if (sort.by === sortBy) {
      newState.beverages[id].sort.order = sort.order === 'asc' ? 'desc' : 'asc';
      newState.beverages[id].list = _.orderBy(
        newState.beverages[id].list,
        [newState.beverages[id].sort.by],
        [newState.beverages[id].sort.order]
      );
    } else {
      newState.beverages[id].sort.by = sortBy;
      newState.beverages[id].sort.order = 'asc';
      newState.beverages[id].list = _.orderBy(
        newState.beverages[id].list,
        [newState.beverages[id].sort.by],
        [newState.beverages[id].sort.order]
      );
    }
    this.setState(newState);
  };

  showBeverageInfoModal = beverageInfo => {
    // render(<BeverageInfoModal show={true} />);
    render(
      ReactDOM.createPortal(
        <BeverageInfoModal
          show={true}
          beverageInfo={beverageInfo}
          appContext={this.context}
        />,
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
      this.loadSelectedBeverages({ id, query, state });
    }
  };

  render() {
    return (
      <HomePageContext.Provider
        value={{
          state: this.state,
          tabOnChangeHandler: this.tabOnChangeHandler,
          showBeverageInfoModal: this.showBeverageInfoModal,
          loadSelectedBeverages: this.loadSelectedBeverages,
          sortItems: this.sortItems,
        }}
      >
        <>
          <Link
            className='btn btn-success position-absolute start-0'
            to='/cart'
          >
            Cart ( {this.context.state.cart.length} )
          </Link>
          <Link
            className='btn btn-primary position-absolute'
            to='/favourites'
            style={{ left: '100px' }}
          >
            Favourites ( {this.context.state.favourites.length} )
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
