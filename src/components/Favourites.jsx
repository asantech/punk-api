import React, { Component } from 'react';

import AppContext from '../context/AppContext';

import NavBar from './NavBar';

import BeverageCard from './common/BeverageCard';
import styles from '../components/common/BeveragesSegment.module.css';

class Favourites extends Component {
  static contextType = AppContext;

  render() {
    const { favourites } = this.context.state;
    return (
      <>
        <NavBar />
        <div className={styles['beverages-segment']}>
          <h2 className='mb-4'>Favourite beverages ( {favourites.length} )</h2>
          <div
            id='favourites-page-beverages-container'
            className={styles['beverages-container'] + ' mb-2'}
          >
            {!favourites.length && (
              <p className='mt-3'>No favourite items found</p>
            )}
            {favourites.length > 0 &&
              favourites.map(beverageInfo => (
                <BeverageCard
                  key={beverageInfo.id}
                  beverageInfo={beverageInfo}
                  scrollContainer={'#favourites-page-beverages-container'}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favourites;
