import styles from "@/styles/CardRepositorio/CardRepositorio.module.css"
import Link from "next/link"

export default function CardRepositorio({ text, src, title, href }) {


    return (

        <div className={styles.Container}>
            <div className={styles.left}>
                <div className={styles.LeftContent}>
                    <img src={src}></img>
                </div>
            </div>
            <div className={styles.right}>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link target="_blank" href={href}>Ver repositório</Link>
            </div>

        </div>
    )
}