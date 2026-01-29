import { CoffeeBeansLogo } from '../coffeeBeanLogo/CoffeeBeansLogo'

import drinkingCoffee from '../../assets/drinking_coffee.png'

import styles from './SectionAbout.module.css'

export const SectionAbout = () => {
    return (
        <div className={styles.about__wrapper}>
            <img src={drinkingCoffee} alt="drinking_coffee" />
            <div className={styles.about__block}>
                <h2 className={styles.about__title}>About our beans</h2>
                <CoffeeBeansLogo color="black" />
                <p className={styles.about__descr}>
                    Extremity sweetness difficult behaviour he of. On <br />{' '}
                    disposal of as landlord horrible.
                </p>
                <p className={styles.about__text}>
                    Afraid at highly months do things on at. <br />
                    Situation recommend objection do intention <br /> so
                    questions. <br />
                    As greatly removed calling pleased improve an. <br /> Last
                    ask him cold feel <br /> met spot shy want. Children me
                    laughing we <br /> prospect answered followed. At it went{' '}
                    <br /> is song that held help face.
                </p>
            </div>
        </div>
    )
}
