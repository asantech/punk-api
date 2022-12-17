import BeverageCard from 'components/common/cards/BeverageCard';
import Spinner from 'components/common/loaders/Spinner';

import styles from './BeveragesSegment.module.css';

import { SortByProvider } from 'context/SortBy';

import SortBy from '../filtering/sortBy/SortBy';

// loadSelectedBeverages = async ({ id, newState }) => {
//   if (newState.beverages[id].isLoading === false) {
//     newState.beverages[id].isLoading = true;
//     this.setState(newState);
//   }
//   try {
//     let selectedBeverages = await beverageServices.getSelectedBeverages({
//       query: newState.beverages[id].query,
//     });

//     const { beverages } = newState;

//     selectedBeverages = orderBy(
//       selectedBeverages,
//       [beverages[id].sort.by],
//       [beverages[id].sort.order]
//     );
//     beverages[id].list = selectedBeverages;
//     beverages[id].isLoading = false;
//     if (beverages[id].list.length)
//       toast.success('beverages are loaded successfully.', {
//         position: toast.POSITION.BOTTOM_RIGHT,
//       });
//   } catch (error) {
//     newState.beverages[id].isLoading = false;
//     toast.error(error.message, {
//       position: toast.POSITION.BOTTOM_RIGHT,
//     });
//   }
//   this.setState(newState);
// };

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
          list.map(beverageInfo => (
            <BeverageCard
              key={beverageInfo.id}
              beverageInfo={beverageInfo}
              scrollContainer={`#beverages-container-${id}`}
            />
          ))}
      </div>
    </div>
  );
}

export default BeveragesSegment;
