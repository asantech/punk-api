import React from 'react';

const ConditionalIcon = props => {
  const { isOffCondition, offIconCSSClass, onIconCSSClass, color } = props;
  return (
    <i
      className={
        'bi mt-2 mx-2 ' + (isOffCondition ? offIconCSSClass : onIconCSSClass)
      }
      style={{ color: color }}
    ></i>
  );
};

export default ConditionalIcon;
