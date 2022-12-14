import React, { useContext } from 'react';

import _ from 'lodash';

import HomePageContext from 'context/HomePageContext';

const Pagination = props => {
  const { id } = props;
  const homePageContext = useContext(HomePageContext);
  const { list, query } = homePageContext.state.beverages[id];
  const page = query.page;
  const pages = _.range(1, page + 1);
  let paginationBtnsLbls;

  // مکانش بررسی شود
  if (pages.length <= 5) {
    paginationBtnsLbls = pages;
  } else {
    paginationBtnsLbls = [
      1,
      '...',
      Math.floor(pages.length / 2),
      '...',
      pages.length,
    ];
  }

  const goToPage = selectedPage => {
    const newState = { ...homePageContext.state };
    newState.beverages[id].query.page = selectedPage;
    homePageContext.loadSelectedBeverages({
      id,
      newState,
    });
  };

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className={'page-item' + (page === 1 ? ' disabled' : '')}>
          <button
            className='page-link'
            aria-label='Previous'
            onClick={() => goToPage(page - 1)}
          >
            <span aria-hidden='true'>&laquo;</span>
          </button>
        </li>

        {paginationBtnsLbls.length > 0 &&
          paginationBtnsLbls.map((p, i) => {
            return (
              <li
                key={i}
                className={'page-item' + (p === page ? ' active' : '')}
              >
                <button
                  className='page-link'
                  onClick={
                    typeof p === 'number' ? () => goToPage(p) : undefined
                  }
                >
                  {p}
                </button>
              </li>
            );
          })}

        <li className={'page-item' + (list.length === 0 ? ' disabled' : '')}>
          <button
            className='page-link'
            aria-label='Next'
            onClick={() => goToPage(page + 1)}
          >
            <span aria-hidden='true'>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
