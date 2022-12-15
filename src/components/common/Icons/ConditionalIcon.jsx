import React from 'react';

const ConditionalIcon = props => {
  const { isOffCondition, offIconCSSClass, onIconCSSClass, color, bgColor } =
    props;
  return (
    <div
      className='d-flex justify-content-center align-items-center rounded-circle m-1'
      style={{ backgroundColor: bgColor, width: '40px', height: '40px' }}
    >
      {
        <i
          className={
            'bi ' + (isOffCondition ? offIconCSSClass : onIconCSSClass)
          }
          style={{ color: color }}
        ></i>
      }
    </div>
  );
};

export default ConditionalIcon;
