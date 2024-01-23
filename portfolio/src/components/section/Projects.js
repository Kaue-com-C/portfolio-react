import styles from './Projects.module.css'
import ButtonB from './elements/ButtonB'
import Card from './elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'
import ccxp from '../../image//projects/ccxp.svg'

function Projects(){
    return(
        <div id='projects'>
            <div className={styles.project}>
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title='Landing Page' 
            tech='HTML, CSS e JS'
            description='Desenvolvimento de uma Landing Page da escola DNC para Formação em Tecnologia' 
            repo='https://github.com/Kaue-com-C/projeto-landing-page'
            site='https://lpdnc-kcc.netlify.app/'/>
               <Card
            img={portfolio}
            title='Portfólio em React' 
            tech='React'
            description='Desenvolvimento de portfólio online' 
            repo='https://github.com/Kaue-com-C/portfolio-react'
            site=''/>
                <Card
            img={ccxp}
            title='Landing Page' 
            tech='HTML, CSS e JS'
            description='Desenvolvimento de Landing Page com countdown para um evento' 
            repo='https://github.com/Kaue-com-C/CCXPROJECT'
            site='https://ccxproject2023.netlify.app'/>
            </div>
            <ButtonB text='Acesse todos meus repositórios' link='https://github.com/Kaue-com-C?tab=repositories'/>
        </div>
    )
}

export default Projects