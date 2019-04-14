import styled from 'styled-components'

import { FONT_SIZE_INPUTS_AND_BUTTONS, FONT_FAMILY_TEXT, CONTENT_SPACING } from 'theme'

const CodeSpan = styled.span`
    background-color: rgba(0, 0, 0, 0.1);
    padding: ${CONTENT_SPACING.xs};
    border-radius: ${CONTENT_SPACING.s};
    margin: 0 ${CONTENT_SPACING.xs};
`

const CodeDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    padding: ${CONTENT_SPACING.l};
    border-radius: ${CONTENT_SPACING.s};
    margin: ${CONTENT_SPACING.l} 0;
`

export { CodeSpan, CodeDiv }
