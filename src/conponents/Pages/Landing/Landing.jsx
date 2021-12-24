import fondo from '../../../assets/fondo.jpg';
import styles from '../../../css/styles.module.css';
import Button from '../../Layouts/Button';
import pago from '../../../assets/pago.png';

const Landing = () => {
  return (
    <section className = {styles.landingCont}>
      <img src = {fondo} className ={styles.fondoMain} alt = ""/>
      <div className = {styles.container}>
        <h2 className = {styles.landingText}>PRODUCTOS EN SUBASTA, AHORA A UN SOLO CLICK!</h2>
        <img src = {pago} className ={styles.pagoImg} alt = ""/>
        <Button text = "IR A COMPRAR"/>
      </div>
    </section>
  )
}

export default Landing
