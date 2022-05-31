import React from 'react'
import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.logo}}`}>
            <img src='./assets/logo.png' alt="Nessi's Neuggets Logo" />
        </footer>
    )
}

export default Footer
