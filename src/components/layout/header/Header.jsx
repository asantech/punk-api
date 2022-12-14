import InnerMenu from './InnerMenu';

import styles from './Header.module.css';

function Header() {
  return (
    <div
      className={
        styles['header'] +
        ' d-flex align-items-center border-bottom bg-black border-secondary'
      }
    >
      <span
        className='fw-bold px-3 text-white'
        style={{ minWidth: 'max-content' }}
      >
        Double Beer (organic)
      </span>
      <InnerMenu />
    </div>
  );
}

export default Header;
