import styled from 'styled-components'

import { CONTENT_SPACING } from 'theme'

const NavigationWrapper = styled.div`
    border-top: ${CONTENT_SPACING.xs} solid #ffffff;
    border-bottom: ${CONTENT_SPACING.xs} solid #ffffff;
    margin: ${CONTENT_SPACING.l} 0;
    padding: ${CONTENT_SPACING.l} 0;
`

const NavigationLink = styled.a`
    margin-right: ${CONTENT_SPACING.l};
`

export { NavigationWrapper, NavigationLink }
