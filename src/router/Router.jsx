import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../provides/Layout'
import { CatalogPage, HomePage, AboutPage } from '../pages/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'catalog',
                element: <CatalogPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
])
