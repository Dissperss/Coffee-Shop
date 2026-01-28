import { useState } from 'react'
import styles from './SearchPanel.module.css'

export const SearchPanel = ({ onChange }) => {
    const [value, setValue] = useState('')

    const onValueChange = (e) => {
        const text = e.target.value
        setValue(text)
        onChange(text)
    }
    return (
        <form>
            <label className={styles.search__label} htmlFor="search">
                Looking for
            </label>
            <input
                className={styles.search__input}
                type="text"
                id="search"
                name="coffee-search"
                placeholder="start typing here..."
                value={value}
                onChange={onValueChange}
            />
        </form>
    )
}
