import { Helmet } from 'react-helmet'
import { SectionGreetings } from '../../components/sectionGreetings'
import { SectionAboutUs } from '../../components/sectionAboutUs/SectionAboutUs'
import { SectionOurBest } from '../../components/sectionOurBest/SectionOurBest'

export const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Website for coffee shop" />
                <meta name="keywords" content="coffee"></meta>
                <title>Coffee Shop</title>
            </Helmet>

            <SectionGreetings />
            <SectionAboutUs />
            <SectionOurBest />
        </>
    )
}
