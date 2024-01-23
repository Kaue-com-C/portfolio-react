import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'

function Presentation(){
    return(
        <div id='presentation' className={styles.presentation}>
            <h1>Olá, eu sou o Cauê</h1>
            <h2>Bem-vinde ao meu Portfólio</h2>
            <p> Sou fascinado pelo mundo da tecnologia e as infinitas possibilidades de <br/>
                aprendizado e melhorias queela proporciona.<br/>
                Com alguns anos de experiência em gestão de pessoas na área de telecomunicações<br/>
                e suporte e minhas habilidades na área de tecnologia, posso oferecer soluções criativas<br/>
                e efetivas para problemas complexos e te ajudar a ter resultados fantásticos para o seu negócio.<br/>
                Conte comigo para subir a receita anual de sua empresa, estou sempre em busca de novos desafios para superar.
            </p>
        <ButtonA link='https://github.com/Kaue-com-C' text='Conecte-se Comigo!!'/>

        </div>
    )
}

export default Presentation