import React from 'react'

import { Header, Text } from 'sharedComponents'

import { WelcomeWrapper } from './Error500.styles'

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <Header size="medium">Hmmmm</Header>
            <Text>It looks like something went wrong with your request. Please try again later.</Text>
        </WelcomeWrapper>
    )
}

export default Welcome
