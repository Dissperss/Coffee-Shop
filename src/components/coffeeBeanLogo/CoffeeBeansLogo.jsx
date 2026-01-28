import styles from './CoffeeBeansLogo.module.css'

import blackCoffeeBeans from '../../assets/black_coffee-beans.svg'

export const CoffeeBeansLogo = () => {
    return (
        <div className={styles.logo}>
            <span />
            <img src={blackCoffeeBeans} alt="black_coffee-beans" />
            <span />
        </div>
    )
}
