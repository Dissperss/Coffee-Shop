import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { Header } from '../../components/layout'
import { SectionAbout } from '../../components/sectionAbout/SectionAbout'
import { SearchPanel } from '../../components/searchPanel/SearchPanel'
import { CatalogFilter } from '../../components/catalogFilter/index'
import { CoffeeList } from '../../components/coffeeList'

import coffeeCardImg from '../../assets/coffee-card.png'

import styles from './CatalogPage.module.css'

const data = [
    {
        id: 1,
        country: 'Brazil',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'AROMISTICO Coffee 1 kg',
    },
    {
        id: 2,
        country: 'Kenya',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'AROMISTICO Coffee 1 kg',
    },
    {
        id: 3,
        country: 'Columbia',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'Nescafe Gold',
    },
    {
        id: 4,
        country: 'Brazil',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'AROMISTICO Coffee 1 kg',
    },
    {
        id: 5,
        country: 'Brazil',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'AROMISTICO Coffee 1 kg',
    },
    {
        id: 6,
        country: 'Brazil',
        price: '6.99$',
        img: coffeeCardImg,
        name: 'AROMISTICO Coffee 1 kg',
    },
]

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
                    content="coffee aromistico nescafe"
                ></meta>
                <title>Coffee list</title>
            </Helmet>
            <Header bgType="default" title="Our Coffee" />
            <SectionAbout />
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
