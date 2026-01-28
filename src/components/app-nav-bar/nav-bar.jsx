import { HeaderIcon } from '../layout/Header/headerIcon/HeaderIcon'
import './nav-bar.css'

const NavBar = ({ type = 'header' }) => {
    return (
        <nav
            className={`nav__menu ${type === 'header' ? 'nav__menu-header' : 'nav__menu-footer'}`}
        >
            <HeaderIcon />
            <ul className="nav__item">
                <li className="nav__link">Coffee house</li>
                <li className="nav__link">Our coffee</li>
                <li className="nav__link">For your pleasure</li>
            </ul>
        </nav>
    )
}

export default NavBar
