import Contact from "@/components/Contact"
import ContactForm from "@/components/ContactForm"
import ContactFormHooks from "@/components/ContactFormHooks"
import SiteMap from "@/components/SiteMap/index"

export default function ContactPage() {

    return (
        <>
            <SiteMap
                tema="Contato"
                subtema="Email & telefone"
                src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64eca1770643323348849d4e_sitemap_contact.png" />

            <Contact />
        </>

    )
}