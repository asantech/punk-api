import ContactsList from 'components/common/lists/ContactsList';

import styles from './ContactMePage.module.css';

function ContactMePage() {
  return (
    <>
      <div className={styles['contact-me-page']}>
        <div className='color-gold mb-5 fs-2 fw-bold'>Contact Me</div>
        <p className='fs-4'>
          If you have any project which is vanilla JS, React JS or Next JS, you
          can contact me by phone or email or even my linked account. My
          telegram and whatsapp account is on this phone number.
        </p>
        <p className='fs-4'>
          If you want to see my skill set and links of the project that I have
          done, you can checkout the "About Me" page.
        </p>
        <p className='fs-4 mb-5'>
          Also if you want to discuss any subject on programming, especially the
          Front-End, I will be glad to answer and discuss on the related topics.
          <br></br>
          Or if you have seen the code in my github account, and have good tips
          to give me, I would appreciate it.
          <br></br>
          The github link of this project is in the "App Info" page.
        </p>
        <ContactsList listItemClassName='mb-1 fs-4' />
      </div>
    </>
  );
}

export default ContactMePage;
