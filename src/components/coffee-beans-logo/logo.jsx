import "./logo.css"

import blackCoffeeBeans from "../../assets/black_coffee-beans.svg"

const Logo = () => {
    return (
        <div className="logo">
            <span />
            <img src={blackCoffeeBeans} alt="black_coffee-beans" />
            <span />
        </div>
    )
}

export default Logo;