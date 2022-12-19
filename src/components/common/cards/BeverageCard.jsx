import { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import { AppContext } from 'context/App';
import { ItemInfoModalContext } from 'context/ItemInfoModal';

import * as collectionServices from 'services/collection.services';

import ConditionalIcon from 'components/common/icons/ConditionalIcon';

import { appSettings } from 'utils/constants/appSettings';

import styles from './BeverageCard.module.css';

const { EXPIRATION_DURATIONS } = appSettings;

const actionButtonClassName =
  styles['action-button'] +
  ' d-flex justify-content-center align-items-center position-absolute p-0 w-25 border-0';

function BeverageCard(props) {
  const { beverage, scrollContainer } = props;
  const { id, name, image_url, abv } = beverage;
  const itemInfoModalContext = useContext(ItemInfoModalContext);
  const { setItemInfoModalState } = itemInfoModalContext;
  const appContext = useContext(AppContext);
  const { appState, setAppState } = appContext;
  const { cart, favorites } = appState;

  function isItemAddedToCollection(collection) {
    return collectionServices.isItemAdded(collection, beverage);
  }

  function addToCartHandler() {
    setAppState(
      collectionServices.addToCollection(
        'cart',
        beverage,
        appState,
        EXPIRATION_DURATIONS.CART
      )
    );
  }

  function removeFromCartHandler() {
    setAppState(
      collectionServices.removeFromCollection('cart', beverage, appState)
    );
  }

  function getCartBtnOnClickHandler() {
    return isItemAddedToCollection(cart)
      ? removeFromCartHandler
      : addToCartHandler;
  }

  function addToFavoritesHandler() {
    setAppState(
      collectionServices.addToCollection(
        'favorites',
        beverage,
        appState,
        EXPIRATION_DURATIONS.FAVORITES
      )
    );
  }

  function removeFromFavoritesHandler() {
    setAppState(
      collectionServices.removeFromCollection('favorites', beverage, appState)
    );
  }

  function getFavoritesBtnOnClickHandler() {
    return isItemAddedToCollection(favorites)
      ? removeFromFavoritesHandler
      : addToFavoritesHandler;
  }

  return (
    <div
      className={
        styles['beverage-card'] +
        ' card border-0 rounded-0 position-relative db-cursor-pointer'
      }
    >
      <div className='d-flex justify-content-between position-absolute top-0 left-0 w-100'>
        <ConditionalIcon
          className='ms-3 mt-3 text-success'
          offIconCSSClass='bi-bag'
          onIconCSSClass='bi-bag-fill'
          isOffCondition={!isItemAddedToCollection(cart)}
        />
        <ConditionalIcon
          className='mt-3 me-3 text-warning'
          offIconCSSClass='bi-star'
          onIconCSSClass='bi-star-fill'
          isOffCondition={!isItemAddedToCollection(favorites)}
        />
      </div>
      {/* <LazyLoad
        height={270}
        once
        scrollContainer={scrollContainer}
        overflow={true}
      > */}
      <div
        className={
          styles['img-box'] +
          ' d-flex justify-content-center align-items-center p-5'
        }
      >
        <img className='db-transform-2' src={image_url} alt={name} />
      </div>
      {/* </LazyLoad> */}

      <div className='card-body'>
        <span className={styles['card-id']}>ID: {id}</span>
        <h5
          className={
            styles['card-title'] +
            ' mb-3 fw-bold border-bottom border-secondary pb-3'
          }
        >
          {name}
        </h5>
        <span className='fs-4'>ABV: {abv}</span>
      </div>
      <div
        className={
          styles['card-actions'] + ' d-flex position-relative overflow-hidden'
        }
      >
        <button
          className={actionButtonClassName}
          onClick={getCartBtnOnClickHandler()}
        >
          <ConditionalIcon
            isOffCondition={!isItemAddedToCollection(cart)}
            className='fs-4'
            offIconCSSClass='bi-bag'
            onIconCSSClass='bi-bag-fill text-success'
          />
        </button>
        <button
          className={actionButtonClassName}
          onClick={() => {
            setItemInfoModalState({
              currentItem: beverage,
              modalDisplay: true,
            });
          }}
        >
          <i className={'bi bi-eye-fill fs-4'}></i>
        </button>
        <button
          className={actionButtonClassName}
          onClick={getFavoritesBtnOnClickHandler()}
        >
          <ConditionalIcon
            isOffCondition={!isItemAddedToCollection(favorites)}
            className='fs-4'
            offIconCSSClass='bi-heart'
            onIconCSSClass='bi-heart-fill text-danger'
          />
        </button>
        <button className={actionButtonClassName}>
          <i className={'bi bi-arrow-left-right fs-4'}></i>
        </button>
      </div>
    </div>
  );
}

export default BeverageCard;
