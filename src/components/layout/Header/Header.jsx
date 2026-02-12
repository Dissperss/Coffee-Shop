import { NavBar } from '@/components/navBar'
import styles from './Header.module.css'

export const Header = ({ bgType = 'default', title = null }) => {
    return (
        <header className={`${styles.header} ${styles[`header_${bgType}`]}`}>
            <NavBar type="header" />
            {title !== null && <h1 className={styles.title}>{title}</h1>}
        </header>
    )
}
