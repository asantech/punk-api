import React, { Component } from 'react';

import AppContext from '../../context/AppContext';

import '../../../node_modules/bootstrap-icons-font/dist/bootstrap-icons-font.css';

import styles from './BeverageCard.module.css';

class BeverageCard extends Component {
  static contextType = AppContext;

  render() {
    const { beverageInfo } = this.props;
    const { name, image_url, tagline, abv } = beverageInfo;
    const { state, isItemAdded, showBeverageInfoModal } = this.context;
    return (
      <div
        className={styles['beverage-card'] + ' card'}
        onClick={() => showBeverageInfoModal(beverageInfo)}
      >
        <div className='d-flex justify-content-between'>
          <i
            className={
              'bi mt-2 mx-2' +
              (!isItemAdded(state.cart, beverageInfo)
                ? ' bi-cart'
                : ' bi-cart-plus-fill')
            }
            style={{ color: 'green' }}
          ></i>
          <i
            className={
              'bi mt-2 mx-2' +
              (!isItemAdded(state.favourites, beverageInfo)
                ? ' bi-star'
                : ' bi-star-fill')
            }
            style={{ color: 'gold' }}
          ></i>
        </div>
        <div className={styles['img-box'] + ' p-3'}>
          <img src={image_url} className='' alt={name} />
        </div>
        <div className='card-body'>
          <h5 className={styles['card-title'] + ' mb-4'}>
            {name} <span className='small text-muted'>( {abv} )</span>
          </h5>
          <p className={styles['card-text']}>{tagline}</p>
        </div>
      </div>
    );
  }
}

export default BeverageCard;
