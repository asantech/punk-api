import React, { Component } from 'react';
import _ from 'lodash';

import HomePageContext from '../../context/HomePageContext';

import BeverageCard from './BeverageCard';
import Pagination from './Pagination';

import Spinner from './Spinner';

import styles from './BeveragesSegment.module.css';

class BeveragesSegment extends Component {
  static contextType = HomePageContext;

  handleSort = sortBy => {
    const { id } = this.props;
    this.context.sortItems({ id, sortBy });
  };

  render() {
    const { id, title } = this.props;
    const beverages = this.context.state.beverages[id];
    const { list, isLoading, sort } = beverages;

    return (
      <div className={styles['beverages-segment']}>
        <div className='d-flex justify-content-between mb-4'>
          <h2 className='mb-0'>{title}</h2>
          <div>
            <button
              className='btn btn-light mx-2'
              onClick={() => this.handleSort('name')}
            >
              Sort By Name
              {sort.by === 'name' && (
                <i
                  className={
                    'bi mx-1' +
                    (sort.order === 'asc'
                      ? ' bi-caret-up-fill'
                      : ' bi-caret-down-fill')
                  }
                ></i>
              )}
            </button>
            <button
              className='btn btn-light'
              onClick={() => this.handleSort('abv')}
            >
              Sort By ABV
              {sort.by === 'abv' && (
                <i
                  className={
                    'bi mx-1' +
                    (sort.order === 'asc'
                      ? ' bi-caret-up-fill'
                      : ' bi-caret-down-fill')
                  }
                ></i>
              )}
            </button>
          </div>
        </div>
        <div
          id={`beverages-container-${id}`}
          className={styles['beverages-container'] + ' mb-4'}
        >
          {isLoading && (
            <div
              className='d-flex align-items-center mt-4'
              style={{ width: 'max-content', height: 'min-content' }} // بعدا اصلاح شود
            >
              Beverages are loading, please wait.
              <Spinner />
              <Spinner />
              <Spinner />
            </div>
          )}
          {!isLoading && list.length === 0 && <p>No beverages found.</p>}
          {!isLoading &&
            list.length !== 0 &&
            list.map(beverageInfo => (
              <BeverageCard
                key={beverageInfo.id}
                beverageInfo={beverageInfo}
                scrollContainer={`#beverages-container-${id}`}
              />
            ))}
        </div>
        <Pagination id={id} />
      </div>
    );
  }
}

export default BeveragesSegment;
