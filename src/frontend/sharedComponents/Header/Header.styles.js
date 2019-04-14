import styled, { css } from 'styled-components'

import { FONT_FAMILY_HEADER, CONTENT_SPACING, HEADER_FONT_SIZES, FOREGROUND_COLOR } from 'theme'

const sharedStyles = props => css`
    font-family: ${FONT_FAMILY_HEADER};
    color: ${FOREGROUND_COLOR};
`

const LargeHeader = styled.h1`
    ${props => sharedStyles(props)};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: ${CONTENT_SPACING.xxl};
    margin-top: 0;
    font-size: ${HEADER_FONT_SIZES.l};
`

const MediumHeader = styled.h2`
    ${props => sharedStyles(props)};
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: ${CONTENT_SPACING.xl};
    margin-top: ${CONTENT_SPACING.xl};
    font-size: ${HEADER_FONT_SIZES.m};
`

const SmallHeader = styled.h3`
    ${props => sharedStyles(props)};
    font-weight: 400;
    margin-bottom: ${CONTENT_SPACING.l};
    margin-top: ${CONTENT_SPACING.l};
    font-size: ${HEADER_FONT_SIZES.s};
`

const InlineHeader = styled.span`
    margin: 0 5px;
    text-transform: uppercase;
    font-weight: 700;
`

export { LargeHeader, MediumHeader, SmallHeader, InlineHeader }
