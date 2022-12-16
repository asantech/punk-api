import { useContext, useEffect } from 'react';

import { BeveragesContext } from 'context/Beverages';

import BeveragesSegment from 'components/common/tegments/BeveragesSegment';
import Pagination from 'components/layout/navigation/qagination/Pagination';

import styles from 'components/common/segments/BeveragesSegment.module.css';

function ShopPage() {
  const { beverages, loadSelectedBeverages, isLoading } =
    useContext(BeveragesContext);

  const { list, query } = beverages;

  function goToPage(selectedPage) {
    const newQuery = { ...query };
    newQuery.page = selectedPage;
    loadSelectedBeverages(newQuery);
  }

  useEffect(() => {
    loadSelectedBeverages(query);
  }, []);

  return (
    <div className={styles['shop-page'] + ' db-page-padding-1'}>
      <div className='db-color-gold fw-bold fs-2 mb-4'>Shop Page</div>
      <div
        id='shop-container'
        className={styles['shop-container'] + ' mb-2'}
      ></div>
      <BeveragesSegment
        id='shop-page'
        title='Beverages'
        list={list}
        isLoading={isLoading}
      />
      <Pagination
        isNextBtnDisabled={list.length === 0}
        goToPage={goToPage}
        page={query.page}
      />
    </div>
  );
}

export default ShopPage;
