import { Link } from 'react-router-dom'
import { HeaderIcon } from '../layout/Header/headerIcon/HeaderIcon'
import styles from './NavBar.module.css'

export const NavBar = ({ type = 'header' }) => {
    return (
        <nav
            className={`${styles.nav__menu} ${type === 'header' ? styles.nav__menu_header : styles.nav__menu_footer}`}
        >
            <HeaderIcon />
            <ul className={styles.nav__item}>
                <Link to="/" className={styles.nav__link}>
                    <li>Coffee house</li>
                </Link>
                <Link to="/catalog" className={styles.nav__link}>
                    <li>Our coffee</li>
                </Link>
                <Link to="/pleasure" className={styles.nav__link}>
                    <li>For your pleasure</li>
                </Link>
            </ul>
        </nav>
    )
}
