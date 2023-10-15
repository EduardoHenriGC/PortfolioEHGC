import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";
import styles from "@/styles/Contact/Contact.module.css"

export default function Contact() {


    return (

        <div className={styles.Container}>
            <ContactForm />
            <ContactInfo />
        </div>
    )
}