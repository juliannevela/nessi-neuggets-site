import React from 'react'
import './Button.css'

type ButtonProps = {
    onClick?: () => void
    children: string
    outline?: boolean
    size?: 'small' | 'large'
}

const Button = ({ children, outline, size }: ButtonProps) => {
    let classes = ''
    if (outline) classes += 'outline '
    if (size) classes += `${size} `
    return <button className={classes}>{children}</button>
}

export default Button
