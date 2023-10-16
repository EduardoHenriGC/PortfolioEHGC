import ContactForm from "../ContactForm";
import ContactFormHooks from "../ContactFormHooks";
import ContactInfo from "../ContactInfo";
import styles from "@/styles/Contact/Contact.module.css"

export default function Contact() {


    return (

        <div className={styles.Container}>
            <ContactFormHooks />
            <ContactInfo />
        </div>
    )
}