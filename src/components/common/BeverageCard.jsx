import React, { Component } from 'react';

import LazyLoad from 'react-lazyload';

import AppContext from '../../context/AppContext';

import '../../../node_modules/bootstrap-icons-font/dist/bootstrap-icons-font.css';

import styles from './BeverageCard.module.css';

import * as collectionServices from '../../services/collectionServices';

class BeverageCard extends Component {
  static contextType = AppContext;

  render() {
    const { beverageInfo, scrollContainer } = this.props;
    const { name, image_url, tagline, abv } = beverageInfo;
    const { state, displayBeverageInfoModal, setCurrentBeverage } =
      this.context;

    return (
      <div
        className={styles['beverage-card'] + ' card'}
        onClick={() =>
          displayBeverageInfoModal(setCurrentBeverage(beverageInfo), true)
        }
      >
        <div className='d-flex justify-content-between'>
          <i
            className={
              'bi mt-2 mx-2' +
              (!collectionServices.isItemAdded(state.cart, beverageInfo)
                ? ' bi-cart'
                : ' bi-cart-plus-fill')
            }
            style={{ color: 'green' }}
          ></i>
          <i
            className={
              'bi mt-2 mx-2' +
              (!collectionServices.isItemAdded(state.favourites, beverageInfo)
                ? ' bi-star'
                : ' bi-star-fill')
            }
            style={{ color: 'gold' }}
          ></i>
        </div>
        <div className={styles['img-box'] + ' p-3'}>
          <LazyLoad
            height={170}
            once
            scrollContainer={scrollContainer}
            overflow={true}
          >
            <img src={image_url} alt={name} />
          </LazyLoad>
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
