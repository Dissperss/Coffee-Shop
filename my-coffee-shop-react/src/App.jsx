import { Component } from 'react'

import Header from './components/app-header/header'
import About from './components/app-section-about/about'
import SearchPanel from './components/search-panel/search-panel'
import Filter from './components/app-filter/app-filter'
import CoffeeList from './components/app-coffee-cards/app-coffee-cards'
import Footer from './components/app-footer/footer'

import coffeeCardImg from '../src/assets/coffee-card.png'

import './App.css'

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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            filter: 'all',
            searchText: '',
        }
    }

    onSearch = (text) => {
        this.setState({
            searchText: text.trim(),
        })
    }

    filterCountry = (items, filter) => {
        if (filter === 'all') {
            return items
        }

        return items.filter((item) => item.country.toLowerCase() === filter)
    }

    search = (items, text) => {
        if (!text) {
            return items
        }

        const lower = text.toLowerCase()

        return items.filter(
            (item) =>
                item.name.toLowerCase().includes(lower) ||
                item.country.toLowerCase().includes(lower)
        )
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { filter, data, searchText } = this.state

        const searchedData = this.search(data, searchText)
        const resultData = this.filterCountry(searchedData, filter)

        return (
            <>
                <Header />
                <About />
                <div className="search">
                    <SearchPanel onChange={this.onSearch} />
                    <Filter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <CoffeeList data={resultData} />
                <Footer />
            </>
        )
    }
}

export default App
