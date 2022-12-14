import { Component } from 'react';
import { toast } from 'react-toastify';
import { orderBy } from 'lodash';

import AppContext from 'context/AppContext';
import HomePageContext from 'context/HomePageContext';

import * as beverageServices from 'services/beverageServices';

import AdsCarousel from '../adsCarousel/AdsCarousel';
import RandomBeverages from '../randomBeverages/RandomBeverages';
import Categories from '../categories/Categories';

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

  loadSelectedBeverages = async ({ id, newState }) => {
    if (newState.beverages[id].isLoading === false) {
      newState.beverages[id].isLoading = true;
      this.setState(newState);
    }
    try {
      let selectedBeverages = await beverageServices.getSelectedBeverages({
        query: newState.beverages[id].query,
      });

      const { beverages } = newState;

      selectedBeverages = orderBy(
        selectedBeverages,
        [beverages[id].sort.by],
        [beverages[id].sort.order]
      );
      beverages[id].list = selectedBeverages;
      beverages[id].isLoading = false;
      if (beverages[id].list.length)
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
    selectedBeverages.list = orderBy(
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
    return (
      <HomePageContext.Provider
        value={{
          state: this.state,
          tabOnChangeHandler: this.tabOnChangeHandler,
          loadSelectedBeverages: this.loadSelectedBeverages,
          sortItems: this.sortItems,
        }}
      >
        <AdsCarousel />
        <RandomBeverages />
        <Categories />
      </HomePageContext.Provider>
    );
  }
}

export default Home;
