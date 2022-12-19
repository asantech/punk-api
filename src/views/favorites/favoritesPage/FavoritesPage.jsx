import { useContext } from 'react';

import { AppContext } from 'context/App';

import BeverageCard from 'components/common/cards/BeverageCard';
import styles from 'components/common/segments/BeveragesSegment.module.css';

function Favorites() {
  const { appState } = useContext(AppContext);
  const { favorites } = appState;

  return (
    <div className={styles['beverages-segment'] + ' db-page-padding-1'}>
      <div className={'db-color-gold fw-bold fs-2 mb-5'}>
        Favorite beverages ( {favorites.length} )
      </div>
      <div
        id='favorites-page-beverages-container'
        className={styles['beverages-container'] + ' mb-2'}
      >
        {!favorites.length && <p className='mt-3'>No favorite items found</p>}
        {favorites.length > 0 &&
          favorites.map(beverage => (
            <BeverageCard
              key={beverage.id}
              beverage={beverage}
              scrollContainer={'#favorites-page-beverages-container'}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
