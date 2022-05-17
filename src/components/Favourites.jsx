import React, { Component } from 'react';

import AppContext from '../context/AppContext';

import BeverageCard from './common/BeverageCard';
import styles from '../components/common/BeveragesSegment.module.css';

class Favourites extends Component {
  static contextType = AppContext;
  state = {};
  render() {
    return (
      <div className={styles['beverages-segment']}>
        <h2>Favourite beverages ( {this.context.state.favourites.length} )</h2>
        <div className={styles['beverages-container'] + ' mb-2'}>
          {this.context.state.favourites.map(beverageInfo => (
            <BeverageCard key={beverageInfo.id} beverage={beverageInfo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favourites;
