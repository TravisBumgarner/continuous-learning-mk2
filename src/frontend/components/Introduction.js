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
        question: 'What information and permissions do you need from me?',
        answer:
            "If you'd like the complete up-to-date answer, check out the source code. We store basic details about you like username and who you've paired with. We also request the ability for the Let's Chat Slack app to be able to message you on Slack."
    },
    {
        question: 'Can I delete/pause my account?',
        answer: (
            <span>
                Yes, use the <Code inline>/letspair help</Code> command in Slack to find the appropriate command.
            </span>
        )
    },
    {
        question: "Can I use Let's Pair?",
        answer:
            "Let's Pair is currently in a closed alpha. Feel free to connect with us on Twitter or Github if you're interested in using Let's Pair."
    }
]

const QuestionWrapper = styled.div`
    margin-bottom: ${CONTENT_SPACING.xl};
`

const Introduction = () => {
    const Questions = questions.map(({ question, answer }, index) => (
        <QuestionWrapper key={index}>
            <Header size="small">{question}</Header>
            <Text>{answer}</Text>
        </QuestionWrapper>
    ))

    return (
        <IntroductionWrapper>
            <Header size="medium">Welcome to Let's Pair!</Header>
            <Text>
                Let's Pair matches you with coworkers to solve interesting coding katas. Every two weeks, you'll be
                matched with a coworker and given a problem to solve.{' '}
            </Text>
            <Header size="medium">Frequently Asked Questions</Header>
            {Questions}
        </IntroductionWrapper>
    )
}

export default Introduction
