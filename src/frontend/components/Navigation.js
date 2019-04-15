import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { HEADER_FONT_SIZES, CONTENT_SPACING, FOREGROUND_COLOR } from 'theme'
import { Header } from 'sharedComponents'

const NavigationWrapper = styled.div`
    border-top: ${CONTENT_SPACING.xs} solid ${FOREGROUND_COLOR};
    border-bottom: ${CONTENT_SPACING.xs} solid ${FOREGROUND_COLOR};
    margin: ${CONTENT_SPACING.l} 0;
    padding: ${CONTENT_SPACING.l} 0;
`

const NavigationLink = styled(Link)`
    margin-right: ${CONTENT_SPACING.l};
`

const LINKS_CONTENT = [
    {
        text: 'Home',
        to: '/'
    },
    {
        text: 'Setup',
        to: '/setup'
    },
    {
        text: 'FAQ',
        to: '/faq'
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
