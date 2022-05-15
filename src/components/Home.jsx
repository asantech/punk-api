import React, { Component } from 'react';

import NavContext from '../context/NavContext';

import TabPane from './common/TabPane';

import AllBeverages from './AllBeverages';
import PizzaPairableBeverages from './PizzaPairableBeverages';
import SteakPairableBeverages from './SteakPairableBeverages';

class Home extends Component {
  static contextType = NavContext;
  state = {};
  render() {
    return (
      <NavContext.Consumer>
        {({ currentTab }) => (
          <div className='tab-content pt-4'>
            <TabPane
              id='all-tab'
              component={AllBeverages}
              isCurrentTab={currentTab === 'all-tab'}
            />
            <TabPane
              id='pizza-pairable-tab'
              component={PizzaPairableBeverages}
              isCurrentTab={currentTab === 'pizza-pairable-tab'}
            />
            <TabPane
              id='steak-pairable-tab'
              component={SteakPairableBeverages}
              isCurrentTab={currentTab === 'steak-pairable-tab'}
            />
          </div>
        )}
      </NavContext.Consumer>
    );
  }
}

export default Home;
