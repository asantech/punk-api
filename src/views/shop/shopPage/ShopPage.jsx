import AppContext from 'context/AppContext';

import BeverageCard from 'components/common/Cards/BeverageCard';
import BeveragesSegment from 'components/common/Segments/BeveragesSegment';

import styles from 'components/common/Segments/BeveragesSegment.module.css';

function ShopPage() {
  return (
    <div className={styles['shop-page']}>
      <div className='fs-3 color-gold mb-5'>Shop Page</div>
      <div
        id='shop-container'
        className={styles['shop-container'] + ' mb-2'}
      ></div>
    </div>
  );
}

export default ShopPage;
