import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Cauê Takeuchi Romano!', 'Desenvolvedor Front End', 'CX Team Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);


    useEffect(() =>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }
    return(
        <div id='presentation' className={styles.presentation}>
            <h1>Olá, eu sou {text}</h1>
            <h2>Bem-vinde ao meu Portfólio</h2>
            <p> Sou fascinado pelo mundo da tecnologia e as infinitas possibilidades de <br/>
                aprendizado e melhorias que ela proporciona.<br/>
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