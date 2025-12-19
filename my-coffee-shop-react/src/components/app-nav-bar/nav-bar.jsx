import coffeeBeans from "../../assets/coffee-beans.svg"

import "./nav-bar.css"

const NavBar = () => {
    return (
        <nav className="nav__menu">
            <img className="nav__img" src={coffeeBeans} alt="coffee-beans" />
            <ul className="nav__item">
                <li className="nav__link">Coffee house</li>
                <li className="nav__link">Our coffee</li>
                <li className="nav__link">For your pleasure</li>
            </ul>
        </nav>
    )
}

export default NavBar;