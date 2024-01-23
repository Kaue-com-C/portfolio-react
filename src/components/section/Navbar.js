import styles from './Navbar.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><a href='presentation'>Apresentação</a></li>
                <li><a href='skills'>Habilidades</a></li>
                <li><a href='projects'>Projetos</a></li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/caweasy/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Kaue-com-C'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/cau%C3%AA-takeuchi-romano-b3605110b/'><FaLinkedin size={30}/></a></li>
            </ul>

        </div>
    )
}

export default Navbar