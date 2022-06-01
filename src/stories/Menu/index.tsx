import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Link from 'next/link'
import Button from 'Components/Atoms/Button'

type MenuProps = {
    isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
    return (
        <MenuContainer isOpen>
            <Button onClick={() => isOpen} size='large'>
                Hello, lovely
            </Button>
            <MenuItem>
                <Link href='/'>Home</Link>
            </MenuItem>
            <MenuItem>
                <Link href='/projects'>Projects</Link>
            </MenuItem>
            <MenuItem>
                <Link href='/blog'>Blog</Link>
            </MenuItem>
            <MenuItem>
                <Link href='/about'>About</Link>
            </MenuItem>
            <MenuItem>
                <Link href='/contact'>Contact</Link>
            </MenuItem>
        </MenuContainer>
    )
}

export default Menu

const MenuContainer = styled.div`
    ${tw`fixed inset-0 z-50`}
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ isOpen }: MenuProps) => (isOpen ? 1 : 0)};
`
const MenuItem = styled.div`
    ${tw`p-4`}
`
