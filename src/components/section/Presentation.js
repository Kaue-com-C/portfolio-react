import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'

function Presentation(){
    return(
        <div id='presentation' className={styles.presentation}>
            <h1>Olá, eu sou o Cauê</h1>
            <h2>Bem-vinde ao meu Portfólio</h2>
            <p> Sou apaixonado por tecnologia e possibilidades de sempre aprender coisas novas que ela proporciona.<br/>
                Com alguns anos de experiência em gestão de pessoas na área de telecomunicações e suporte e minhas <br/>
                habilidades na área de tecnologia, posso oferecer soluções criativas e efetivas para problemas complexos e te <br/>
                ajudar a ter resultados fantásticos para o seu negócio. Conte comigo para subir a receita anual de <br/>
                sua empresa, estou sempre em busca de novos desafios para superar.
            </p>
        <ButtonA link='https://github.com/Kaue-com-C' text='Conecte-se Comigo!!'/>

        </div>
    )
}

export default Presentation