import React, { Component } from 'react';

import AppContext from 'context/AppContext';

import BeverageCard from 'components/common/Cards/BeverageCard';
import styles from 'components/common/Segments/BeveragesSegment.module.css';

class Favorites extends Component {
  static contextType = AppContext;

  render() {
    const { favorites } = this.context.state;
    return (
      <>
        <div className={styles['beverages-segment']}>
          <div className={'color-gold fw-bold fs-2 mb-5'}>
            Favorite beverages ( {favorites.length} )
          </div>
          <div
            id='favorites-page-beverages-container'
            className={styles['beverages-container'] + ' mb-2'}
          >
            {!favorites.length && (
              <p className='mt-3'>No favorite items found</p>
            )}
            {favorites.length > 0 &&
              favorites.map(beverageInfo => (
                <BeverageCard
                  key={beverageInfo.id}
                  beverageInfo={beverageInfo}
                  scrollContainer={'#favorites-page-beverages-container'}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
