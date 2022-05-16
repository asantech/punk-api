import React, { Component } from 'react';

import BeverageCard from './BeverageCard';

import GeneralContext from '../../context/GeneralContext';

import styles from './BeveragesSegment.module.css';

class BeveragesSegment extends Component {
  static contextType = GeneralContext;
  render() {
    const { id, title } = this.props;
    const currentBeverages = this.context.state.beverages[id];

    return (
      <div className={styles['beverages-segment']}>
        <h2 className='mb-4'>{title}</h2>
        <div className={styles['beverages-container']}>
          {currentBeverages.length === 0 && <p>No beverages found.</p>}
          {currentBeverages.length !== 0 &&
            currentBeverages.map(beverage => (
              <BeverageCard key={beverage.id} beverage={beverage} />
            ))}
        </div>
      </div>
    );
  }
}

export default BeveragesSegment;
