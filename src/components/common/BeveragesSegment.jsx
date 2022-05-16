import React, { Component } from 'react';

import GeneralContext from '../../context/GeneralContext';

import BeverageCard from './BeverageCard';
import Pagination from './Pagination';

import styles from './BeveragesSegment.module.css';

class BeveragesSegment extends Component {
  static contextType = GeneralContext;

  render() {
    const { id, title } = this.props;
    const currentBeverages = this.context.state.beverages[id].list;

    return (
      <div className={styles['beverages-segment']}>
        <h2 className='mb-4'>{title}</h2>
        <div className={styles['beverages-container'] + ' mb-2'}>
          {currentBeverages.length === 0 && <p>No beverages found.</p>}
          {currentBeverages.length !== 0 &&
            currentBeverages.map(beverage => (
              <BeverageCard key={beverage.id} beverage={beverage} />
            ))}
        </div>

        <Pagination id={id} />
      </div>
    );
  }
}

export default BeveragesSegment;
