import { useState, useEffect } from 'react';
import axios from '../../../utils/axios'
import styles from '../../../css/styles.module.css';
import CardTemplate from './CardTemplate/CardTemplate';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect (()=>{

    const listProducts = async() =>{
      try{
        const res = await axios.get('products');
        setProducts(res.data);
        console.log(res.data)
      }catch(e){
        console.log(e)
      }
    }
    listProducts();
  },[]);
  
  return (
    <section className = {styles.productsCont}>
      <h2 className = {styles.title}>Check out the products that are up for auction today</h2>
      <div className = {styles.cardTemplateCont}>
        {products.map(
          ({
            image,
            rating,
            title,
            price
          },index
          ) => (
            <CardTemplate            
            key={index}
            imgProduct = {image}
            time = {
              {
                hour: "00",
                min: "00",
                sec: "40"
              }
            }
            rating = {rating}
            productTitle = {title}
            price = {price}
            />
          ))}
      </div>
    </section>
  )
};

export default Products;
