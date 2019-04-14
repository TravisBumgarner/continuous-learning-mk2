import React from 'react'
import styled from 'styled-components'

import { Header, Text } from 'sharedComponents'
import { PAGE_THEME } from 'theme'

const ErrorWrapper = styled(PAGE_THEME)``

const Error = () => {
    return (
        <ErrorWrapper>
            <Header size="medium">Error</Header>
            <Text>Very much a Work in Progress.</Text>
        </ErrorWrapper>
    )
}

export default Error
