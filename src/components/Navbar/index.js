import { NavItem } from "../NavItem/index";
import styles from "@/styles/Navbar/Navbar.module.css";
import ButtonNavbar from "../ButtonNavbar/index";
import { usePortfolio } from "@/context/PortfolioContext/";

export default function Navbar() {
    const { toggleMenu, isOpen } = usePortfolio();

    return (
        <div className={styles.container}>
            <span className={styles.logo}>Portfólio</span>
            <ButtonNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
            <ul className={`${styles.menuList} ${isOpen ? styles.menuListOpen : styles.menuListClosed}`}>
                <NavItem href="/" text="inicio" />
                <NavItem href="/sobre" text="sobre" />
                <NavItem href="/projetos" text="projetos" />
                <NavItem href="/repositorio" text="repositórios" />
                <NavItem href="/contato" text="Contato" />
            </ul>
        </div>
    );
}
