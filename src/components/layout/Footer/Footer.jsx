import Logo from '../../coffee-beans-logo/logo'
import NavBar from '../../app-nav-bar/nav-bar'

import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <NavBar type="footer" />
            <Logo />
        </footer>
    )
}
