import styled from 'styled-components'

import { FONT_FAMILY_TEXT, CONTENT_SPACING, TEXT_FONT_SIZES } from 'Theme'

const DefaultText = styled.p`
    color: ${props => (props.inverted ? 'white' : 'black')};
    font-family: ${FONT_FAMILY_TEXT};
    line-height: 1.5;
    padding-bottom: ${CONTENT_SPACING.m};
    padding-top: ${CONTENT_SPACING.m};

    &:first-child {
        margin: 0;
    }

    &:last-child {
        margin: 0;
    }
`

const MediumText = styled(DefaultText)`
    font-size: ${TEXT_FONT_SIZES.m};
`

export { MediumText }
