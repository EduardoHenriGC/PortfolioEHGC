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
                <p>Olá, sou Eduardo Henrique Gonçalves um desenvolvedor fullstack Lorem Ipsum is simply dummy text of the printing and typesetting industry.  standard dummy text ever since the 1500s, when an unknown printer took.here are many variations of passages of Lorem Ipsum available, but the majority have suffered passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
        </div>
    )
}

