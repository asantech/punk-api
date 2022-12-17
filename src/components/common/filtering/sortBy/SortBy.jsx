import { useContext } from 'react';

import { SortByContext } from 'context/SortBy';

import { orderBy } from 'lodash';

import SortArrowIcon from 'components/common/icons/SortArrowIcon';

function SortBy(props) {
  const { children } = props;
  const { sortByState, updateSortByState } = useContext(SortByContext);
  const { by, order } = sortByState;

  function handleSort(selectedSortBy) {
    updateSortByState(selectedSortBy);
  }

  const sortByNameArrowIcon = by === 'name' && <SortArrowIcon order={order} />;

  const sortByABVArrowIcon = by === 'abv' && <SortArrowIcon order={order} />;

  return (
    <>
      <div className='sort-by-filter d-flex justify-content-end'>
        <button
          className='btn btn-light mx-2'
          onClick={() => handleSort('name')}
        >
          Sort By Name
          {sortByNameArrowIcon}
        </button>
        <button className='btn btn-light' onClick={() => handleSort('abv')}>
          Sort By ABV
          {sortByABVArrowIcon}
        </button>
      </div>
      {children}
    </>
  );
}

export default SortBy;
