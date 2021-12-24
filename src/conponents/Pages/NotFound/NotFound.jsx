import image from '../../../assets/defaultPrd.png';
import styles from '../../../css/styles.module.css'

const NotFound = () => {
  return (
    <div>
      <h2 className={styles.notFoundNum} >404</h2>
      <h2 className={styles.notFoundText} >HUBO UN ERROR</h2>
      <img className={styles.notFoundImg} src = {image} alt=""/>      
    </div>
  )
}

export default NotFound;
