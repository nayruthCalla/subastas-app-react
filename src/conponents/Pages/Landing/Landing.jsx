import { Link } from "react-router-dom";
// import fondo from '../../../assets/fondo.jpg';
import styles from '../../../css/styles.module.css';
import Button from '../../Layouts/Button';
import pago from '../../../assets/pago.png';
// import navidad from '../../../assets/recort.png';
import navidad from '../../../assets/navidad-as.png';


const Landing = () => {
  return (
    <section className = {styles.landingCont}>
      <div className = {styles.main}>
        <img src = {navidad} className ={styles.fondoMain} alt = ""/>
        <div className = {styles.contWelcomeMain}>
          <h2 className = {styles.landingTextIni}>          
            <span className = {styles.red}>¡ </span>N<span className = {styles.green}>A</span>
              V<span className = {styles.red}>I</span>D
              <span className = {styles.green}>A</span>D 
              D<span className = {styles.red}>E </span> 
              S<span className = {styles.red}>U</span>B<span className = {styles.green}>A</span>ST<span className = {styles.green}>A</span>S 
              Y 
              L<span className = {styles.green}>O</span>K<span className = {styles.colorApp}>i</span>
              <span className = {styles.red}>E</span>R<span className = {styles.yellow}>O </span>

              S<span className = {styles.red}>E </span> 
              P<span className = {styles.yellow}>O</span>N<span className = {styles.red}>E </span>
              M<span className = {styles.green}>O</span>D<span className = {styles.yellow}>O </span>
              P<span className = {styles.green}>A</span>
              P<span className = {styles.red}>A</span>.N<span className = {styles.red}>O</span>
              <span className = {styles.yellow}>E</span>L<span className = {styles.red}> !</span>
          </h2>        
            <Link to = "/products" className = {styles.buttonLandW}>
              <Button text = "IR A COMPRAR"/>
            </Link>
          </div>
      </div>      
      <div className = {styles.container}>
        <h2 className = {styles.landingText}>PRODUCTOS EN SUBASTA, AHORA A UN SOLO CLICK!</h2>
        <img src = {pago} className ={styles.pagoImg} alt = ""/>
        <div className = {styles.buttonContLang}>
          <Link to = "/products">
            <Button text = "IR A COMPRAR"/>
          </Link>          
        </div>        
      </div>
    </section>
  )
}

export default Landing

/* <Link to = {`/products/${idProduct}`}>
            <Button text = "IR A COMPRAR"/>
          </Link>   */