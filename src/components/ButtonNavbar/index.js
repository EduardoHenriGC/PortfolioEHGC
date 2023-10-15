import styles from "@/styles/ButtonNavbar/ButtonNavbar.module.css"

export default function ButtonNavbar({ isOpen, toggleMenu }) {


    return (

        <button
            className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
        >
            <span className={styles.menuIcon}></span>
            <hr className={styles.menuIcon} />
            <span className={styles.menuIcon}></span>
        </button>

    )
}