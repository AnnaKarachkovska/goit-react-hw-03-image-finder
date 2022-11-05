import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({items, openModal}) => {
    return (
        <>
        <ul className={styles.imageGallery}>
            <ImageGalleryItem items={items} openModal={openModal}/>
        </ul>
        </>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    openModal: PropTypes.func.isRequired,
};