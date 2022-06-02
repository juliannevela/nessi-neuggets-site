import React from 'react'
import Footer from 'Components/Layout/Footer'
import Header from 'Components/Layout/Header'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
