import styles from "@/styles/SiteMap/SiteMap.module.css"



export default function SiteMap({ subtema, tema, src }) {

    return (
        <div className={styles.container}>
            <div className={styles.temaContent}>
                <img src={src} />
                <span>{tema}</span>
            </div>
            <div className={styles.subtemaContent}>
                {subtema}
            </div>
        </div>
    )
}