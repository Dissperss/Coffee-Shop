import { Link } from 'react-router-dom'
import { CoffeeBeansLogo } from '../coffeeBeanLogo/CoffeeBeansLogo'
import { Header } from '../layout'

import styles from './SectionGreetings.module.css'

export const SectionGreetings = () => {
    return (
        <section className={styles.greetings}>
            <Header bgType="home" title="" />
            <h1 className={styles.title}>Everything You Love About Coffee</h1>
            <CoffeeBeansLogo color="white" />
            <p className={styles.greetings__text}>
                We makes every day full of energy and taste <br />
                Want to try our beans?
            </p>
            <Link to="/catalog">
                <button
                    onClick={() => console.log('click!')}
                    className={styles.greetings__btn}
                >
                    More
                </button>
            </Link>
        </section>
    )
}
