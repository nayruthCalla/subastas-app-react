// import PropTypes from "prop-types";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IconContext } from 'react-icons';
import styles from '../../../../css/styles.module.css';

const CardHeader = ({day,hour, min, sec}) => {
   // console.log(typeof(day))
  return (
    <header className = {styles.headerCont}>      
      <IconContext.Provider  value={{className: `${styles.timeIcon}`}}  >
        <AiOutlineFieldTime />
      </IconContext.Provider>      
      <section className = {styles.timeCont}>
        <div className = {styles.time}>      
          <h2 className = { styles.timeText}>{ parseInt(day,10) < 0?  "00" : day}</h2>
          <p className = {styles.text}>Días</p>
        </div>
        <span className = {styles.points}>:</span>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{parseInt(hour,10) < 0 ? "00" : hour}</h2>
          <p className = {styles.text}>Horas</p>
        </div>
        <span className = {styles.points}>:</span>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{parseInt(min,10) < 0 ? "00" : min}</h2>
          <p className = {styles.text}>Min</p>
        </div>
        <span className = {styles.points}>:</span>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{parseInt(sec,10) < 0 ? "00" : sec}</h2>
          <p className = {styles.text}>Seg</p>
        </div>
      </section>
    </header>
  )
}

// CardHeader.propTypes = {
//   day: PropTypes.string.isRequired,
//   hour: PropTypes.string,
//   min :PropTypes.string,,
//   sec:  PropTypes.string
// }
CardHeader.defaultProps = {
  day: "00",
  hour: "00",
  min : "00",
  sec: "00"
};
export default CardHeader;
