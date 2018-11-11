import React from 'react'

import { HEADER_FONT_SIZES } from 'theme'
import { Header } from 'sharedComponents'

import { TitleBarWrapper, GithubIcon } from './TitleBar.styles'

const TitleBar = () => {

    return (
        <TitleBarWrapper>
            <Header size="large">Let's Pair</Header>
            <a href="https://github.com/TravisBumgarner/lets-pair" target="_blank">
                <GithubIcon size={HEADER_FONT_SIZES.l} />
            </a>
        </TitleBarWrapper>
    )
}

export default TitleBar
