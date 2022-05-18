import React, { Component } from 'react';

import HomePageContext from '../../context/HomePageContext';

import BeverageCard from './BeverageCard';
import Pagination from './Pagination';

import styles from './BeveragesSegment.module.css';

class BeveragesSegment extends Component {
  static contextType = HomePageContext;

  render() {
    const { id, title } = this.props;
    const beverages = this.context.state.beverages[id];
    const { list, isLoading } = beverages;

    return (
      <div className={styles['beverages-segment']}>
        <div className='d-flex justify-content-between mb-4'>
          <h2 className='mb-0'>{title}</h2>
          <div>
            <button className='btn btn-light mx-2'>Sort By Name</button>
            <button className='btn btn-light'>Sort By ABV</button>
          </div>
        </div>
        <div className={styles['beverages-container'] + ' mb-2'}>
          {isLoading && (
            <div>
              Beverages are loading, please wait.
              <div
                className='spinner-grow text-primary mx-2'
                role='status'
              ></div>
            </div>
          )}
          {!isLoading && list.length === 0 && <p>No beverages found.</p>}
          {!isLoading &&
            list.length !== 0 &&
            list.map(beverage => (
              <BeverageCard key={beverage.id} beverage={beverage} />
            ))}
        </div>

        <Pagination id={id} />
      </div>
    );
  }
}

export default BeveragesSegment;
