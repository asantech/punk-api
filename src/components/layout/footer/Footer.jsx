import styles from './Footer.module.css';

import { footerCols } from 'enums/linksCfg';

function Footer() {
  return (
    <div className={styles['footer'] + ' d-grid bg-black'}>
      <div
        className={styles['info-segment'] + ' border-bottom border-secondary'}
      >
        <div className='container d-flex'>
          <div className='col-sm-3'>
            <img className='mb-4' src='logo.webp' />
            <ul className='list-unstyled'>
              <li className='mb-1 text-white'>
                <i className='bi bi-telephone-fill me-2'></i>
                +989359054975
              </li>
              <li className='mb-1 text-white'>
                <i className='bi bi-envelope-fill me-2'></i>
                moayeri68@gmail.com
              </li>
              <li className='mb-1 text-white'>
                <i className='bi bi-geo-alt-fill  me-2'></i>
                Iran, Tehran Province, Tehran City
              </li>
            </ul>
          </div>
          {footerCols.map(({ heading, list }, i) => (
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
