import styles from "@/styles/HomeText/HomeText.module.css"

export default function HomeText({ text }) {

    return (

        <div className={styles.Container}><img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249428c7cbf1c3be206f_circle%20blue.png" />{text}</div>
    )
}