import { CoffeeCard } from '../coffeeCard'

import styles from './CoffeeList.module.css'

export const CoffeeList = ({ data }) => {
    if (data.length === 0) {
        return <p className={styles.nothing}>Nothing found</p>
    }
    const elements = data.map((item) => {
        const { id, ...itemProps } = item
        return <CoffeeCard key={id} {...itemProps} />
    })

    return <ul className={styles.coffee__list}>{elements}</ul>
}
