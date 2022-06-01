import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className='flex flex-col w-full justify-center items-center tracking-wide py-2 bg-yellow-400 leading-loose'>
            <section>
                Made with{' '}
                <FontAwesomeIcon
                    icon={['fas', 'heart']}
                    color='red'
                    className='mx-1'
                />{' '}
                by{' '}
                <a
                    href='https://juliannevela.dev'
                    rel='noreferrer'
                    className='mx-1'
                >
                    Julianne Vela
                </a>
            </section>
            <section className='flex flex-row justify-center items-center'>
                <FontAwesomeIcon icon={['far', 'copyright']} className='mx-1' />{' '}
                2022 All Rights Reserved
            </section>
        </footer>
    )
}

export default Footer
