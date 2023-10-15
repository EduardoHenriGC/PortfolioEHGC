import styles from "@/styles/ContactInfo/ContactInfo.module.css";
import InfoItem from "../InfoItem";


export default function ContactInfo() {


    return (
        <div className={styles.Container}>
            <div className={styles.ContentInfo}>
                <h2>Informações</h2>
            </div>
            <div className={styles.ContentInfo}>
                <h3>Email para contato</h3>
                <InfoItem value="eduardohenriqu3@hotmail.com" />
                <InfoItem value="dudsthedev@gmail.com" />
            </div>
            <div className={styles.ContentInfo}>
                <h3>Numero para contato</h3>
                <InfoItem value="+55(45)999579330" />
            </div>
            <div className={styles.ContentInfo}>
                <h3>Localização</h3>
                <p><span>País: </span> Brasil</p>
                <p><span>Estado: </span> Paraná</p>
                <p><span>Cidade: </span> Foz do Iguaçu</p>
            </div>


        </div>
    );
}
