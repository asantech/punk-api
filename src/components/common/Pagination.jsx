import React, { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';

const Pagination = props => {
  const { id } = props;
  const generalContext = useContext(GeneralContext);
  const page = generalContext.state.beverages[id].query.page;

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className={'page-item' + (page === 1 ? ' disabled' : '')}>
          <button className='page-link' aria-label='Previous'>
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
              const query = { ...generalContext.state.beverages[id].query };
              query.page += 1;
              generalContext.loadSelectedBeverages({
                id,
                query,
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
