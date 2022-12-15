import ContactsList from 'components/custom/lists/ContactsList';
import { FOOTER_COLS } from 'utils/constants/linksCfg';

import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles['footer'] + ' d-grid bg-black'}>
      <div
        className={styles['info-segment'] + ' border-bottom border-secondary'}
      >
        <div className='container d-flex'>
          <div className='col-sm-3'>
            <img className='mb-5' src='logo.webp' />
            <ContactsList listItemClassName='mb-1 text-white' />
          </div>
          {FOOTER_COLS.map(({ heading, list }, i) => (
            <div
              key={i}
              className={
                styles['footer-col'] + ' col-sm-3 d-grid justify-content-center'
              }
            >
              <div className={styles['col-heading'] + ' fs-4'}>{heading}</div>
              <ul className='list-unstyled'>
                {list.map((item, i) => (
                  <li
                    key={i}
                    className={styles['list-item'] + ' mb-1 text-white'}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['copyright-segment'] + ' text-center text-white'}>
        Copyright © 2022 DoubleBeer Sectioned Shopify Themes by Papathemes.com
      </div>
    </div>
  );
}

export default Footer;
