import { useState, useEffect } from 'react';

import { has } from 'lodash';

import styles from './RandomBeverages.module.css';
import http from 'services/http.service';

import BeverageCard from 'components/common/cards/BeverageCard';
import Skeleton from 'react-loading-skeleton';

const queryObj = {
  ids: '1|2|3|4|5|6|7|8',
};

function ErrorMsgContainer(props) {
  return (
    <div
      className={
        styles['error-msg-container'] +
        ' d-grid justify-content-center align-items-center w-100 fw-bolder text-center mt-5'
      }
    >
      {has(props.error, 'message') ? (
        <>
          <span className='fs-1'>
            The error below occurred{' '}
            <i className='bi bi-exclamation-circle'></i>
          </span>
          <span className='fs-3'>( {props.error.message} )</span>
        </>
      ) : (
        <span className='fs-1'>
          An error has occurred <i className='bi bi-exclamation-circle'></i>
        </span>
      )}
      <br></br>
      <span className='fs-2 mb-4'>
        You can reload by clicking the button below
      </span>
      <button
        type='button'
        className={
          styles['reload-btn'] +
          ' px-4 py-2 text-uppercase fw-bold fs-5 db-bg-color-gold db-border-color-gold db-border-style-solid border-1 rounded text-white mx-auto'
        }
        onClick={props.reloadBtnOnClickHandler}
      >
        Reload
      </button>
    </div>
  );
}

function BeveragesContainer(props) {
  return (
    <div
      id='random-beverages-container'
      className={styles['random-beverages-container'] + ' d-grid h-100'}
    >
      {props.beverages.map((beverage, i) => (
        <BeverageCard
          key={i}
          beverageInfo={beverage}
          // scrollContainer={'#random-beverages-container'}
        />
      ))}
    </div>
  );
}

function RandomBeverages() {
  const [randomBeverages, setRandomBeverages] = useState(null);
  const [error, setError] = useState();
  const [showSkeleton, setShowSkeleton] = useState(false);

  function reloadBeverages() {
    loadSelectedBeverages();
  }

  function loadSelectedBeverages() {
    http.get(queryObj, {
      beforeReq: () => {
        setError(undefined);
        setRandomBeverages(null);
        setShowSkeleton(true);
      },
      afterSuccess: res => {
        setShowSkeleton(false);
        setRandomBeverages(res);
      },
      onError: err => {
        setShowSkeleton(false);
        setError(err);
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
            src='images/views/home/randomBeverages/Banner.webp'
            alt='ad banner'
          />
        </div>
        <div
          className={
            styles['random-beverages-segment'] + ' mx-auto overflow-hidden'
          }
        >
          <div className='text-center my-4 fs-1 fw-bolder'>
            Beverages Shown Randomly
          </div>
          {showSkeleton && (
            <Skeleton
              width={270}
              height={469}
              count={8}
              baseColor='#e8e8e8'
              highlightColor='#fbfbfb'
              className='mx-2 my-1'
              duration={1}
              inline={true}
            />
          )}
          {error && (
            <ErrorMsgContainer
              reloadBtnOnClickHandler={reloadBeverages}
              error={error}
            />
          )}
          {randomBeverages && (
            <BeveragesContainer beverages={randomBeverages} />
          )}
        </div>
      </div>
    </div>
  );
}

export default RandomBeverages;
