import React, { Component } from 'react';
import GeneralContext from '../context/GeneralContext';

import NavItem from './common/NavItem';

class NavBar extends Component {
  render() {
    return (
      <GeneralContext.Consumer>
        {generalContext => {
          const { currentTab } = generalContext.state;
          return (
            <ul
              className='nav nav-tabs justify-content-center'
              id='myTab'
              role='tablist'
            >
              <NavItem id='all' lbl='All' isCurrentTab={currentTab === 'all'} />
              <NavItem
                id='pizza-pairable'
                lbl='Pizza Pairable'
                queryStr='food=pizza'
                isCurrentTab={currentTab === 'pizza-pairable'}
              />
              <NavItem
                id='steak-pairable'
                lbl='Steak Pairable'
                queryStr='food=steak'
                isCurrentTab={currentTab === 'steak-pairable'}
              />
            </ul>
          );
        }}
      </GeneralContext.Consumer>
    );
  }
}

export default NavBar;
