import React from 'react'
import Footer from 'Components/Shared/Footer'
import Header from 'Components/Shared/Header'

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
