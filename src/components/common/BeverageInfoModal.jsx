import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './BeverageInfoModal.module.css';

import DescriptionSegment from './DescriptionSegment';

import AppContext from '../../context/AppContext';

import * as collectionServices from '../../services/collectionServices';

class BeverageInfoModal extends Component {
  static contextType = AppContext;
  handleClose = newAppState => {
    newAppState.modalDisplay = false;
    newAppState.currentBeverage = {};
    this.context.displayBeverageInfoModal(newAppState, false);
  };

  addToCartBtnOnClickHandler = () => {
    const newAppState = { ...this.context.state };

    this.handleClose(
      collectionServices.addToCollection(
        'cart',
        this.props.beverageInfo,
        this.context.state,
        newAppState,
        7 //* 86400
      )
    );
  };

  removeFromCartBtnOnClickHandler = () => {
    const newAppState = { ...this.context.state };

    this.handleClose(
      collectionServices.removeFromCollection(
        'cart',
        this.props.beverageInfo,
        this.context.state,
        newAppState
      )
    );
  };

  addToFavouritesBtnOnClickHandler = () => {
    const newAppState = { ...this.context.state };
    this.handleClose(
      collectionServices.addToCollection(
        'favourites',
        this.props.beverageInfo,
        this.context.state,
        newAppState,
        30 //* 86400
      )
    );
  };

  removeFromFavouritesBtnOnClickHandler = () => {
    const newAppState = { ...this.context.state };

    this.handleClose(
      collectionServices.removeFromCollection(
        'favourites',
        this.props.beverageInfo,
        this.context.state,
        newAppState
      )
    );
  };

  render() {
    const { beverageInfo } = this.props;
    const { name, tagline, image_url, description, abv, srm } = beverageInfo;
    const { state } = this.context;

    return (
      <Modal
        bsPrefix={styles['beverage-info-modal'] + ' modal'}
        show={this.props.show}
        onHide={() => this.handleClose({ ...this.context.state })}
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
          {!collectionServices.isItemAdded(state.cart, beverageInfo) ? (
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
          {!collectionServices.isItemAdded(state.favourites, beverageInfo) ? (
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
