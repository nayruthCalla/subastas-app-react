import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from '../../css/styles.module.css';

const Footer = () => {
  return (
    <footer className = {styles.footercont}>
      <ul>
        <li><a  href="https://www.linkedin.com/in/nayruth-calla/" target= "_blanck" ><FaGithub/> nayruthCalla</a></li>
        <li><a href="https://github.com/nayruthCalla" target= "_blanck"><FaLinkedin/> Nayruth Calla</a> </li>
        <li>  @ 2021</li>       
      </ul>      
    </footer>
  )
}

export default Footer
