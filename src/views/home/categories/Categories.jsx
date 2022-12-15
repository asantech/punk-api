import { categoriesLinks } from 'utils/constants/linksCfg';

import SearchItem from './SearchItem';

import styles from './Categories.module.css';

function Categories() {
  return (
    <div className={styles['categories']}>
      <div className={styles['intro-segment'] + ' mx-auto text-center'}>
        <h2 className={styles['title']}>Finding by the right category</h2>
        <p className={styles['text']}>
          Here are the categories from which you can search for your beverage.{' '}
          <br></br>
          In each category the search will be done based on the filter of the
          category.
        </p>
      </div>
      <div className={styles['categories-segment']}>
        <div className={styles['title'] + ' mx-auto'}>
          Search for beverages by
        </div>
        <div
          className={
            styles['categories-container'] +
            ' d-flex justify-content-center flex-wrap'
          }
        >
          {categoriesLinks.map((linkSpecs, i) => (
            <SearchItem key={i} specs={linkSpecs} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
