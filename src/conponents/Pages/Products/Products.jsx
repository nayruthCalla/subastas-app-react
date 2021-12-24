import { useState, useEffect } from 'react';
import axios from '../../../utils/axios'
import styles from '../../../css/styles.module.css';
import CardTemplate from './CardTemplate/CardTemplate';
import {randomDate} from '../../../utils/utilities';
import icon from '../../../assets/papa-noel.png';

const Products = ({setDataD}) => {
 
  const [products, setProducts] = useState([]);  
  
  useEffect (()=>{
    
    const listProducts = async() =>{
      try{
        const res = await axios.get('products');
        setProducts(res.data);
       // console.log(res.data)
      }catch(e){
       // console.log(e)
      }
    }
    listProducts();
  },[])
  return (
    <section className = {styles.productsCont}>
      <div className = {styles.contWelcome}>
        <div>
          <h2 className = {styles.title}>¡POR NAVIDAD Y AÑO NUEVO!</h2>
          <p className = {styles.titlePr}>Aprovecha estos últimos días para comprar</p>          
        </div>
        <figure>
          <img className = {styles.imgProd} src={icon} alt=""/>
        </figure>        
      </div>
      <div className = {styles.cardTemplateCont}>
        {products.map(
          ({
            image,
            rating,
            title,
            price,
            description,
            category
          },index
          ) => (
            <CardTemplate            
            key={index}
            imgProduct = {image}
            timeFin = {randomDate(new Date(), new Date(2022, 0, 1))}
            rating = {rating}
            productTitle = {title}
            price = {price}
            ban = {index}
            description = {description}
            category = {category}
            dat = {setDataD}
            />
          ))}
      </div>      
    </section>
  )
};

export default Products;
