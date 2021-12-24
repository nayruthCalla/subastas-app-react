import { AiOutlineFieldTime } from "react-icons/ai";
import { IconContext } from 'react-icons';
import styles from '../../../../css/styles.module.css';

const CardHeader = ({hour, min, sec}) => {
  return (
    <header className = {styles.headerCont}>      
      <IconContext.Provider  value={{className: `${styles.timeIcon}`}}  >
        <AiOutlineFieldTime />
      </IconContext.Provider>      
      <section className = {styles.timeCont}>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{hour}</h2>
          <p className = {styles.text}>Hours</p>
        </div>
        <span className = {styles.points}>:</span>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{min}</h2>
          <p className = {styles.text}>Min</p>
        </div>
        <span className = {styles.points}>:</span>
        <div className = {styles.time}>      
          <h2 className = {styles.timeText}>{sec}</h2>
          <p className = {styles.text}>Sec</p>
        </div>
      </section>
    </header>
  )
}

export default CardHeader;
