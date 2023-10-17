import Projetos from "@/components/Projetos"
import SiteMap from "@/components/SiteMap/index"


export default function ProjetosPage() {
    return (
        <>
            <SiteMap
                tema="Projetos"
                subtema="jogos & desafios"
                src="https://assets-blog.hostgator.com.br/wp-content/uploads/2016/09/logica-de-programacao-blog.webp" />
            <Projetos />
        </>
    )


}