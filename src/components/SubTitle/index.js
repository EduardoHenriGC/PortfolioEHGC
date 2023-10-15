import styles from "@/styles/Subtitle/SubTitle.module.css"

export default function SubTitle({ subtitle }) {

    return <h2 className={styles.sub}>{subtitle}</h2>
}