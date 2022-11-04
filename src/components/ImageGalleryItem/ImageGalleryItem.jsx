import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({items}) => {
  return (
    items.map(item => <li key={item.id} className={styles.imageGalleryItem}>
        <img className={styles.imageGalleryItemImage} src={item.webformatURL} alt={item.tags} />
      </li>)
  );
};

export default ImageGalleryItem;
