
import Repositorios from "@/components/Repositorios";
import SiteMap from "@/components/SiteMap/index";

export default function RepositorioPage() {

    return (
        <>
            <SiteMap
                tema="Repositório"
                subtema="ideias & soluções"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
            <Repositorios />
        </>
    )
}