import styles from '../../../../css/styles.module.css';
import Rating from '../../../Layouts/Rating'

const CardBody = ({productImg, rate, productTitle, price, count}) => {
  return (
    <article className = {styles.cardProduct}>
      <figure className = {styles.productImageCont}>
        <img src = {productImg} alt = "product" className = {styles.productImage} />
      </figure>      
      <Rating rate = {rate} count = {count}/>
      <div className = {styles.productTitlCont}>
        <h4 className = {styles.productTitl}>{productTitle}</h4>
      </div>
      <h3 className = {styles.productPrice}> 
      <span>$</span>
      {price}</h3>
    </article> 
  )
}

export default CardBody
