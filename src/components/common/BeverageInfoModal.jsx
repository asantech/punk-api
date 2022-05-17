import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './BeverageInfoModal.module.css';

class BeverageInfoModal extends Component {
  // بعدا برای روش دسترسی مناسب تر به appcontext فکری شود
  state = {
    show: this.props.show,
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  addToCartBtnOnClickHandler = () => {
    this.props.appContext.addToCollection(
      'cart',
      this.props.beverageInfo,
      7 * 86400
    );
    this.handleClose();
  };

  removeFromCartBtnOnClickHandler = () => {
    this.props.appContext.removeFromCollection('cart', this.props.beverageInfo);
    this.handleClose();
  };

  addToFavouritesBtnOnClickHandler = () => {
    this.props.appContext.addToCollection(
      'favourites',
      this.props.beverageInfo,
      30 * 86400
    );
    this.handleClose();
  };

  removeFromFavouritesBtnOnClickHandler = () => {
    this.props.appContext.removeFromCollection(
      'favourites',
      this.props.beverageInfo
    );
    this.handleClose();
  };

  render() {
    const { beverageInfo, appContext } = this.props;
    const { name, tagline, image_url, description, abv, srm } = beverageInfo;

    return (
      <Modal
        bsPrefix={styles['beverage-info-modal'] + ' modal'}
        show={this.state.show}
        onHide={this.handleClose}
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
          <div>
            <b>description:</b> {description}
          </div>
          <div>
            <b>price:</b> {srm}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!appContext.isItemAdded(appContext.state.cart, beverageInfo) ? (
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
          {!appContext.isItemAdded(
            appContext.state.favourites,
            beverageInfo
          ) ? (
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
