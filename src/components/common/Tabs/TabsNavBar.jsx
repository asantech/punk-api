import React, { Component } from 'react';

import NavItem from 'components/layout/navigation/mainMenu/NavItem';

class TabsNavBar extends Component {
  render() {
    return (
      <ul
        className='nav nav-tabs justify-content-center mx-auto mb-2 w-75'
        role='tablist'
      >
        <NavItem id='all' lbl='All' />
        <NavItem id='pizza-pairable' lbl='Pizza Pairable' />
        <NavItem id='steak-pairable' lbl='Steak Pairable' />
      </ul>
    );
  }
}

export default TabsNavBar;
