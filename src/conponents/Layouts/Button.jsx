import styles from '../../css/styles.module.css';

const Button = ({text,type}) => {
  return (
    <button type="button" className = {type?styles.generalButton:styles.generalButtonColor}>
      {text}
    </button>
  )
}

export default Button
