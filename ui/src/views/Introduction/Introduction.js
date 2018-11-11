import React from 'react'

import { Header, Text, Code } from 'sharedComponents'

import { IntroductionWrapper } from './Introduction.styles'

const Introduction = () => {
    return (
        <IntroductionWrapper>
            <Header size="medium">Introduction</Header>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat ultrices posuere. Proin massa
                tellus, placerat in hendrerit eu, aliquet sed mauris. Nunc in tincidunt metus, sed tincidunt lectus.
                Nulla sollicitudin risus <Code inline>/pairme</Code> non mattis placerat. Nulla ut sem et urna efficitur
                eleifend eu vitae dui. Cras quis nisi in dui tincidunt ultricies. Quisque dapibus nisi neque, nec
                accumsan metus placerat ac.
            </Text>
            <Code>/pairme</Code>
        </IntroductionWrapper>
    )
}

export default Introduction
