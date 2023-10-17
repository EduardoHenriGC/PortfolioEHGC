import styles from "@/styles/AboutSection/AboutSection.module.css"
import Hr from "../Hr/index"
import SubTitle from "../SubTitle/index"

export default function AboutSection() {


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.contentInfo}>
                    <SubTitle subtitle="Eduardo H. Gonçalves" />
                    <Hr />
                    <span>Web developer</span>
                </div>
                <div className={styles.contentImg}>
                    <img src="https://w0.peakpx.com/wallpaper/437/613/HD-wallpaper-programmer-red-coding-lock-screen-black-lock-2021-programming.jpg" />
                </div>
            </div>
            <div className={styles.right}>
                <img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e720e3d4e8dc2b8cb2dc47_circle.png"></img>
                <p>seja bem-vindo ao meu cantinho virtual! Meu nome é Eduardo Henrique Gonçalves, e eu sou um entusiasta da tecnologia, apaixonado por criar soluções inovadoras e funcionais para desafios digitais. Como programador fullstack, minha jornada nesse vasto mundo da programação começou com um fascínio por linhas de código e a vontade infindável de transformar ideias em realidade.

                    Mergulhei fundo no universo da programação, explorando tanto o front-end quanto o back-end do desenvolvimento de software. A cada novo projeto, me dedico a construir experiências excepcionais para os usuários, Neste site, você encontrará informações sobre meu trabalho, projetos anteriores e meu compromisso com a qualidade e a inovação. Fique à vontade para explorar e descobrir mais sobre mim e minhas paixões no mundo da programação.</p>
            </div>
        </div>
    )
}

