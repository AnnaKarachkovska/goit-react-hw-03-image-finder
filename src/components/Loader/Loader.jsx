import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img 
                src={require('../../images/yy3.gif')}
                width='150'
                alt='loader...'
                />
            </div>
        </div>
    )
}

export default Loader;