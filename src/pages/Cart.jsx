import React, { Component } from 'react';
import { sumBy } from 'lodash';

import AppContext from '../context/AppContext';

import NavBar from '../components/layout/navigation/Navbar/NavBar';

import BeverageCard from '../components/common/Cards/BeverageCard';
import styles from '../components/common/Segments/BeveragesSegment.module.css';

class Cart extends Component {
  static contextType = AppContext;
  render() {
    const { cart } = this.context.state;
    const totalPrice = sumBy(cart, function (item) {
      return item.srm;
    });
    return (
      <>
        <NavBar />
        <div className={styles['beverages-segment']}>
          <h2>Cart ( {cart.length} )</h2>
          <h5 className='mb-4'>Total Price: ( {totalPrice} )</h5>
          <div
            id='cart-page-beverages-container'
            className={styles['beverages-container'] + ' mb-2'}
          >
            {!cart.length && <p className='mt-3'>No items added to the cart</p>}
            {cart.length > 0 &&
              cart.map(beverageInfo => (
                <BeverageCard
                  key={beverageInfo.id}
                  beverageInfo={beverageInfo}
                  scrollContainer={'#cart-page-beverages-container'}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
