import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='flex flex-col h-24 bg-sky-400'>
            <Image
                src='/assets/logo.svg'
                height='100%'
                width='100%'
                alt="Nessi's Neuggets Logo"
            />
            <nav className='flex flex-row justify-around items-center'>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header
