import { useContext } from 'react';
import Link from 'react-router-dom/Link';

import AppContext from 'context/AppContext';

import { headerTopMenuLinks } from 'utils/constants/linksCfg';

import styles from './InnerMenu.module.css';

function getMenuItemStyles(rightAligned, firstRightAligned) {
  return (
    styles['menu-item'] +
    ' border-secondary p-3 h-100' +
    (firstRightAligned ? ' ms-auto' : '') +
    (rightAligned ? ' border-end' : ' border-start')
  );
}

function InnerMenu() {
  const { state } = useContext(AppContext);
  return (
    <div className={styles['inner-menu'] + ' w-100 h-100'}>
      <ul
        className={
          styles['menu-list'] +
          ' d-flex align-items-center list-unstyled mb-0 h-100'
        }
      >
        {headerTopMenuLinks.map(
          (
            { name, path, iconClassName, rightAligned, firstRightAligned },
            i
          ) => (
            <li
              key={i}
              className={getMenuItemStyles(rightAligned, firstRightAligned)}
            >
              <Link to={path} className='text-white text-decoration-none'>
                <i
                  className={styles['link-icon'] + ' me-2 bi ' + iconClassName}
                ></i>
                {typeof name === 'function' ? name(state.cart.length) : name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default InnerMenu;
