import React from 'react'

import { Header, Text } from 'sharedComponents'

import { Error404Wrapper } from './Error404.styles'

const Error404 = () => {
    return (
        <Error404Wrapper>
            <Header size="medium">Hmmmm</Header>
            <Text>
                The page you were looking for was not found. Click <a href="/">here</a> to return home.
            </Text>
        </Error404Wrapper>
    )
}

export default Error404
