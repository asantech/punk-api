import React, { Component } from 'react';
import HomePageContext from '../context/HomePageContext';

import NavItem from './common/NavItem';

class NavBar extends Component {
  render() {
    return (
      <HomePageContext.Consumer>
        {homePageContext => {
          const { currentTab, beverages } = homePageContext.state;
          return (
            <ul
              className='nav nav-tabs justify-content-center mb-2'
              id='myTab'
              role='tablist'
            >
              <NavItem id='all' lbl='All' query={beverages['all'].query} />
              <NavItem
                id='pizza-pairable'
                lbl='Pizza Pairable'
                query={beverages['pizza-pairable'].query}
              />
              <NavItem
                id='steak-pairable'
                lbl='Steak Pairable'
                query={beverages['steak-pairable'].query}
              />
            </ul>
          );
        }}
      </HomePageContext.Consumer>
    );
  }
}

export default NavBar;
