import { Helmet } from 'react-helmet'
import { Header } from '../../components/layout'
import { CoffeeList } from '../../components/coffeeList'
import { SectionAboutGoods } from '../../components/sectionAboutGoods'
import { data } from '../../data'

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
