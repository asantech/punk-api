function ContactsList(props) {
  const { listItemClassName } = props;

  return (
    <ul className='list-unstyled'>
      <li className={listItemClassName}>
        <i className='bi bi-telephone-fill me-2'></i>
        +989359054975
      </li>
      <li className={listItemClassName}>
        <i className='bi bi-envelope-fill me-2'></i>
        moayeri68@gmail.com
      </li>
      <li className={listItemClassName}>
        <i className='bi bi-geo-alt-fill me-2'></i>
        Iran, Tehran Province, Tehran City
      </li>

      <li className={listItemClassName}>
        <i className={'bi bi-square-fill me-2'}></i>
        <a
          className='text-decoration-none color-gold'
          href='https://www.linkedin.com/in/mohammad-hossein-moayeri-236585b8/'
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

export default ContactsList;
