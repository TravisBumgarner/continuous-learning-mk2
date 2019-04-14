import styled from 'styled-components'

import { FONT_FAMILY_TEXT, CONTENT_SPACING, TEXT_FONT_SIZES } from 'theme'

const DefaultText = styled.p`
    font-family: ${FONT_FAMILY_TEXT};
    line-height: 1.5;
    margin-bottom: ${CONTENT_SPACING.m};
    margin-top: ${CONTENT_SPACING.m};
    font-weight: 100;

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
