import styled, { createGlobalStyle, css } from 'styled-components'

const TRANSITION_SPEED = 1
const CONTENT_SPACING = {
    xs: '0.125rem',
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    xl: '2rem',
    xxl: '4rem',
    xxxl: '8rem',
    xxxxl: '16rem'
}
const HEADER_FONT_SIZES = {
    s: '1.4rem',
    m: '1.7rem',
    l: '2rem'
}

const TEXT_FONT_SIZES = {
    m: '1.0rem'
}

const ICON_COLOR = {
    initial: '#000',
    hover: 'rgb(74, 207, 160)'
}

const ICON_FONT_SIZES = {
    ...HEADER_FONT_SIZES
}

const FONT_FAMILY_HEADER = "'Raleway', sans-serif;"
const FONT_FAMILY_TEXT = "'Montserrat', sans-serif"

const FONT_SIZE_INPUTS_AND_BUTTONS = 14

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
}

// Iterate through the sizes and create a media template
const MEDIA = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `
    return acc
}, {})

const PAGE_THEME = styled.div``

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 18px;
        padding: ${CONTENT_SPACING.l};
        ${MEDIA.desktop`font-size: 16px;`}
        ${MEDIA.tablet`font-size: 14px;`}
    }
`

export {
    MEDIA,
    GlobalStyle,
    generateTheme,
    PAGE_THEME,
    FONT_FAMILY_TEXT,
    FONT_FAMILY_HEADER,
    FONT_SIZE_INPUTS_AND_BUTTONS,
    TRANSITION_SPEED,
    CONTENT_SPACING,
    HEADER_FONT_SIZES,
    TEXT_FONT_SIZES,
    ICON_FONT_SIZES,
    ICON_COLOR
}
