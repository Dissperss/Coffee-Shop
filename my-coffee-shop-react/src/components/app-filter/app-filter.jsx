import './app-filter.css'

const Filter = (props) => {
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

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name
        const clazz = active ? 'btn-active' : ''
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="filter">
            <h3 className="filter__title">Or filter</h3>
            <div className="filter__btns">{buttons}</div>
        </div>
    )
}

export default Filter
