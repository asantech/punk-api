const ConditionalIcon = props => {
  const { className, isOffCondition, offIconCSSClass, onIconCSSClass } = props;
  return (
    <i
      className={
        className + ' bi ' + (isOffCondition ? offIconCSSClass : onIconCSSClass)
      }
    ></i>
  );
};

export default ConditionalIcon;
