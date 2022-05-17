import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

import HomePageContext from '../../context/HomePageContext';

import styles from './BeverageInfoModal.module.css';

class BeverageInfoModal extends Component {
  state = {
    show: this.props.show,
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { name, tagline, image_url, description, abv, srm } =
      this.props.beverageInfo;

    return (
      <Modal
        bsPrefix={styles['beverage-info-modal'] + ' modal'}
        show={this.state.show}
        onHide={this.handleClose}
      >
        <Modal.Header>
          {' '}
          <div className={styles['img-box']}>
            <img src={image_url} />
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
          <Button variant='primary' onClick={this.handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BeverageInfoModal;
