import ButtonB from './ButtonB'
import styles from './Card.module.css'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt=''></img>
            </a>

            
            <section>
                <h3>{title}</h3>
                <p><strong>{tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Repositório' link={repo}/>
            </section>
            
        </div>
    )
}

export default Card