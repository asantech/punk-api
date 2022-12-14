import { Fragment } from 'react';
import { lightenOrDarkenColor } from 'utils/colors.helpers';

import styles from './SearchItem.module.css';

function SearchItem({ specs }) {
  return (
    <div className={styles['search-item'] + ' d-flex text-white'}>
      {specs.map(
        ({ content, color, hasLeftCol, hasRightCol, className, isImg }, i) => (
          <Fragment key={i}>
            <div
              className={
                styles['search-item-box'] +
                ' fs-3 d-flex justify-center align-items-center flex-fill ' +
                (className ? className : '')
              }
              style={{ backgroundColor: color }}
            >
              {hasLeftCol && (
                <div
                  className={
                    styles['side-col'] +
                    ' left-side-col h-100 d-flex justify-content-center align-items-center '
                  }
                  style={{ backgroundColor: lightenOrDarkenColor(color, -20) }}
                ></div>
              )}
              <div className='flex-fill d-flex justify-content-center align-items-center text-center'>
                {isImg ? <img src={content} alt='icon image' /> : content}
              </div>
              {hasRightCol && (
                <div
                  className={
                    styles['side-col'] +
                    ' right-side-col h-100 d-flex justify-content-center align-items-center'
                  }
                  style={{ backgroundColor: lightenOrDarkenColor(color, -20) }}
                ></div>
              )}
            </div>
          </Fragment>
        )
      )}
    </div>
  );
}

export default SearchItem;
