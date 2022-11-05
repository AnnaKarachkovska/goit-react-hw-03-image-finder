import PropTypes from 'prop-types';

import styles from './Searchbar.module.css'

const Searchbar = ({onSubmit}) => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}></span>
        </button>

        <input
          className={styles.searchFormInput}
          name='search'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};