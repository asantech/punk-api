import React, { Component } from 'react';

import LazyLoad from 'react-lazyload';

import AppContext from '../../../context/AppContext';
import * as beverageServices from '../../../services/beverageServices';
import * as collectionServices from '../../../services/collectionServices';

import ConditionalIcon from '../Icons/ConditionalIcon';

import styles from './BeverageCard.module.css';

import '../../../../node_modules/bootstrap-icons-font/dist/bootstrap-icons-font.css';

class BeverageCard extends Component {
  static contextType = AppContext;

  render() {
    const { beverageInfo, scrollContainer } = this.props;
    const { name, image_url, tagline, abv, srm } = beverageInfo;
    const { state, displayBeverageInfoModal } = this.context;

    return (
      <div
        className={styles['beverage-card'] + ' card'}
        onClick={() =>
          displayBeverageInfoModal(
            beverageServices.setCurrentBeverage(state, beverageInfo),
            true
          )
        }
      >
        <div className='d-flex justify-content-between'>
          <ConditionalIcon
            isOffCondition={
              !collectionServices.isItemAdded(state.cart, beverageInfo)
            }
            offIconCSSClass='bi-cart'
            onIconCSSClass='bi-cart-plus-fill'
            color='green'
          />
          <ConditionalIcon
            isOffCondition={
              !collectionServices.isItemAdded(state.favourites, beverageInfo)
            }
            offIconCSSClass='bi-star'
            onIconCSSClass='bi-star-fill'
            color='gold'
          />
        </div>
        <LazyLoad
          height={170}
          once
          scrollContainer={scrollContainer}
          overflow={true}
        >
          <div className={styles['img-box'] + ' p-3'}>
            <img src={image_url} alt={name} />
          </div>
        </LazyLoad>

        <div className='card-body'>
          <h5 className={styles['card-title'] + ' mb-4'}>
            {name}{' '}
            <span className='small text-muted'>
              ( {abv} - {srm} )
            </span>
          </h5>
          <p className={styles['card-text']}>{tagline}</p>
        </div>
      </div>
    );
  }
}

export default BeverageCard;
