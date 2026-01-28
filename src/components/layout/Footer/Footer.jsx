import { CoffeeBeansLogo } from '../../coffeeBeanLogo/CoffeeBeansLogo'
import { NavBar } from '../../navBar'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavBar type="footer" />
            <CoffeeBeansLogo />
        </footer>
    )
}
