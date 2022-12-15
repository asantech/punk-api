import { useContext } from 'react';

import { range, isNumber } from 'lodash';

function Pagination(props) {
  // const { context } = props;
  // const beverages = useContext(context);
  const { page, isNextBtnDisabled, goToPage } = props;
  const pages = range(1, page + 1);
  let paginationLabels;

  // مکانش بررسی شود
  if (pages.length <= 5) {
    paginationLabels = pages;
  } else {
    paginationLabels = [
      1,
      '...',
      Math.floor(pages.length / 2),
      '...',
      pages.length,
    ];
  }

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

        {paginationLabels.length > 0 &&
          paginationLabels.map((p, i) => {
            return (
              <li
                key={i}
                className={'page-item' + (p === page ? ' active' : '')}
              >
                <button
                  className='page-link'
                  onClick={isNumber(p) ? () => goToPage(p) : undefined}
                >
                  {p}
                </button>
              </li>
            );
          })}

        <li className={'page-item' + (isNextBtnDisabled ? ' disabled' : '')}>
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
}

export default Pagination;
