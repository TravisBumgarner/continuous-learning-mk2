import React from 'react'
import styled from 'styled-components'

import { Header, Text } from 'sharedComponents'
import { PAGE_THEME } from 'theme'

const ContributeWrapper = styled(PAGE_THEME)``

const Contribute = () => {
    return (
        <ContributeWrapper>
            <Header size="medium">Contribute</Header>
            <Text>Very much a Work in Progress.</Text>
        </ContributeWrapper>
    )
}

export default Contribute
