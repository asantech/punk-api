import { useState, useEffect } from 'react';

import styles from './RandomBeverages.module.css';
import http from 'services/http.service';

import BeverageCard from 'components/common/Cards/BeverageCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const queryObj = {
  ids: '1|2|3|4|5|6|7|8',
};

function RandomBeverages() {
  const [randomBeverages, setRandomBeverages] = useState([]);
  const [error, setError] = useState();
  const [showSkeleton, setShowSkeleton] = useState(false);

  async function loadSelectedBeverages(setStateFuncs) {
    http.get(queryObj, {
      beforeReq: () => {
        setRandomBeverages(false);
        setShowSkeleton(true);
      },
      afterSuccess: res => {
        setRandomBeverages(res);
        setError(undefined);
      },
      onError: err => {
        setRandomBeverages(false);
        setError(err);
      },
      afterReq: () => {
        setShowSkeleton(false);
      },
    });
  }

  useEffect(() => {
    loadSelectedBeverages();
  }, []);

  return (
    <div className={styles['random-beverages'] + ' position-relative'}>
      <div
        className={styles['random-beverages-wrapper'] + ' position-absolute'}
      >
        <div
          className={styles['banner-container'] + ' mx-auto position-relative'}
        >
          <img
            className='mw-100'
            src='images/views/home/sections/randomBeverages/Banner.webp'
            alt='ad banner'
          />
        </div>
        <div className={styles['random-beverages-segment'] + ' mx-auto'}>
          <h2 className='text-center mt-5 mb-4 fs-1 fw-bolder'>
            Beverages Shown Randomly
          </h2>
          {showSkeleton && (
            <SkeletonTheme baseColor='#202020' highlightColor='#444'>
              <p>
                <Skeleton count={3} />
              </p>
            </SkeletonTheme>
          )}
          {error && (
            <div className='d-grid justify-content-center align-items-center w-100 fw-bolder text-center mt-5'>
              <span className='fs-1 text-danger'>An error has occurred</span>
              <br></br>
              <span className='fs-2 text-danger mb-5'>
                You can retry by clicking the button below
                {console.log(error)}
              </span>
              <button
                type='button'
                className='btn btn-primary'
                onClick={() => {
                  loadSelectedBeverages();
                }}
              >
                Retry
              </button>
            </div>
          )}
          {randomBeverages && (
            <div
              id='random-beverages-container'
              className={styles['random-beverages-container'] + ' d-grid h-100'}
            >
              {randomBeverages.map((beverage, i) => (
                <BeverageCard
                  key={i}
                  beverageInfo={beverage}
                  // scrollContainer={'#random-beverages-container'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RandomBeverages;
