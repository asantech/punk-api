import React, { Component } from 'react';

import HomePageContext from '../../context/HomePageContext';

import { Star } from 'react-bootstrap-icons';

import styles from './BeverageCard.module.css';

class BeverageCard extends Component {
  static contextType = HomePageContext;

  render() {
    const { name, image_url, tagline } = this.props.beverage;
    return (
      <div
        className={styles['beverage-card'] + ' card'}
        onClick={() => this.context.showBeverageInfoModal(this.props.beverage)}
      >
        <Star className='mt-2 mx-2' />
        <div className={styles['img-box'] + ' p-3'}>
          <img src={image_url} className='' alt={name} />
        </div>
        <div className='card-body'>
          <h5 className={styles['card-title'] + ' mb-4'}>{name}</h5>
          <p className={styles['card-text']}>{tagline}</p>
        </div>
      </div>
    );
  }
}

export default BeverageCard;
