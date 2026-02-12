import { CoffeeBeansLogo } from '@/components/coffeeBeanLogo'
import { NavBar } from '@/components/navBar'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NavBar type="footer" />
            <CoffeeBeansLogo />
        </footer>
    )
}
