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
            filteredData: data,
        }
    }

    onSearch = (text) => {
        this.setState(() => {
            const prompt = text.toLowerCase()
            const filtered = data.filter((item) => {
                return (
                    item.name.toLowerCase().includes(prompt) ||
                    item.country.toLowerCase().includes(prompt)
                )
            })
            return {
                filteredData: filtered,
            }
        })
    }

    render() {
        const filteredData = this.state.filteredData
        return (
            <>
                <Header />
                <About />
                <div className="search">
                    <SearchPanel onChange={this.onSearch} />
                    <Filter />
                </div>
                <CoffeeList data={filteredData} />
                <Footer />
            </>
        )
    }
}

export default App
