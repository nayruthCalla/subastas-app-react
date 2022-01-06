import PropTypes from 'prop-types'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { RiEmotionSadLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import styles from '../../../../css/styles.module.css'

const CardHeader = ({ day, hour, min, sec }) => {
  return (
    <header className={styles.headerCont}>
      <IconContext.Provider value={{ className: `${styles.timeIcon}` }}>
        <AiOutlineFieldTime />
        {parseInt(day, 10) < 0 &&
        parseInt(hour, 10) < 0 &&
        parseInt(min, 10) < 0 &&
        parseInt(sec, 10) < 0 ? (
          <IconContext.Provider value={{ className: `${styles.sadIcon}` }}>
            <h2 className={styles.timeTextFinsh}>ups! tu tiempo se acabó</h2>
            <RiEmotionSadLine />
          </IconContext.Provider>
        ) : (
          <section className={styles.timeCont}>
            <div className={styles.time}>
              <h2 className={styles.timeText}>{day}</h2>
              <p className={styles.text}>Días</p>
            </div>
            <span className={styles.points}>:</span>
            <div className={styles.time}>
              <h2 className={styles.timeText}>{hour}</h2>
              <p className={styles.text}>Horas</p>
            </div>
            <span className={styles.points}>:</span>
            <div className={styles.time}>
              <h2 className={styles.timeText}>{min}</h2>
              <p className={styles.text}>Min</p>
            </div>
            <span className={styles.points}>:</span>
            <div className={styles.time}>
              <h2 className={styles.timeText}>{sec}</h2>
              <p className={styles.text}>Seg</p>
            </div>
          </section>
        )}
      </IconContext.Provider>
    </header>
  )
}

CardHeader.propTypes = {
  day: PropTypes.string,
  hour: PropTypes.string,
  min: PropTypes.string,
  sec: PropTypes.string,
}
CardHeader.defaultProps = {
  day: '00',
  hour: '00',
  min: '00',
  sec: '00',
}
export default CardHeader
