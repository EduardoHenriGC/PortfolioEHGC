import CardProjetos from "@/components/CardProjeto"
import styles from "@/styles/CardProjetos/CardProjetos.module.css"

export default function Projetos() {

    return (
        <div className={styles.Container}>
            <CardProjetos src="https://img.elo7.com.br/product/main/30AAFA6/jogo-da-memoria-figuras-diversas-36-pecas-em-mdf-pedagogico.jpg"
                text="Next js"
                subtitle="Jogo da Memoria"
                href="https://jogodamemoriax.netlify.app/" />

            <CardProjetos src="https://54032.cdn.simplo7.net/static/54032/sku/jogos-jogos-de-equilibrio-jogo-da-forca--p-1650233384130.png"
                text="Next js"
                subtitle="Jogo da Forca"
                href="https://forcadomilenio.netlify.app/" />

            <CardProjetos src="https://img.freepik.com/vetores-premium/sinal-de-neon-de-tempo-de-teste-no-vetor-de-fundo-de-parede-de-tijolo_118419-3961.jpg?w=2000"
                text="Next js"
                subtitle="jogo de Perguntas"
                href="https://main--amvgquiz.netlify.app/" />
        </div>
    )
}