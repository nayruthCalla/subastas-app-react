import { Link, Outlet } from "react-router-dom";
import styles from '../../css/styles.module.css';

const Header = () => {
  return (
    <>
    <div className ={styles.headerConatiner}>
      <Link to = "/">
        <h1 className = {styles.headerTitle}>
        LOK<span>i</span>ERO      
        </h1>
      </Link>      
      <nav className={styles.headerNav}>
        <ul className={styles.ulContainer}>
        <Link to = "/">
            <li className={styles.liHeader}>            
            INICIO
            </li>
          </Link>
          <Link to = "/products">
            <li className={styles.liHeader}>            
            PRODUCTOS
            </li>
          </Link>      <Outlet />
          <Link to = "/about">
            <li className={styles.liHeader}>            
              SOBRE MI
            </li>
          </Link>
        </ul>
      </nav>
    </div>
    <Outlet/>
    </>
  )
};

export default Header
