import React, { Component } from 'react';

import TabPane from './TabPane';
import BeveragesSegment from 'components/common/segments/BeveragesSegment';

class TabContents extends Component {
  render() {
    return (
      <div className='tab-content pt-2 mx-auto w-75'>
        <TabPane
          id='all'
          component={() => <BeveragesSegment id='all' title='All Beverages' />}
        />
        <TabPane
          id='pizza-pairable'
          component={() => (
            <BeveragesSegment
              id='pizza-pairable'
              title='Pizza Paired Beverages'
            />
          )}
        />
        <TabPane
          id='steak-pairable'
          component={() => (
            <BeveragesSegment
              id='steak-pairable'
              title='Steak Paired Beverages'
            />
          )}
        />
      </div>
    );
  }
}

export default TabContents;
