import { Link } from 'react-router-dom';

import { NAVBAR_LINKS } from 'utils/constants/linksCfg';

import styles from './MainMenu.module.css';

function MainMenu() {
  return (
    <nav
      className={
        styles['main-menu'] + ' navbar bg-black position-sticky sticky-top'
      }
    >
      <ul className='navbar-list d-flex list-unstyled w-100 mb-0'>
        {NAVBAR_LINKS.map(
          ({ name: linkName, path, icon, firstRightAligned }, i) => (
            <li
              key={i}
              className={
                'nav-item me-5 ' + (firstRightAligned ? ' ms-auto' : '')
              }
            >
              <Link
                className={
                  styles['nav-link'] +
                  ' text-white text-decoration-none text-uppercase'
                }
                to={path}
              >
                {linkName}
                {icon && <i className={'ms-1 bi bi-' + icon}></i>}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className={styles['logo-container'] + ' position-absolute bg-black'}>
        <div className={styles['logo-wrapper']}>
          <img className={styles['logo']} src='logo.webp' alt='brand-logo' />
        </div>
      </div>
    </nav>
  );
}

export default MainMenu;
