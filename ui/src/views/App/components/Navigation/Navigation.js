import React from 'react'

import { HEADER_FONT_SIZES } from 'theme'
import { Header } from 'sharedComponents'

import { NavigationWrapper, NavigationLink } from './Navigation.styles'

const LINKS_CONTENT = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Contribute',
        to: '/contribute'
    },
    {
        text: 'Introduction',
        to: '/introduction'
    },
    {
        text: 'About',
        to: '/about'
    },
    {
        text: 'Contact',
        to: '/contact'
    }
]

const Links = LINKS_CONTENT.map(l => (
    <NavigationLink key={l.text} to={l.to}>
        {l.text}
    </NavigationLink>
))

const Navigation = () => {
    return <NavigationWrapper>{Links}</NavigationWrapper>
}

export default Navigation
