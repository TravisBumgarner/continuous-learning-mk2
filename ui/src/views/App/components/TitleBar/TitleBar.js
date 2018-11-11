import React from 'react'

import { HEADER_FONT_SIZES } from 'theme'
import { Header } from 'sharedComponents'

import { TitleBarWrapper, GithubIcon } from './TitleBar.styles'

const TitleBar = () => {
    console.log(TitleBarWrapper)
    return (
        <TitleBarWrapper>
            <Header size="large">Let's Chat</Header>
            <a href="https://github.com/TravisBumgarner/lets-pair" target="_blank">
                <GithubIcon size={HEADER_FONT_SIZES.l} />
            </a>
        </TitleBarWrapper>
    )
}

export default TitleBar
