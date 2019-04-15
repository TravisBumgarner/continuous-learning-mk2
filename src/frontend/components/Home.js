import React from 'react'
import styled from 'styled-components'

import { Header, Text, Code } from 'sharedComponents'
import { PAGE_THEME, CONTENT_SPACING } from 'theme'

const HomeWrapper = styled(PAGE_THEME)``

const Home = () => {
    return (
        <HomeWrapper>
            <Header size="medium">Welcome to Let's Pair!</Header>
            <Text>Thanks for stopping by!</Text>
        </HomeWrapper>
    )
}

export default Home
