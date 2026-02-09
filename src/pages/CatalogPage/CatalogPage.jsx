import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { Header } from '../../components/layout'
import { SectionAboutBeans } from '../../components/sectionAboutBeans/SectionAboutBeans'
import { SearchPanel } from '../../components/searchPanel/SearchPanel'
import { CatalogFilter } from '../../components/catalogFilter/index'
import { CoffeeList } from '../../components/coffeeList'
import { data } from '../../data'

import styles from './CatalogPage.module.css'

export const CatalogPage = () => {
    const [filter, setFilter] = useState('all')
    const [searchText, setSearchText] = useState('')

    const onSearch = (text) => {
        setSearchText(text.trim())
    }

    const onFilterSelect = (newFilter) => {
        setFilter(newFilter)
    }

    // Фильтрация — вынесем в useMemo для оптимизации
    const resultData = useMemo(() => {
        let filtered = data

        // Поиск
        if (searchText) {
            const lower = searchText.toLowerCase()
            filtered = filtered.filter(
                (item) =>
                    item.name.toLowerCase().includes(lower) ||
                    item.country.toLowerCase().includes(lower)
            )
        }

        // Фильтр по стране
        if (filter !== 'all') {
            filtered = filtered.filter(
                (item) => item.country.toLowerCase() === filter
            )
        }

        return filtered
    }, [searchText, filter])

    return (
        <>
            <Helmet>
                <meta name="description" content="List of our coffee" />
                <meta
                    name="keywords"
                    content="coffee aromistico kenya brasil nescafe columbia"
                ></meta>
                <title>Coffee list</title>
            </Helmet>
            <Header bgType="default" title="Our Coffee" />
            <SectionAboutBeans />
            <div className={styles.search}>
                <SearchPanel onChange={onSearch} />
                <CatalogFilter
                    filter={filter}
                    onFilterSelect={onFilterSelect}
                />
            </div>
            <CoffeeList data={resultData} />
        </>
    )
}
