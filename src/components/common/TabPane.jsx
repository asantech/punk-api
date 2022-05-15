import React from 'react';

const TabPane = props => {
  const { id, component: Component, isCurrentTab } = props;
  return (
    <div
      className={'tab-pane' + (isCurrentTab ? ' active' : '')}
      id={id}
      role='tabpanel'
      aria-labelledby={id}
    >
      <Component />
    </div>
  );
};

export default TabPane;
