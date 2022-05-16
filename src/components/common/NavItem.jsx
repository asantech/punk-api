import React, { useContext } from 'react';

import GeneralContext from '../../context/GeneralContext';

const NavItem = props => {
  const generalContext = useContext(GeneralContext);
  const { id, lbl, isCurrentTab, query } = props;

  return (
    <li className='nav-item' role='presentation'>
      <button
        className={'nav-link' + (isCurrentTab ? ' active' : '')}
        id={id}
        data-bs-toggle='tab'
        data-bs-target={'#' + id}
        type='button'
        role='tab'
        aria-controls={id}
        aria-selected='false'
        onClick={() =>
          generalContext.tabOnChangeHandler({
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
