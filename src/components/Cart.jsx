import React, { Component } from 'react';

import AppContext from '../context/AppContext';

import BeverageCard from './common/BeverageCard';
import styles from '../components/common/BeveragesSegment.module.css';

class Cart extends Component {
  static contextType = AppContext;
  state = {};
  render() {
    return (
      <div className={styles['beverages-segment']}>
        <h2>Cart ( {this.context.state.cart.length} )</h2>
        <div className={styles['beverages-container'] + ' mb-2'}>
          {this.context.state.cart.map(beverageInfo => (
            <BeverageCard key={beverageInfo.id} beverage={beverageInfo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
