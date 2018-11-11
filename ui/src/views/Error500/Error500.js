import React from 'react'

import { Header, Text } from 'sharedComponents'

import { Error500Wrapper } from './Error500.styles'

const Error500 = () => {
    return (
        <Error500Wrapper>
            <Header size="medium">Hmmmm</Header>
            <Text>It looks like something went wrong with your request. Please try again later.</Text>
        </Error500Wrapper>
    )
}

export default Error500
