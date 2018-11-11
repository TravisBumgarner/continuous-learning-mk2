import React from 'react'

import { Header, Text } from 'sharedComponents'

import { WelcomeWrapper } from './Welcome.styles'

const Welcome = () => {
    return (
        <WelcomeWrapper>
            <Header size="medium">Thanks for Registering!</Header>
            <Header size="small">Next Steps</Header>
            <Text>Starting next week on Monday morning, you'll receive an invite to pair.</Text>
            <Header size="small">Contribute</Header>
            <Text>Check out the GitHub repo linked in the top left corner.</Text>
        </WelcomeWrapper>
    )
}

export default Welcome
