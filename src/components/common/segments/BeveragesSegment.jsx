import BeverageCard from 'components/common/cards/BeverageCard';
import Spinner from 'components/common/loaders/Spinner';

import styles from './BeveragesSegment.module.css';

function BeveragesSegment(props) {
  const { id, title, list, isLoading } = props;

  return (
    <div className={styles['beverages-segment']}>
      <div className='d-flex justify-content-between mb-4'>
        <h2 className='mb-0'>{title}</h2>
      </div>
      <div
        id={`beverages-container-${id}`}
        className={styles['beverages-container'] + ' mb-4'}
      >
        {isLoading && (
          <div
            className='d-flex align-items-center mt-4'
            style={{ width: 'max-content', height: 'min-content' }} // بعدا اصلاح شود
          >
            Beverages are loading, please wait.
            <Spinner />
            <Spinner />
            <Spinner />
          </div>
        )}
        {!isLoading && list.length === 0 && <p>No beverages found.</p>}
        {!isLoading &&
          list.length !== 0 &&
          list.map(beverage => (
            <BeverageCard
              key={beverage.id}
              beverage={beverage}
              scrollContainer={`#beverages-container-${id}`}
            />
          ))}
      </div>
    </div>
  );
}

export default BeveragesSegment;
