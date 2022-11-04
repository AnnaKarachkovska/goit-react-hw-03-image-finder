import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import {getImages} from '../../api/api';

const ImageGallery = ({items}) => {
    getImages();
    return (
        <>
        <ul className={styles.imageGallery}>
            <ImageGalleryItem items={items}/>
        </ul>
        </>
    )
}

export default ImageGallery;