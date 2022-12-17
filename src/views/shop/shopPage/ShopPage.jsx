import { useContext, useEffect } from 'react';

import { BeveragesContext } from 'context/Beverages';
import { SortByContext } from 'context/SortBy';

import SortBy from 'components/common/filtering/sortBy/SortBy';
import BeveragesSegment from 'components/common/segments/BeveragesSegment';
import Pagination from 'components/layout/navigation/pagination/Pagination';

import { sortList } from 'utils/helpers/sortBy.helpers';

function ShopPage() {
  const { beverages, loadSelectedBeverages, isLoading } =
    useContext(BeveragesContext);

  const { sortByState: sortBy } = useContext(SortByContext);

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
    <div className={'shop-page db-page-padding-1'}>
      <div className='db-color-gold fw-bold fs-2 mb-4'>Shop Page</div>
      <SortBy />

      <BeveragesSegment
        id='shop-page'
        title='Beverages'
        list={sortList(list, sortBy)}
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
