import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './BeverageInfoModal.module.css';

import DescriptionSegment from './DescriptionSegment';

class BeverageInfoModal extends Component {
  // بعدا برای روش دسترسی مناسب تر به appcontext فکری شود

  handleClose = newAppState => {
    newAppState.modalDisplay = false;
    newAppState.currentBeverage = {};
    this.props.appContext.displayBeverageInfoModal(newAppState, false);
  };

  addToCartBtnOnClickHandler = () => {
    const newAppState = { ...this.props.appContext.state };

    this.handleClose(
      this.props.appContext.addToCollection(
        'cart',
        this.props.beverageInfo,
        newAppState,
        7 //* 86400
      )
    );
  };

  removeFromCartBtnOnClickHandler = () => {
    const newAppState = { ...this.props.appContext.state };

    this.handleClose(
      this.props.appContext.removeFromCollection(
        'cart',
        this.props.beverageInfo,
        newAppState
      )
    );
  };

  addToFavouritesBtnOnClickHandler = () => {
    const newAppState = { ...this.props.appContext.state };
    this.handleClose(
      this.props.appContext.addToCollection(
        'favourites',
        this.props.beverageInfo,
        newAppState,
        30 //* 86400
      )
    );
  };

  removeFromFavouritesBtnOnClickHandler = () => {
    const newAppState = { ...this.props.appContext.state };

    this.handleClose(
      this.props.appContext.removeFromCollection(
        'favourites',
        this.props.beverageInfo,
        newAppState
      )
    );
  };

  render() {
    const { beverageInfo, appContext } = this.props;
    const { name, tagline, image_url, description, abv, srm } = beverageInfo;
    const { isItemAdded, state } = appContext;

    return (
      <Modal
        bsPrefix={styles['beverage-info-modal'] + ' modal'}
        show={this.props.show}
        onHide={() => this.handleClose({ ...this.props.appContext.state })}
        container={document.getElementById('overlay-root')}
      >
        <Modal.Header>
          {' '}
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
          {!isItemAdded(state.cart, beverageInfo) ? (
            <button
              className='btn btn-success'
              onClick={this.addToCartBtnOnClickHandler}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className='btn btn-danger'
              onClick={this.removeFromCartBtnOnClickHandler}
            >
              Remove from Cart
            </button>
          )}
          {!isItemAdded(state.favourites, beverageInfo) ? (
            <button
              className='btn btn-primary'
              onClick={this.addToFavouritesBtnOnClickHandler}
            >
              Add to Favourites
            </button>
          ) : (
            <button
              className='btn btn-danger'
              onClick={this.removeFromFavouritesBtnOnClickHandler}
            >
              Remove from Favourites
            </button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BeverageInfoModal;
