import React, { useContext } from 'react';
import HomePageContext from '../../../context/HomePageContext';

const TabPane = props => {
  const homePageContext = useContext(HomePageContext);
  const { id, component: Component } = props;
  return (
    <div
      className={
        'tab-pane' + (homePageContext.state.currentTab === id ? ' active' : '')
      }
      id={id}
      role='tabpanel'
      aria-labelledby={id}
    >
      <Component />
    </div>
  );
};

export default TabPane;
