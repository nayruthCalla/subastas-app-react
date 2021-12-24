import styles from '../../css/styles.module.css';

const Header = () => {
  return (
    <div className ={styles.headerConatiner}>
      <h1 className = {styles.headerTitle}>
      LOK<span>i</span>ERO      
      </h1>
      <nav className={styles.headerNav}>
        <ul className={styles.ulContainer}>
          <li className={styles.liHeader}>HOME</li>
          <li className={styles.liHeader}>PRODUCTS</li>
          <li className={styles.liHeader}>ABOUT</li>
        </ul>
      </nav>
    </div>
  )
};

export default Header
