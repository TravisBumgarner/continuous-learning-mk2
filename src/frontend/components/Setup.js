import React from 'react'
import styled from 'styled-components'

import { Header, Text, Code } from 'sharedComponents'
import { PAGE_THEME, CONTENT_SPACING } from 'theme'

const SetupWrapper = styled(PAGE_THEME)``

const QuestionWrapper = styled.div`
    margin-bottom: ${CONTENT_SPACING.xl};
`

const Setup = () => {
    return (
        <SetupWrapper>
            <Header size="medium">Setup</Header>
            <Header size="small">Register</Header>
            <Text>
                Type <Code inline>/letspair</Code> in Slack to get registered.
            </Text>
            <Header size="small">Tools</Header>
            <Text>Use this.</Text>
        </SetupWrapper>
    )
}

export default Setup
