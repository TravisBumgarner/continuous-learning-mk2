import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import { HEADER_FONT_SIZES, CONTENT_SPACING, HOVER_COLOR, BACKGROUND_COLOR, FOREGROUND_COLOR } from 'theme'
import { Header } from 'sharedComponents'

const TitleBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const GithubIcon = styled(FaGithub)`
    margin-bottom: ${CONTENT_SPACING.l};
    margin-top: 0;
    margin-left: ${CONTENT_SPACING.l};
    fill: ${FOREGROUND_COLOR};
    &:hover {
        fill: ${HOVER_COLOR};
    }
`

const TwitterIcon = styled(FaTwitter)`
    margin-bottom: ${CONTENT_SPACING.l};
    margin-top: 0;
    margin-left: ${CONTENT_SPACING.l};
    fill: ${FOREGROUND_COLOR};
    &:hover {
        fill: ${HOVER_COLOR};
    }
`

const TitleBar = () => {
    return (
        <TitleBarWrapper>
            <Header size="large">Let's Pair</Header>
            <div>
                <a href="https://github.com/TravisBumgarner/lets-pair" target="_blank">
                    <GithubIcon size={HEADER_FONT_SIZES.l} />
                </a>
                <a href="https://twitter.com/travis_the_makr" target="_blank">
                    <TwitterIcon size={HEADER_FONT_SIZES.l} />
                </a>
            </div>
        </TitleBarWrapper>
    )
}

export default TitleBar
