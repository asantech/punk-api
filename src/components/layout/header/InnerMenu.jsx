import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from 'context/AppContext';

import List from 'components/common/lists/List';

import { HEADER_TOP_MENU_LINKS } from 'utils/constants/linksCfg';

import styles from './InnerMenu.module.css';

function getMenuItemStyles(rightAligned, firstRightAligned) {
  return (
    styles['menu-item'] +
    ' p-3 h-100' +
    (firstRightAligned ? ' ms-auto' : '') +
    (rightAligned ? ' border-end' : ' border-start')
  );
}

const listClassName =
  styles['menu-list'] + ' d-flex align-items-center list-unstyled mb-0 h-100';

function InnerMenu() {
  const { state } = useContext(AppContext);
  return (
    <div className={styles['inner-menu'] + ' w-100 h-100'}>
      <List
        ListType='ul'
        listClassName={listClassName}
        listItemClassName={({ rightAligned, firstRightAligned }) =>
          getMenuItemStyles(rightAligned, firstRightAligned)
        }
        itemsConfigs={HEADER_TOP_MENU_LINKS}
      >
        {({ name, path, iconClassName }) => (
          <Link to={path} className='text-white text-decoration-none'>
            <i
              className={styles['link-icon'] + ' me-2 bi ' + iconClassName}
            ></i>
            {typeof name === 'function' ? name(state.cart.length) : name}
          </Link>
        )}
      </List>
    </div>
  );
}

export default InnerMenu;
