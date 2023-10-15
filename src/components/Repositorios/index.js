import CardRepositorio from "@/components/CardRepositorio/index"
import styles from "@/styles/Repositorios/Repositorios.module.css"

export default function Repositorios() {


    return (
        <div className={styles.Container}>


            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e8a013dae8e6c13bad291a_service5.png"
                title="NextJS"
                text="Dropdown- manipulando ordem de exibição por preço e filtro"
                href="https://github.com/EduardoHenriGC/dropdown-typeproduct"
            />

            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e586380df2dd882764_service3.png"
                title="NextJS"
                text="Rotas dinamicas usando boas praticas"
                href="https://github.com/EduardoHenriGC/WorldFlix"
            />
            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e5de00e567dd073fda_service2.png"
                title="Backend NodeJS"
                text="API em NodeJS para uma loja de produtos"
                href="https://github.com/EduardoHenriGC/Node-lojaCleanCode"
            />
            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e5146e92d83f6c7deb_service1.png"
                title="Backend NodeJS"
                text="Autentificação JWT usando NodeJS"
                href="https://github.com/EduardoHenriGC/Auth-jwt.Node"
            />
            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e8a013cf99e2b929151bfc_service6.png"
                title="Backend em C#"
                text="API em c# para o dropdown clean architecture"
                href="https://github.com/EduardoHenriGC/backend--typeproduct"
            />

            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e8a0132684ac36021f5738_service4.png"
                title="Backend em C#"
                text="API em C# FAKE TWITTER"
                href="https://github.com/EduardoHenriGC/API_Twitter"
            />

            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dba1e586380df2dd882764_service3.png"
                title="Backend NodeEmail"
                text="API usada nesse projeto na pagina de contato"
                href="https://github.com/EduardoHenriGC/API_nodeEmail"
            />

            <CardRepositorio src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e8a013dae8e6c13bad291a_service5.png"
                title="AngularJS"
                text="formulário CRUD usando AngularJS"
                href="https://github.com/EduardoHenriGC/Angular-form-crud"
            />


        </div>
    )
}