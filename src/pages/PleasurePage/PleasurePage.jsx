import { Helmet } from 'react-helmet'
import { Header } from '../../components/layout'
import { CoffeeList } from '../../components/coffeeList'
import { SectionAboutGoods } from '../../components/sectionAboutGoods'
import coffeeCardImg from '../../assets/coffee-card.png'

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

export const PleasurePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="More about our goods" />
                <meta
                    name="keywords"
                    content="coffee aromistico kenya brasil nescafe columbia"
                ></meta>
                <title>For your pleasure</title>
            </Helmet>
            <Header bgType="pleasure" title="For your pleasure" />
            <SectionAboutGoods />
            <CoffeeList data={data} />
        </>
    )
}
