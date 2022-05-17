import React, { useContext } from 'react';
import HomePageContext from '../../context/HomePageContext';

const Pagination = props => {
  const { id } = props;
  const homePageContext = useContext(HomePageContext);
  const page = homePageContext.state.beverages[id].query.page;

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className={'page-item' + (page === 1 ? ' disabled' : '')}>
          <button
            className='page-link'
            aria-label='Previous'
            onClick={() => {
              const state = { ...homePageContext.state };
              const query = { ...homePageContext.state.beverages[id].query };
              query.page -= 1;
              homePageContext.loadSelectedBeverages({
                id,
                query,
                state,
              });
            }}
          >
            <span aria-hidden='true'>&laquo;</span>
          </button>
        </li>

        <li key={page} className='page-item'>
          <button className='page-link'>{page}</button>
        </li>

        <li className='page-item'>
          <button
            className='page-link'
            aria-label='Next'
            onClick={() => {
              const state = { ...homePageContext.state };
              const query = { ...homePageContext.state.beverages[id].query };
              query.page += 1;
              homePageContext.loadSelectedBeverages({
                id,
                query,
                state,
              });
            }}
          >
            <span aria-hidden='true'>&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
