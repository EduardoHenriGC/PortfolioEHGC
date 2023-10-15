import AboutSection from "@/components/AboutSection";
import SiteMap from "@/components/SiteMap/index";
import Tools from "@/components/Tools/index";

export default function Sobre() {

    return (
        <div>
            <SiteMap
                tema="Sobre"
                subtema="biografia & habilidades"
                src="https://st2.depositphotos.com/1032577/5312/i/950/depositphotos_53128333-stock-photo-about-me-sign.jpg" />
            <AboutSection />
            <Tools />
        </div>

    )
}