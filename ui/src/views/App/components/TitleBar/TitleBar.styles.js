import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

import { CONTENT_SPACING } from 'theme'

const TitleBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const GithubIcon = styled(FaGithub)`
    margin-bottom: ${CONTENT_SPACING.l};
    margin-top: ${CONTENT_SPACING.l};
    fill: #ffffff;
`

export { TitleBarWrapper, GithubIcon }
