import styles from './Newsletter.module.css';

function Newsletter() {
  return (
    <div className={styles['newsletter'] + ' '}>
      <div
        className={
          styles['newsletter-heading'] +
          ' mx-auto fs-2 fw-bold text-uppercase lh-1'
        }
      >
        Sign up for our newsletter
      </div>
      <div
        className={
          styles['newsletter-input-field'] +
          ' d-flex justify-content-center mx-auto'
        }
      >
        <input
          className={styles['newsletter-input'] + ' w-100 border-0'}
          type='text'
          placeholder='Your email address'
        />
        <button
          className={
            styles['subscribe-button'] +
            ' fw-bold text-uppercase text-white db-bg-color-gold'
          }
          type='button'
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
