/* eslint-disable react/no-typos */
/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import DividingLine from '../../../Layouts/DividingLine'
import DetailButton from './DetailButton'
import styles from '../../../../css/styles.module.css'
import { fill } from '../../../../utils/utilities'

const CardTemplate = ({
  imgProduct,
  rating,
  productTitle,
  price,
  timeFin,
  ban,
  category,
  description,
  setDataDetail,
}) => {
  const [timeCard, settimeCard] = useState({})
  const [timeDet, setTimeDet] = useState()
  const navigate = useNavigate()

  const randomTime = ban % 2 ? timeFin : new Date(Date.now() + 1 * 60 * 1000)

  useEffect(() => {
    const tick = (finishTime) => {
      const distance = new Date(finishTime).getTime() - new Date().getTime()
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      const fecha = {
        day: fill(days, 2),
        hour: fill(hours, 2),
        min: fill(minutes, 2),
        sec: fill(seconds, 2),
      }
      if (seconds < 0) {
        clearInterval(timerID)
      }
      settimeCard(fecha)
      setTimeDet(finishTime)
    }
    const timerID = setInterval(() => tick(randomTime), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])
  const handleClick = () => {
    setDataDetail({
      productImg: imgProduct,
      rate: rating.rate,
      productTitle,
      price,
      count: rating.count,
      category,
      description,
      timeDetail: timeDet,
    })
    navigate(`/products/${ban}`)
  }
  return (
    <div className={styles.productsContCard}>
      <CardHeader
        day={timeCard.day}
        hour={timeCard.hour}
        min={timeCard.min}
        sec={timeCard.sec}
      />
      <CardBody
        productImg={imgProduct}
        rate={rating.rate}
        count={rating.count}
        productTitle={productTitle}
        price={price}
      />
      <DividingLine />
      <div className={styles.buttonCont}>
        <DetailButton
          text="VER DETALLE"
          flag={timeCard}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default CardTemplate

CardTemplate.propTypes = {
  imgProduct: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rating: PropTypes.object,
  productTitle: PropTypes.string,
  price: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  timeFin: PropTypes.object,
  ban: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  setDataDetail: PropTypes.func,
}

// <Link to={`/products/${ban}`}>
