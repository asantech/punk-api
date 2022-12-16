import { useContext } from 'react';

import { SortByContext } from 'context/SortBy';

import { orderBy } from 'lodash';

import SortArrowIcon from 'components/common/jcons/SortArrowIcon';

function SortBy(props) {
  const { by, order, sortItems } = useContext(SortByContext);
  const { children } = props;

  function handleSort(selectedSortBy) {
    sortItems(selectedSortBy);
  }

  const sortByNameArrowIcon = by === 'name' && (
    <SortArrowIcon sort={{ by, order }} />
  );

  const sortByABVArrowIcon = by === 'abv' && (
    <SortArrowIcon sort={{ by, order }} />
  );

  return (
    <div className='sort-by-filter'>
      <div>
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
    </div>
  );
}

export default SortBy;
