import "./app-filter.css"

const Filter = () => {
    return (
        <div className="filter">
            <h3 className="filter__title">Or filter</h3>
            <div className="filter__btns">
                <button>Brazil</button>
                <button>Kenya</button>
                <button>Columbia</button>
                {/* Сделать кнопки через массив по аналогии с app-filter в проекте employees */}
            </div>
        </div>
    )
}

export default Filter;