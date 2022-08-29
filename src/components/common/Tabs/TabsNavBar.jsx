import React, { Component } from 'react';

import NavItem from '../../layout/navigation/Navbar/NavItem';

class TabsNavBar extends Component {
  render() {
    return (
      <ul className='nav nav-tabs justify-content-center mb-2' role='tablist'>
        <NavItem id='all' lbl='All' />
        <NavItem id='pizza-pairable' lbl='Pizza Pairable' />
        <NavItem id='steak-pairable' lbl='Steak Pairable' />
      </ul>
    );
  }
}

export default TabsNavBar;
