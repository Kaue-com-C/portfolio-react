import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/caweasy/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/Kaue-com-C'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/cau%C3%AA-takeuchi-romano-b3605110b/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>ctakeuchiromano@gmail.com</p>
            <p>Cauê Takeuchi Romano © 2024</p>
        </div>
    )
}

export default Footer