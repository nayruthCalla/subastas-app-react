import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from '../../../css/styles.module.css';
import foto from '../../../assets/foto.png';
import tree from '../../../assets/tree.png';
import nieve from '../../../assets/nieve.png'


const About = () => {
  return (
    <div className={ styles.aboutCont}>
      <h1 className={styles.titleAbout}>¿Te cuento algo sobre mí?</h1>
      <div className={styles.contAboutPro}>          
        <figure className={styles.fotoAboutCont}>
            <img src={foto} alt = ""  className={styles.fotoAbout}/>
            <h3 className={ styles.nameText}>Nayruth Calla</h3>
            <ul className={styles.liAbout}>
              <li><a  href="https://www.linkedin.com/in/nayruth-calla/" target= "_blanck" >
                <FaGithub/> nayruthCalla</a>
                </li>
              <li><a href="https://github.com/nayruthCalla" target= "_blanck">
                <FaLinkedin/> Nayruth Calla</a> </li>                  
            </ul>  
          </figure>     
          <div className={styles.anecAbout}>
            <p className={styles.textAbout}>
              No podia imaginar que aún estando en casa y a traves de una pantalla, 
              sintiera el mismo miedo que estar al frente en un escenario, 
              llegó mi turno y era hacer una improvisación estaba aterrada y en mi mente solo estaba  
              “Tierra trágame” 😱, terminé mi número en un tiempo record. 
              (escapé del momento y no lo viví). 
              Esto sucedió en un taller de clown era mi primer acercamiento.
              El feedback de Mauri(coach)  fue que debía arriesgar  y  dejarles disfrutar del número 😬. 
              Mejoré en mis siguientes presentaciones con la práctica y aprendí muchos temas nuevos.
              Cuando programo me pasa lo mismo, siempre estoy en constante aprendizaje.                       
              Desde entonces siempre digo esta frase:
            </p>
            <p className={styles.phraseAbout}>“Estoy alegre de no saber todo porque sé que puedo aprender ”</p>
            <p className={styles.textAbout}>Por cierto hola  👋 , soy Nayruth Calla coder de pasión  con background en Ing. de Sistemas y un ser humano también.</p>
        </div> 
          <img src = {tree} className={styles.treeIcon} alt = ""/>         
      </div> 
      <div className={ styles.aboutDown}>
        <h2  className={styles.textQuestion}>¿3 cosas que hayas aprendido en el bootcamp de MakeItReal?</h2>
        <p className={styles.textAbout}>
        Cuando me hice esta pregunta no podria resumir en 3 cosas, siento que he aprendido en cada experienci, junto a Cristian(Coach) y mis compañerxs, muy feliz de estar en el bootcamp 😊
        </p>
        <ul className={styles.ulTextQuestion}>
          <li className={styles.textAbout}>Durante este tiempo que he estado en el bootcamp de MakeItReal estoy aprendiendo React (Front-end)  y Node.js (Back-end)  con un excelente coach  @Cristian Moreno.</li>
          <li className={styles.textAbout}>He mejorado a trabajar con la metodología ágil Scrum, trabajo colaborativo</li>
          <li className={styles.textAbout}>Y el nivel de ingles ando mejorando con la plataforma y lxs coachs</li>
        </ul>
      </div>
      <div className = {styles.finalMessCont}>
        <img src = {nieve} className={styles.nieveIcon} alt = ""/>
        <h2 className={styles.titleAbout}>¡FELÍZ NAVIDAD!</h2>        
        <img src = {tree} className={styles.treeIcon} alt = ""/>
      </div>
      <h3 className={styles.thankText}>Gracias por llegar hasta aquí</h3>
    </div>
  )
}

export default About
