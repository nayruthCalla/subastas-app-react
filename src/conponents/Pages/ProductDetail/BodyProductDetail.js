import styles from '../../../css/styles.module.css'
import DividingLine from '../../Layouts/DividingLine'

const BodyProductDetail = ({ category, description }) => {
  return (
    <div className={styles.bodyProductDetailCont}>
      <h3 className={styles.titlePrdDet}>CATEGORIA</h3>
      <p className={styles.descPrdDet}>{category}</p>
      <DividingLine />
      <h3 className={styles.titlePrdDet}>DESCRIPCIÓN</h3>
      <p className={styles.descPrdDet}>{description}</p>
    </div>
  )
}

export default BodyProductDetail
