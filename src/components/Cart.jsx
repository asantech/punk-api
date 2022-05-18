import React, { Component } from 'react';
import _ from 'lodash';

import AppContext from '../context/AppContext';

import BeverageCard from './common/BeverageCard';
import styles from '../components/common/BeveragesSegment.module.css';

class Cart extends Component {
  static contextType = AppContext;
  state = {};
  render() {
    const { cart } = this.context.state;
    const totalPrice = _.sumBy(cart, function (item) {
      return item.srm;
    });
    return (
      <div className={styles['beverages-segment']}>
        <h2>Cart ( {cart.length} )</h2>
        <h5 className='mb-4'>Total Price: ( {totalPrice} )</h5>
        <div className={styles['beverages-container'] + ' mb-2'}>
          {!cart.length && <p className='mt-3'>No items added to the cart</p>}
          {cart.length > 0 &&
            cart.map(beverageInfo => (
              <BeverageCard key={beverageInfo.id} beverage={beverageInfo} />
            ))}
        </div>
      </div>
    );
  }
}

export default Cart;
