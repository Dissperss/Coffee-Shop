import styles from './CatalogFilter.module.css'

export const CatalogFilter = (props) => {
    const buttonsData = [
        {
            name: 'all',
            label: 'All',
        },
        {
            name: 'brazil',
            label: 'Brazil',
        },
        {
            name: 'kenya',
            label: 'Kenya',
        },
        {
            name: 'columbia',
            label: 'Columbia',
        },
    ]

    return (
        <div className={styles.filter}>
            <h3 className={styles.filter__title}>Or filter</h3>
            <div className={styles.filter__btns}>
                {buttonsData.map(({ name, label }) => {
                    const active = props.filter === name
                    const clazz = active ? styles['btn-active'] : ''
                    return (
                        <button
                            className={`${styles.btn} ${clazz}`}
                            type="button"
                            key={name}
                            onClick={() => props.onFilterSelect(name)}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
