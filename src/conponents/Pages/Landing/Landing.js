import { useNavigate } from 'react-router-dom'
import styles from '../../../css/styles.module.css'
import Button from '../../Layouts/Button'
import pago from '../../../assets/pago.png'
import mune from '../../../assets/muneco.png'
import bid from '../../../assets/bid.png'
import bag from '../../../assets/bag.png'
import navidad from '../../../assets/navidad-as.png'

const Landing = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/products')
  }
  return (
    <section className={styles.landingCont}>
      <div className={styles.main}>
        <img src={navidad} className={styles.fondoMain} alt="" />
        <div className={styles.contWelcomeMain}>
          <h2 className={styles.landingTextIni}>
            <span className={styles.red}>¡ </span>N
            <span className={styles.green}>A</span>V
            <span className={styles.red}>I</span>D
            <span className={styles.green}>A</span>D D
            <span className={styles.red}>E </span>S
            <span className={styles.red}>U</span>B
            <span className={styles.green}>A</span>ST
            <span className={styles.green}>A</span>S Y L
            <span className={styles.green}>O</span>K
            <span className={styles.colorApp}>i</span>
            <span className={styles.red}>E</span>R
            <span className={styles.yellow}>O </span>S
            <span className={styles.red}>E </span>P
            <span className={styles.yellow}>O</span>N
            <span className={styles.red}>E </span>M
            <span className={styles.green}>O</span>D
            <span className={styles.yellow}>O </span>P
            <span className={styles.green}>A</span>P
            <span className={styles.red}>A</span>.N
            <span className={styles.red}>O</span>
            <span className={styles.yellow}>E</span>L
            <span className={styles.red}> !</span>
          </h2>
          <div className={styles.buttonContainer}>
            <Button text="IR A COMPRAR" handleClick={handleClick} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <figure className={styles.iconLandingCont}>
          <h2 className={styles.landingText}>
            En esta navidad aprovecha los días de rebaja
          </h2>
          <img src={bag} className={styles.iconLanding} alt="" />
        </figure>
        <figure className={styles.iconLandingCont}>
          <img src={bid} className={styles.iconLanding} alt="" />
          <h2 className={styles.landingText}>
            Proximamente LOKiERO podras ofertar desde la comodidad de tu hogar
          </h2>
        </figure>
        <figure className={styles.iconLandingCont}>
          <h2 className={styles.landingText}>
            Felices fiestas te desea LOK<span className={styles.green}>i</span>
            ERO
          </h2>
          <img src={mune} className={styles.iconLanding} alt="" />
        </figure>
        <figure className={styles.iconLandingContBtn}>
          <h2 className={styles.landingText}>
            Productos en subasta, ahora a un solo click
          </h2>
          <img src={pago} className={styles.pagoImg} alt="" />
          <div className={styles.buttonContLang}>
            <Button text="IR A COMPRAR" handleClick={handleClick} />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Landing
