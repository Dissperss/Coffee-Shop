import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components/layout/index'

export function Layout() {
    return (
        <>
            <Header />

            <main className="container">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
