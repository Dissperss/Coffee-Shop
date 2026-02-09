import { CoffeeBeansLogo } from '../coffeeBeanLogo/CoffeeBeansLogo'
import styles from './SectionAboutCoffee.module.css'
import coffeeImg from '../../assets/aboutPage/aromistico.jpg'

export const SectionAboutCoffee = () => {
    return (
        <section className={styles.about__coffee}>
            <div className={styles.about__wrapper}>
                <img
                    src={coffeeImg}
                    alt="coffeeImg"
                    className={styles.about__coffee_img}
                />
                <div className={styles.about__coffee_block}>
                    <div className={styles.about__block_header}>
                        <h2 className={styles.about__coffee_title}>About it</h2>
                        <CoffeeBeansLogo color="black" />
                    </div>
                    <div className={styles.about__block_inner}>
                        <div className={styles.about__coffee_country}>
                            Country: <span>Brasil</span>
                        </div>
                        <p className={styles.about__coffee_descr}>
                            Description:{' '}
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </span>
                        </p>
                        <span className={styles.about__coffee_price}>
                            Price: <span>16.99$</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
