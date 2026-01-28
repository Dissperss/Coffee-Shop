import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
// import { CartProvider } from '@/context/cart/cartProvider'

function App() {
    return <RouterProvider router={router} />
}

export default App
