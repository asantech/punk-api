import { Link } from 'react-router-dom';

import { navbarLinks } from 'enums/linksCfg';

import styles from './MainMenu.module.css';

function MainMenu() {
  return (
    <nav
      className={
        styles['main-menu'] + ' navbar bg-black position-sticky sticky-top'
      }
    >
      <ul className='navbar-list d-flex list-unstyled w-100 mb-0'>
        {navbarLinks.map(({ name: linkName, path, firstRightAligned }, i) => (
          <li
            key={i}
            className={'nav-item me-5' + (firstRightAligned ? ' ms-auto' : '')}
          >
            <Link
              className='text-white text-decoration-none text-uppercase'
              to={path}
            >
              {linkName}
            </Link>
          </li>
        ))}
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
