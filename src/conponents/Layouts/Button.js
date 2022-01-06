import styles from '../../css/styles.module.css'

const Button = ({ text }) => {
  return (
    <button type="button" className={styles.generalButton}>
      {text}
    </button>
  )
}

export default Button
