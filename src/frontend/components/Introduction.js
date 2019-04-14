import React from 'react'
import styled from 'styled-components'

import { Header, Text, Code } from 'sharedComponents'
import { PAGE_THEME, CONTENT_SPACING } from 'theme'

const IntroductionWrapper = styled(PAGE_THEME)``

const questions = [
    {
        question: 'Can I see the source code?',
        answer: 'Of course! Check out the Github link in the top right corner of this page.'
    },
    {
        question: 'What information are you storing about me?',
        answer:
            "If you'd like the complete up-to-date answer, check out the source code. We store basic details about you like username and who you've paired with."
    },
    {
        question: 'Can I delete/pause my account?',
        answer: (
            <span>
                Yes, use the <Code inline>/letspair help</Code> command in Slack to find the appropriate command.
            </span>
        )
    }
]

const QuestionWrapper = styled.div`
    margin-bottom: ${CONTENT_SPACING.xl};
`

const Introduction = () => {
    const Questions = questions.map(({ question, answer }) => (
        <QuestionWrapper>
            <Header size="small">{question}</Header>
            <Text>{answer}</Text>
        </QuestionWrapper>
    ))

    return (
        <IntroductionWrapper>
            <Header size="medium">Frequently Asked Questions</Header>
            {Questions}
        </IntroductionWrapper>
    )
}

export default Introduction
