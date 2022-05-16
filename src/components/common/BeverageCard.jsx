import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';

import BeverageInfoModal from './BeverageInfoModal';

import GeneralContext from '../../context/GeneralContext';

import { Star } from 'react-bootstrap-icons';

import styles from './BeverageCard.module.css';

class BeverageCard extends Component {
  static contextType = GeneralContext;

  render() {
    const { name, image_url, tagline } = this.props.beverage;
    return (
      <div className={styles['beverage-card'] + ' card'}>
        <Star className='mt-2 mx-2' />
        <div className={styles['img-box'] + ' p-3'}>
          <img src={image_url} className='' alt={name} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className={styles['card-text']}>{tagline}</p>
        </div>
      </div>
    );
  }
}

export default BeverageCard;
