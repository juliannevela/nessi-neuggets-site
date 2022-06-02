import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col justify-center items-center bg-sky-400'>
            <img
                className='scale-75'
                alt="nessi's neuggets logo"
                src='/assets/logo.svg'
            />
            <nav className='flex flex-row justify-around w-full'>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header
