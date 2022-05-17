import React, { useContext } from 'react';

import HomePageContext from '../../context/HomePageContext';

const NavItem = props => {
  const homePageContext = useContext(HomePageContext);
  const { id, lbl, query } = props;

  return (
    <li className='nav-item' role='presentation'>
      <button
        className={
          'nav-link' +
          (homePageContext.state.currentTab === id ? ' active' : '')
        }
        id={id}
        data-bs-toggle='tab'
        data-bs-target={'#' + id}
        type='button'
        role='tab'
        aria-controls={id}
        aria-selected='false'
        onClick={() =>
          homePageContext.tabOnChangeHandler({
            id,
            query,
          })
        }
      >
        {lbl}
      </button>
    </li>
  );
};

export default NavItem;
