import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from 'Styles/Home.module.css'
import Menu from 'Components/Molecules/Menu'

const Header = () => {
    const mobileNav = () => {
        const [isOpen, setIsOpen] = React.useState(false)
        const handleOpen = () => {
            setIsOpen(!isOpen)
            return isOpen
        }

        return (
            <nav className={styles.mobileNav}>
                <Menu isOpen={handleOpen()} />
                {/* <ul>
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
            </ul> */}
            </nav>
        )
    }
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
