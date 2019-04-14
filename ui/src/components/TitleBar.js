import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

import { HEADER_FONT_SIZES, CONTENT_SPACING } from 'theme'
import { Header } from 'sharedComponents'

const TitleBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const GithubIcon = styled(FaGithub)`
    margin-bottom: ${CONTENT_SPACING.l};
    margin-top: ${CONTENT_SPACING.l};
    fill: #ffffff;
`

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
