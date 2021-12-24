import { Link } from "react-router-dom";
import styles from '../../css/styles.module.css';

const Header = () => {
  return (
    <div className ={styles.headerConatiner}>
      <Link to = "/">
        <h1 className = {styles.headerTitle}>
        LOK<span>i</span>ERO      
        </h1>
      </Link>      
      <nav className={styles.headerNav}>
        <ul className={styles.ulContainer}>
          <li className={styles.liHeader}>            
            <Link to = "/">INICIO</Link>
          </li>
          <li className={styles.liHeader}>            
            <Link to = "/products">PRODUCTOS</Link>
          </li>
          <li className={styles.liHeader}>            
            <Link to = "/about">SOBRE MI</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Header
