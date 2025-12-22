import { useEffect, useState } from 'react'
import './search-panel.css'

const SearchPanel = ({ onChange }) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        onChange(value)
    }, [value])
    return (
        <form>
            <label className="search__label" htmlFor="search">
                Looking for
            </label>
            <input
                className="search__input"
                type="text"
                id="search"
                name="coffee-search"
                placeholder="start typing here..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

export default SearchPanel
