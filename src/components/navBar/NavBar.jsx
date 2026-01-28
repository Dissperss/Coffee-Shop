import { HeaderIcon } from '../layout/Header/headerIcon/HeaderIcon'
import styles from './NavBar.module.css'

export const NavBar = ({ type = 'header' }) => {
    return (
        <nav
            className={`${styles.nav__menu} ${type === 'header' ? styles.nav__menu_header : styles.nav__menu_footer}`}
        >
            <HeaderIcon />
            <ul className={styles.nav__item}>
                <li className={styles.nav__link}>Coffee house</li>
                <li className={styles.nav__link}>Our coffee</li>
                <li className={styles.nav__link}>For your pleasure</li>
            </ul>
        </nav>
    )
}
