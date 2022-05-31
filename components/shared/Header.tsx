import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const Header = () => {
    const mobileNav = (
        <nav className={styles.mobileNav}>
            <ul>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
    return (
        <header className='flex flex-col justify-center items-center border-sky-400 border-4'>
            <img
                className='scale-75'
                alt="nessi's neuggets logo"
                src='/assets/banner.svg'
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
