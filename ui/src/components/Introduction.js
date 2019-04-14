import React from 'react'
import styled from 'styled-components'

import { Header, Text, Code } from 'sharedComponents'
import { PAGE_THEME } from 'theme'

const IntroductionWrapper = styled(PAGE_THEME)``

const Introduction = () => {
    return (
        <IntroductionWrapper>
            <Header size="medium">Introduction</Header>
            <Text>Hi.</Text>
        </IntroductionWrapper>
    )
}

export default Introduction
