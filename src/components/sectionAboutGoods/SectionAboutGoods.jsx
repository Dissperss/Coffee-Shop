import { CoffeeBeansLogo } from '@/components/coffeeBeanLogo'
import coffeeCup from '@/assets/pleasurePage/coffee_cup.jpg'

import styles from './SectionAboutGoods.module.css'
export const SectionAboutGoods = () => {
    return (
        <section className={styles.about__goods}>
            <div className={styles.about__gooods_wrapper}>
                <img
                    src={coffeeCup}
                    alt="coffee_cup_img"
                    className="about__goods_img"
                />
                <div className={styles.about__goods_block}>
                    <h2 className={styles.goods__title}>About our goods</h2>
                    <CoffeeBeansLogo color="black" />
                    <p className={styles.goods__text}>
                        Extremity sweetness difficult behaviour he of. On
                        disposal of as landlord horrible.
                    </p>
                    <p className={styles.goods__descr}>
                        Afraid at highly months do things on at. Situation
                        recommend objection do intention so questions. As
                        greatly removed calling pleased improve an. Last ask him
                        cold feel met spot shy want. Children me laughing we
                        prospect answered followed. At it went is song that held
                        help face.
                    </p>
                </div>
            </div>
        </section>
    )
}
