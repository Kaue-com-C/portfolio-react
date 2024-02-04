import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id='skills'>
            <h1>Habilidades</h1>
            <p>
                Conheça um pouco das minhas habilidades e conhecimentos.
            </p>
            <section>
                <img src={html} alt=''></img>
                <img src={css} alt=''></img>
                <img src={javascript} alt=''></img>
                <img src={react} alt=''></img>
            </section>
        </div>
    )
}

export default Skills