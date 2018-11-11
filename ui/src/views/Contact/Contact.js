import React from 'react'

import { Header, Text } from 'sharedComponents'

import { ContactWrapper } from './Contact.styles'

const Contact = () => {
    return (
        <ContactWrapper>
            <Header size="medium">Contact</Header>
            <Text>For now, get in touch via GitHub.</Text>
        </ContactWrapper>
    )
}

export default Contact
