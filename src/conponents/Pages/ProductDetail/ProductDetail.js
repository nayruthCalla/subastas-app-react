import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from '../../../css/styles.module.css'
import HeaderProductDetail from './HeaderProductDetail'
import DividingLine from '../../Layouts/DividingLine'
import CardHeader from '../Products/CardTemplate/CardHeader'
import CardBody from '../Products/CardTemplate/CardBody'
import BodyProductDetail from './BodyProductDetail'
import AuctionButton from './AuctionButton'
import { fill } from '../../../utils/utilities'

const ProductDetail = ({ productDetail }) => {
  const [timeDeatil, setTimeDeatil] = useState({})
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
      setTimeDeatil(fecha)
    }
    const timerID = setInterval(() => tick(productDetail.timeDetail), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [timeDeatil])
  return (
    <section className={styles.productDetailCont}>
      <HeaderProductDetail />
      <DividingLine />
      <div className={styles.contDetailB}>
        <CardHeader
          day={timeDeatil.day}
          hour={timeDeatil.hour}
          min={timeDeatil.min}
          sec={timeDeatil.sec}
        />
        <CardBody
          productImg={productDetail.productImg}
          rate={productDetail.rate}
          productTitle={productDetail.productTitle}
          price={productDetail.price}
          count={productDetail.count}
        />
      </div>
      <DividingLine />

      <div className={styles.contDetailF}>
        <BodyProductDetail
          category={productDetail.category}
          description={productDetail.description}
        />
        <DividingLine />
        <div className={styles.buttonContProd}>
          <AuctionButton text="LO QUIERO" flag={timeDeatil} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

ProductDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productDetail: PropTypes.object.isRequired,
}
