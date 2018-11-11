import React from 'react'

import { Header, Text } from 'sharedComponents'

import { WelcomeWrapper } from './Welcome.styles'

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <Header size="medium">Thanks for Registering!</Header>
            <Header size="small">Next Steps</Header>
        </WelcomeWrapper>
    )
}

export default Welcome
