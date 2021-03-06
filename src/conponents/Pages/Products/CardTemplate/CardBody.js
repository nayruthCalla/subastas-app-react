import PropTypes from 'prop-types'
import styles from '../../../../css/styles.module.css'
import Rating from '../../../Layouts/Rating'
import imgProduct from '../../../../assets/defaultPrd.png'

const CardBody = ({ productImg, rate, productTitle, price, count }) => {
  return (
    <article className={styles.cardProduct}>
      <figure className={styles.productImageCont}>
        <img src={productImg} alt="product" className={styles.productImage} />
      </figure>
      <Rating rate={rate} count={count} />
      <div className={styles.productTitlCont}>
        <h4 className={styles.productTitl}>{productTitle}</h4>
      </div>
      <h3 className={styles.productPrice}>
        <span>$</span>
        {price}
      </h3>
    </article>
  )
}

export default CardBody

CardBody.propTypes = {
  productImg: PropTypes.string,
  rate: PropTypes.number,
  productTitle: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
}

CardBody.defaultProps = {
  productImg: imgProduct,
  rate: 0,
  productTitle: 'Producto',
  price: 0,
  count: 0,
}
