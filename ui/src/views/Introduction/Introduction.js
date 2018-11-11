import React from 'react'

import { Header, Text } from 'sharedComponents'

import { IntroductionWrapper } from './Introduction.styles'

const Introduction = () => {
    return (
        <IntroductionWrapper>
            <Header size="medium">Introduction</Header>
            <Text>Very much a Work in Progress.</Text>
        </IntroductionWrapper>
    )
}

export default Introduction
