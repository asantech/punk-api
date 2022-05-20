import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';

import AppContext from '../context/AppContext';
import HomePageContext from '../context/HomePageContext';

import * as beverageServices from '../services/beverageServices';

import TabsNavBar from './TabsNavBar';
import TabContents from './TabContents';

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
      newState: this.state,
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

  loadSelectedBeverages = async ({ id, newState }) => {
    if (newState.beverages[id].isLoading === false) {
      newState.beverages[id].isLoading = true;
      this.setState(newState);
    }
    try {
      let selectedBeverages = await this.getSelectedBeverages({
        id,
        query: newState.beverages[id].query,
      });

      const { beverages } = newState;

      selectedBeverages = _.orderBy(
        selectedBeverages,
        [beverages[id].sort.by],
        [beverages[id].sort.order]
      );
      beverages[id].list = selectedBeverages;
      beverages[id].isLoading = false;
      toast.success('beverages are loaded successfully.', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      newState.beverages[id].isLoading = false;
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    this.setState(newState);
  };

  sortItems = ({ id, sortBy }) => {
    const { sort } = this.state.beverages[id];

    const newState = { ...this.state };
    const selectedBeverages = newState.beverages[id];

    if (sort.by === sortBy) {
      selectedBeverages.sort.order = sort.order === 'asc' ? 'desc' : 'asc';
    } else {
      selectedBeverages.sort.by = sortBy;
      selectedBeverages.sort.order = 'asc';
    }
    selectedBeverages.list = _.orderBy(
      selectedBeverages.list,
      [selectedBeverages.sort.by],
      [selectedBeverages.sort.order]
    );
    this.setState(newState);
  };

  tabOnChangeHandler = async ({ id, query }) => {
    const newState = { ...this.state };
    newState.currentTab = id;
    this.setState(newState);

    if (newState.beverages[id].list.length === 0) {
      newState.beverages[id].query = query;
      this.loadSelectedBeverages({ id, newState });
    }
  };

  render() {
    const { cart, favourites } = this.context.state;
    return (
      <HomePageContext.Provider
        value={{
          state: this.state,
          tabOnChangeHandler: this.tabOnChangeHandler,
          loadSelectedBeverages: this.loadSelectedBeverages,
          sortItems: this.sortItems,
        }}
      >
        <>
          <Link
            className='btn btn-success position-absolute start-0'
            to='/cart'
          >
            Cart ( {cart.length} )
          </Link>
          <Link
            className='btn btn-primary position-absolute'
            to='/favourites'
            style={{ left: '100px' }}
          >
            Favourites ( {favourites.length} )
          </Link>

          <TabsNavBar />
          <TabContents />
        </>
      </HomePageContext.Provider>
    );
  }
}

export default Home;
