import React from 'react';

const NavItem = props => {
  const { id, lbl, isCurrentTab, onChange } = props;
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
        onClick={onChange}
      >
        {lbl}
      </button>
    </li>
  );
};

export default NavItem;
