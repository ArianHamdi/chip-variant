import styles from './Chip.module.scss';

const Chip = ({ variant, onClick, children }) => {

    const isClickable = typeof onClick === 'function';

    return (
        <div className={styles.chip} onClick={onClick} data-variant={variant} data-clickable={isClickable}>
            {children}
        </div>
    )
}

export default Chip;