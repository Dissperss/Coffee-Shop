import Logo from "../coffee-beans-logo/logo"

import drinkingCoffee from "../../assets/drinking_coffee.png"

import "./about.css"

const About = () => {
    return (
        <div className="about__wrapper">
            <img src={drinkingCoffee} alt="drinking_coffee" />
            <div className="about__block">
                <h2 className="about__title">About our beans</h2>
                <Logo/>
                <p className="about__descr">Extremity sweetness difficult behaviour he of. On <br /> disposal of as landlord horrible.</p>
                <p className="about__text">
                    Afraid at highly months do things on at. <br />Situation recommend objection do intention <br /> so questions. <br /> 
                    As greatly removed calling pleased improve an.  <br /> Last ask him cold feel <br /> met spot shy want. Children me laughing we <br /> prospect answered followed. At it went <br /> is song that held help face.
                </p>
            </div>
        </div>
    )
} 

export default About;