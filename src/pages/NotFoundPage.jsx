import React from 'react';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles['not-found-page']}>
      <div className='text-center fw-bolder'>
        Page Not Found <i className='bi bi-exclamation-triangle'></i>
      </div>
    </div>
  );
};

export default NotFoundPage;
