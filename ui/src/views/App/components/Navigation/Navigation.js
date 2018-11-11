import React from 'react'

import { HEADER_FONT_SIZES } from 'theme'
import { Header } from 'sharedComponents'

import { NavigationWrapper, NavigationLink } from './Navigation.styles'

const LINKS_CONTENT = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Contribute',
        href: '/contribute'
    },
    {
        text: 'Getting Started',
        href: '/getting_started'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    }
]

const Links = LINKS_CONTENT.map(l => <NavigationLink href={l.href}>{l.text}</NavigationLink>)

const Navigation = () => {
    return <NavigationWrapper>{Links}</NavigationWrapper>
}

export default Navigation
