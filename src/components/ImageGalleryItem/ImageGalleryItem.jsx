import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({items, openModal}) => {
  return (
    items.map(item => <li key={item.id} onClick={() => openModal(item.id)} className={styles.imageGalleryItem}>
        <img className={styles.imageGalleryItemImage} src={item.webformatURL} alt={item.tags} />
      </li>)
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func.isRequired,
};