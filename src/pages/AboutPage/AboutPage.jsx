import { Helmet } from 'react-helmet'
import { Header } from '../../components/layout'
import { SectionAboutCoffee } from '../../components/sectionAboutCoffee/SectionAboutCoffee'

export const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="More information about coffee"
                />
                <meta
                    name="keywords"
                    content="coffee aromistico brasil "
                ></meta>
                <title>About coffee</title>
            </Helmet>

            <Header bgType="default" title="Our Coffee" />
            <SectionAboutCoffee />
        </>
    )
}
