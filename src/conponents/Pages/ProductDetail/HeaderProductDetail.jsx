
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from "react-icons/ai";
import { IconContext } from 'react-icons';
import styles from '../../../css/styles.module.css';

const HeaderProductDetail = () => {
  return (
    <div className = {styles.headerProdDet}>
      <IconContext.Provider value={{className: `${styles.closeIcon}`}} >
        <AiFillLeftCircle/>
      </IconContext.Provider>
      <Link to = "/products">
        <button type="button" className = {styles.btnProdDet}>      
          REGRESAR
        </button> 
      </Link>
    </div>
  )
}

export default HeaderProductDetail
