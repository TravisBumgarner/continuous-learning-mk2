import React from 'react'

import { Header, Text } from 'sharedComponents'

import { AboutWrapper } from './About.styles'

const About = () => {
    return (
        <AboutWrapper>
            <Header size="medium">About</Header>
            <Text>Very much a Work in Progress.</Text>
        </AboutWrapper>
    )
}

export default About
