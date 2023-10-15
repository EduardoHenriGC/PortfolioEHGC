import { NavItem } from "../NavItem/index";
import styles from "@/styles/Navbar/Navbar.module.css";
import ButtonNavbar from "../ButtonNavbar/index";
import { usePortfolio } from "@/context/PortfolioContext/";

export default function Navbar() {
    const { toggleList, toggleMenu, isOpen } = usePortfolio();

    return (
        <div className={styles.container}>
            <span className={styles.logo}>Portfólio</span>
            <ButtonNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
            <ul className={`${styles.menuList} ${isOpen ? styles.menuListOpen : styles.menuListClosed}`}>
                <NavItem href="/" text="inicio" toggleList={toggleList} />
                <NavItem href="/sobre" text="sobre" toggleList={toggleList} />
                <NavItem href="/projetos" text="projetos" toggleList={toggleList} />
                <NavItem href="/repositorio" text="repositório" toggleList={toggleList} />
                <NavItem href="/contato" text="Contato" toggleList={toggleList} />
            </ul>
        </div>
    );
}
