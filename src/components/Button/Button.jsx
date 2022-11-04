import styles from './Button.module.css';

const Button = ({onClick}) => {
    return(
        <button type="button" onClick={onClick} className={styles.button}>Load more</button>
    )
}

export default Button;