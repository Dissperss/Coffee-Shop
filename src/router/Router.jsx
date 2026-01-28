import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../provides/Layout'
import { CatalogPage, HomePage } from '../pages/index'

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
        ],
    },
])
