import { Link } from 'react-router-dom'
import styles from './CoffeeCard.module.css'

export const CoffeeCard = (props) => {
    const { name, country, img, price } = props

    return (
        <div className={styles.card}>
            <div className={styles.coffee__card_item}>
                <Link to="/about">
                    <img
                        className={styles.coffee__card_img}
                        src={img}
                        alt="coffee_card-img"
                    />
                </Link>
                <h3 className={styles.coffee__card_title}>{name}</h3>
                <p className={styles.coffee__card_country}>{country}</p>
                <p className={styles.coffee__card_price}>{price}</p>
            </div>
        </div>
    )
}
