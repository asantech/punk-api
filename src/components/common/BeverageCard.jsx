import React, { Component } from 'react';

import AppContext from '../../context/AppContext';
import HomePageContext from '../../context/HomePageContext';

import '../../../node_modules/bootstrap-icons-font/dist/bootstrap-icons-font.css';

import styles from './BeverageCard.module.css';

class BeverageCard extends Component {
  static contextType = HomePageContext;

  render() {
    const { name, image_url, tagline } = this.props.beverage;
    return (
      <AppContext.Consumer>
        {appContext => {
          const { beverage } = this.props;
          const { state, isItemAdded } = appContext;
          return (
            <div
              className={styles['beverage-card'] + ' card'}
              onClick={() => this.context.showBeverageInfoModal(beverage)}
            >
              <div className='d-flex justify-content-between'>
                <i
                  className={
                    'bi mt-2 mx-2' +
                    (!isItemAdded(state.cart, beverage)
                      ? ' bi-cart'
                      : ' bi-cart-plus-fill')
                  }
                  style={{ color: 'green' }}
                ></i>
                <i
                  className={
                    'bi mt-2 mx-2' +
                    (!isItemAdded(state.favourites, beverage)
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
                <h5 className={styles['card-title'] + ' mb-4'}>{name}</h5>
                <p className={styles['card-text']}>{tagline}</p>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default BeverageCard;
