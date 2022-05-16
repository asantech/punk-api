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
      all: [],
      'pizza-pairable': [],
      'steak-pairable': [],
    },
  };

  loadSelectedBeverages = async tab => {
    const { beverages } = this.state;

    const { id, queryStr } = tab;

    if (beverages[id].length === 0) {
      const selectedBeverages = await beverageServices.getBeverages(
        queryStr ?? ''
      );
      return selectedBeverages;
    }
  };

  updateBeverages = newState => {
    this.setState(newState);
  };

  showBeverageInfoModal = beverageInfo => {
    // render(<BeverageInfoModal show={true} />);
    console.log(document.getElementById('overlay-root'));
    render(
      ReactDOM.createPortal(
        <BeverageInfoModal show={true} beverageInfo={beverageInfo} />,
        document.getElementById('overlay-root')
      )
    );
    // this.setState({
    //   modalDisplay: true,
    // });
  };

  tabOnChangeHandler = async ({ id, queryStr }) => {
    const state = { ...this.state };
    state.currentTab = id;
    this.setState(state);

    if (state.beverages[id].length === 0) {
      const selectedBeverages = await this.loadSelectedBeverages({
        id,
        queryStr,
      });
      const state = { ...this.state };
      const beverages = { ...this.state.beverages };
      beverages[id] = selectedBeverages;
      state.beverages = beverages;
      this.setState(state);
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
        }}
      >
        <>
          <NavBar />
          <GeneralContext.Consumer>
            {generalContext => {
              const { currentTab } = generalContext.state;
              return (
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
              );
            }}
          </GeneralContext.Consumer>

          {/* {ReactDOM.createPortal(
                <BeverageInfoModal show={this.state.modalDisplay} />,
                document.getElementById('overlay-root')
              )} */}
        </>
      </GeneralContext.Provider>
    );
  }
}

export default Home;
