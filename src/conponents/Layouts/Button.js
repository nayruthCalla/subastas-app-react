import styles from '../../css/styles.module.css'

const Button = ({ text, handleClick }) => {
  return (
    <button
      type="button"
      className={styles.generalButton}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
