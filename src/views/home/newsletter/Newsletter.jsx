import styles from './Newsletter.module.css';

function Newsletter() {
  return (
    <div className={styles['newsletter'] + ' '}>
      <div
        className={
          styles['newsletter-heading'] +
          ' fs-2 text-uppercase fw-bold mx-auto lh-1'
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
            ' text-uppercase bg-color-gold text-white fw-bold'
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
