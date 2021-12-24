import CardHeader from './CardHeader';
import CardBody from './CardBody';
import DividingLine from '../../../Layouts/DividingLine';
// import imgProduct from '../../../../assets/product.png';
import Button from '../../../Layouts/Button'
import styles from '../../../../css/styles.module.css'

const CardTemplate = ({imgProduct,time,rating,productTitle,price}) => {
  return (
    <div className = {styles.productsContCard}>
      <CardHeader hour = {time.hour} min = {time.min} sec = {time.sec}/>
      <CardBody productImg = {imgProduct} rate = {rating.rate} count = {rating.count} productTitle = {productTitle} price = {price}/> 
      <DividingLine/>
      <div className = {styles.buttonCont}>
        <Button text = "SEE DETAIL"/>
      </div>      
    </div>
  )
}

export default CardTemplate;
