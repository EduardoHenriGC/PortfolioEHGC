import styles from '@/styles/HomeSection/HomeSection.module.css';
import Link from 'next/link';
import HomeText from '../HomeText';

export default function HomeSection() {
    return (
        <div className={styles.container}>
            <Link href="/sobre" className={`${styles.item} ${styles.item1}`}>

                <div className={styles.bgImg}></div>

                <div className={styles.infoContent}>
                    <h3>Sobre</h3>
                    <span>biografia e habilidades</span>
                </div>
            </Link>
            <Link href="/projetos" className={`${styles.item} ${styles.item2}`}>

                <HomeText text="jogos & desafios" />
                <div className={styles.projectImgContent}>
                    <img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64db7f1fea491f045ffde537_blog.jpg" />
                </div>
                <h3>Projetos</h3>

            </Link>
            <Link href="/repositorio" className={`${styles.item} ${styles.item3}`}>

                <HomeText text="repositorio github" />
                <div className={styles.RepoContent}>
                    <img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e8a013dae8e6c13bad291a_service5.png" />
                    <img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e5de00e567dd073fda_service2.png" />
                    <img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e586380df2dd882764_service3.png" />

                </div>
                <h3>códigos</h3>
            </Link>
            <Link target="_blank" href="https://wa.me/+5545999579330" className={`${styles.item} ${styles.item4}`}>


            </Link>
            <Link href="/contato" className={`${styles.item} ${styles.item5}`}>
                <HomeText text="vamos conversar" />
                <div className={styles.contactImg} ><img src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dde7425ddbfdf9c28e5079_contact.png" /></div>
                <h3>contato</h3>
            </Link>
        </div>
    );
}
