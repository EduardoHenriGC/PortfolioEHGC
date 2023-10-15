import Link from "next/link";
import SubTitle from "../SubTitle";
import styles from "@/styles/Projetos/Projetos.module.css"

export default function CardProjeto({ src, subtitle, text, href }) {

    return (

        <Link href={href} target="_blank" className={styles.CardContainer} >

            <div className={styles.CardContent}>
                <div className={styles.Upper}>
                    <SubTitle subtitle={subtitle} />
                    <span>{text}</span>
                </div>


                <div className={styles.Lower}>
                    <img src={src} />
                </div>
            </div>

        </Link>


    )
}