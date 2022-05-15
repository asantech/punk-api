import React, { Component } from 'react';
import NavContext from '../context/NavContext';

import NavItem from './common/NavItem';

class NavBar extends Component {
  static contextType = NavContext;
  state = {};

  tabOnChangeHandler = e => {
    this.context.setState({
      currentTab: e.target.id,
    });
  };

  render() {
    return (
      <>
        <NavContext.Consumer>
          {({ currentTab }) => (
            <ul
              className='nav nav-tabs justify-content-center'
              id='myTab'
              role='tablist'
            >
              <NavItem
                id='all-tab'
                lbl='All'
                isCurrentTab={currentTab === 'all-tab'}
                onChange={this.tabOnChangeHandler}
              />
              <NavItem
                id='pizza-pairable-tab'
                lbl='Pizza Pairable'
                isCurrentTab={currentTab === 'pizza-pairable-tab'}
                onChange={this.tabOnChangeHandler}
              />
              <NavItem
                id='steak-pairable-tab'
                lbl='Steak Pairable'
                isCurrentTab={currentTab === 'steak-pairable-tab'}
                onChange={this.tabOnChangeHandler}
              />
            </ul>
          )}
        </NavContext.Consumer>
      </>
    );
  }
}

export default NavBar;
