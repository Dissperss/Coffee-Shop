import styles from './SectionOurBest.module.css'

import firstImg from '../../assets/homePage/best/first.png'
import secondImg from '../../assets/homePage/best/second.png'
import thirdImg from '../../assets/homePage/best/third.png'

export const SectionOurBest = () => {
    return (
        <section className={styles.best}>
            <h2 className={styles.best__title}>Our best</h2>
            <div className={styles.best__wrapper}>
                <div className={styles.best__item}>
                    <img src={firstImg} alt="Solimo Coffee" />
                    <h3 className={styles.best__item_title}>
                        Solimo Coffee Beans 2 kg
                    </h3>
                    <span className={styles.best__item_price}>10.73$</span>
                </div>
                <div className={styles.best__item}>
                    <img src={secondImg} alt="Presto Coffee" />
                    <h3 className={styles.best__item_title}>
                        Presto Coffee Beans 1 kg
                    </h3>
                    <span className={styles.best__item_price}>15.99$</span>
                </div>
                <div className={styles.best__item}>
                    <img src={thirdImg} alt="AROMISTICO Coffee" />
                    <h3 className={styles.best__item_title}>
                        AROMISTICO Coffee 1 kg
                    </h3>
                    <span className={styles.best__item_price}>6.99$</span>
                </div>
            </div>
        </section>
    )
}
