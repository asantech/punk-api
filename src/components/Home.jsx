import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import GeneralContext from '../context/GeneralContext';

import NavBar from '../components/NavBar';

import * as beverageServices from '../services/beverageServices';

import BeverageInfoModal from '../components/common/BeverageInfoModal';
import TabPane from './common/TabPane';
import BeveragesSegment from './common/BeveragesSegment';

class Home extends Component {
  static contextType = GeneralContext;

  state = {
    currentTab: 'all',
    modalDisplay: false,
    beverages: {
      all: {
        list: [],
        query: {
          page: 1,
        },
      },
      'pizza-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'pizza',
        },
      },
      'steak-pairable': {
        list: [],
        query: {
          page: 1,
          food: 'steak',
        },
      },
    },
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
    const selectedBeverages = await this.getSelectedBeverages({
      id,
      query,
    });
    const state = { ...this.state };
    const beverages = { ...this.state.beverages };
    beverages[id].list = selectedBeverages;
    beverages[id].query = query;
    state.beverages = beverages;
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
      <GeneralContext.Provider
        value={{
          state: this.state,
          tabOnChangeHandler: this.tabOnChangeHandler,
          showBeverageInfoModal: this.showBeverageInfoModal,
          updateBeverages: this.updateBeverages,
          loadSelectedBeverages: this.loadSelectedBeverages,
        }}
      >
        <>
          <NavBar />
          <GeneralContext.Consumer>
            {generalContext => {
              const { currentTab } = generalContext.state;
              return (
                <>
                  <div className='tab-content pt-4'>
                    <TabPane
                      id='all'
                      component={() => (
                        <BeveragesSegment id='all' title='All Beverages' />
                      )}
                      isCurrentTab={currentTab === 'all'}
                    />
                    <TabPane
                      id='pizza-pairable'
                      component={() => (
                        <BeveragesSegment
                          id='pizza-pairable'
                          title='Pizza Paired Beverages'
                        />
                      )}
                      isCurrentTab={currentTab === 'pizza-pairable'}
                    />
                    <TabPane
                      id='steak-pairable'
                      component={() => (
                        <BeveragesSegment
                          id='steak-pairable'
                          title='Steak Paired Beverages'
                          queryStr='food=steak'
                        />
                      )}
                      isCurrentTab={currentTab === 'steak-pairable'}
                    />
                  </div>
                </>
              );
            }}
          </GeneralContext.Consumer>
          {/* {ReactDOM.createPortal(
            <BeverageInfoModal
              show={this.state.modalDisplay}
              beverageInfo={{}}
            />,
            document.getElementById('overlay-root')
          )} */}
        </>
      </GeneralContext.Provider>
    );
  }
}

export default Home;
