import { useRouter } from "next/router";
import styles from "@/styles/Navbar/Navbar.module.css";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";

export function NavItem({ href, text }) {

    const { toggleList } = usePortfolio();
    const { route } = useRouter();

    return (
        <li>
            <Link onClick={toggleList} href={href} className={route === href ? styles.selected : ""}>
                {text}
            </Link>
        </li>
    );
}