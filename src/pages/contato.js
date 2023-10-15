import ContactForm from "@/components/ContactForm"
import ContactFormHooks from "@/components/ContactFormHooks"
import SiteMap from "@/components/SiteMap/index"

export default function Projetos() {

    return (
        <>
            <SiteMap
                tema="Contato"
                subtema="Email & telefone"
                src="https://etica.ufms.br/files/2013/08/contato.jpg" />

            <ContactFormHooks />
        </>

    )
}