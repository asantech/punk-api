import React from 'react';

const SortArrowIcon = props => {
  return (
    <i
      className={
        'bi mx-1' +
        (props.sort.order === 'asc'
          ? ' bi-caret-up-fill'
          : ' bi-caret-down-fill')
      }
    ></i>
  );
};

export default SortArrowIcon;
