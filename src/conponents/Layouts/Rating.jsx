import { AiFillStar } from "react-icons/ai";
import { IconContext } from 'react-icons';
import styles from '../../css/styles.module.css';

const Rating = ({rate,count}) => {
  return (
    <div className = {styles.rateContainer} >
    <div className = {styles.rateCont}>
      <h3 className = {styles.rateText}>{rate}</h3>
      <IconContext.Provider value={{className: `${styles.starIcon}`}}>
        <AiFillStar/>
      </IconContext.Provider>      
    </div>
    <p className = {styles.rateCount}>{count} Evaluaciones</p>
    </div>
  )
}

export default Rating;
