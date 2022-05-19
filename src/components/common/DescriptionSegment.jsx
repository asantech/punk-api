import React, { Component } from 'react';

import styles from './DescriptionSegment.module.css';

class DescriptionSegment extends Component {
  state = {
    isCollapsed:
      this.props.description && this.props.description.length >= 250
        ? true
        : false,
  };

  toggleCollapeHandler = () => {
    const newState = { ...this.state };
    newState.isCollapsed = !this.state.isCollapsed;
    this.setState(newState);
  };

  render() {
    const { description } = this.props;
    const { isCollapsed } = this.state;
    return (
      <>
        <div
          className={`${styles['desc-segment']} ${
            isCollapsed ? styles['collapsed'] : ''
          }`}
        >
          <b>description:</b> {description}
        </div>
        {description && description.length >= 250 && (
          <div className='d-flex justify-content-center mt-1'>
            <button
              className='btn btn-sm btn-light'
              onClick={this.toggleCollapeHandler}
            >
              <i
                className={
                  'bi' +
                  (isCollapsed ? ' bi-caret-down-fill' : ' bi-caret-up-fill')
                }
              ></i>
            </button>
          </div>
        )}
      </>
    );
  }
}

export default DescriptionSegment;
