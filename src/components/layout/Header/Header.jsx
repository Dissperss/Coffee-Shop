import NavBar from '../../app-nav-bar/nav-bar'

import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <NavBar type="header" />
            <h1 className="title">Our Coffee</h1>
        </header>
    )
}
