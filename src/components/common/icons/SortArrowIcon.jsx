const SortArrowIcon = props => {
  return (
    <i
      className={
        'bi mx-1' +
        (props.order === 'asc' ? ' bi-caret-up-fill' : ' bi-caret-down-fill')
      }
    ></i>
  );
};

export default SortArrowIcon;
