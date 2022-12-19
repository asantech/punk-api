import { useContext } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './BeverageInfoModal.module.css';

import DescriptionSegment from 'components/common/segments/DescriptionSegment';

import { AppContext } from 'context/App';
import { ItemInfoModalContext } from 'context/ItemInfoModal';

import { appSettings } from 'utils/constants/appSettings';

import * as collectionServices from 'services/collection.services';

const { EXPIRATION_DURATIONS } = appSettings;

function BeverageInfoModal() {
  const itemInfoModalContext = useContext(ItemInfoModalContext);
  const { itemInfoModalState, setItemInfoModalState } = itemInfoModalContext;
  const { currentItem: beverage, modalDisplay } = itemInfoModalState;
  const { name, tagline, image_url, description, abv, srm } = beverage;
  const appContext = useContext(AppContext);
  const { appState, setAppState } = appContext;

  function handleClose() {
    setItemInfoModalState({
      modalDisplay: false,
      currentItem: {},
    });
  }

  function addToCartBtnOnClickHandler() {
    setAppState(
      collectionServices.addToCollection(
        'cart',
        beverage,
        appState,
        EXPIRATION_DURATIONS.CART
      )
    );
    handleClose();
  }

  function removeFromCartBtnOnClickHandler() {
    setAppState(
      collectionServices.removeFromCollection('cart', beverage, appState)
    );
    handleClose();
  }

  function addToFavoritesBtnOnClickHandler() {
    setAppState(
      collectionServices.addToCollection(
        'favorites',
        beverage,
        appState,
        EXPIRATION_DURATIONS.FAVORITES
      )
    );
    handleClose();
  }

  function removeFromFavoritesBtnOnClickHandler() {
    setAppState(
      collectionServices.removeFromCollection('favorites', beverage, appState)
    );
    handleClose();
  }

  return (
    <Modal
      bsPrefix={styles['beverage-info-modal'] + ' modal'}
      show={modalDisplay}
      onHide={handleClose}
      container={document.getElementById('overlay-root')}
    >
      <Modal.Header>
        <div className={styles['img-box']}>
          <img src={image_url} alt={name} />
        </div>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>{name}</Modal.Title>
        <div>
          <b>tagline:</b> {tagline}
        </div>
        <div>
          <b>abv:</b> {abv}
        </div>
        <DescriptionSegment description={description} />
        <div>
          <b>price:</b> {srm}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {!collectionServices.isItemAdded(appState.cart, beverage) ? (
          <button
            className='btn btn-success'
            onClick={addToCartBtnOnClickHandler}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className='btn btn-danger'
            onClick={removeFromCartBtnOnClickHandler}
          >
            Remove from Cart
          </button>
        )}
        {!collectionServices.isItemAdded(appState.favorites, beverage) ? (
          <button
            className='btn btn-primary'
            onClick={addToFavoritesBtnOnClickHandler}
          >
            Add to Favorites
          </button>
        ) : (
          <button
            className='btn btn-danger'
            onClick={removeFromFavoritesBtnOnClickHandler}
          >
            Remove from Favorites
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default BeverageInfoModal;
