import { useContext } from 'react';
import LazyLoad from 'react-lazyload';

import AppContext from 'context/AppContext';
import * as beverageServices from 'services/beverage.services';
import * as collectionServices from 'services/collection.services';

import ConditionalIcon from 'components/common/jcons/ConditionalIcon';

import { BEVERAGE_CARD_LINKS } from 'utils/constants/linksCfg';

import styles from './BeverageCard.module.css';

function BeverageCard(props) {
  const appContext = useContext(AppContext);

  const { beverageInfo, scrollContainer } = props;
  const { id, name, image_url, srm } = beverageInfo;
  const { state, displayBeverageInfoModal } = appContext;

  const actions = [
    () => {},
    () => {
      displayBeverageInfoModal(
        beverageServices.setCurrentBeverage(state, beverageInfo),
        true
      );
    },
    () => {},
    () => {},
  ];

  return (
    <div
      className={
        styles['beverage-card'] +
        ' card border-0 rounded-0 position-relative db-cursor-pointer'
      }
    >
      <div className='d-flex justify-content-between position-absolute top-0 left-0 w-100'>
        <ConditionalIcon
          isOffCondition={
            !collectionServices.isItemAdded(state.cart, beverageInfo)
          }
          offIconCSSClass='bi-bag'
          onIconCSSClass='bi-bag-fill'
          color='#00FF00'
          bgColor='#90c7e026'
        />
        <ConditionalIcon
          isOffCondition={
            !collectionServices.isItemAdded(state.favorites, beverageInfo)
          }
          offIconCSSClass='bi-star'
          onIconCSSClass='bi-star-fill'
          color='#FFD700'
          bgColor='#90c7e026'
        />
      </div>
      {/* <LazyLoad
        height={270}
        once
        scrollContainer={scrollContainer}
        overflow={true}
      > */}
      <div
        className={
          styles['img-box'] +
          ' d-flex justify-content-center align-items-center p-5'
        }
      >
        <img className='db-transform-2' src={image_url} alt={name} />
      </div>
      {/* </LazyLoad> */}

      <div className='card-body'>
        <span className={styles['card-id']}>ID: {id}</span>
        <h5
          className={
            styles['card-title'] +
            ' mb-3 fw-bold border-bottom border-secondary pb-3'
          }
        >
          {name}
        </h5>
        <span className='fs-4'>${srm}</span>
      </div>
      <div
        className={
          styles['card-actions'] + ' d-flex position-relative overflow-hidden'
        }
      >
        {BEVERAGE_CARD_LINKS.map((link, i) => (
          <button
            key={i}
            className={
              styles['action-button'] +
              ' d-flex justify-content-center align-items-center position-absolute p-0 w-25 border-0'
            }
            onClick={actions[i]}
          >
            <i className={'fs-4 bi ' + link.iconClassName}></i>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BeverageCard;
