import { NavBar } from '../../navBar'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar type="header" />
            <h1 className={styles.title}>Our Coffee</h1>
        </header>
    )
}
