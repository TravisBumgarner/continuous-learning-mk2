import React from 'react'
import styled from 'styled-components'

import { Header, Text, Code } from 'sharedComponents'
import { PAGE_THEME, CONTENT_SPACING } from 'theme'

const FAQWrapper = styled(PAGE_THEME)``

const questions = [
    {
        question: "What is Let's Pair?",
        answer:
            "Let's Pair is a platform that matches you up with random coworkers who program across your company to solve a coding kata. In the process, you'll solve exciting programming problems and get to know your coworkers better."
    },
    {
        question: 'How much time am I committing?',
        answer:
            "You and your partner will have two weeks to setup a time and solve the kata. We recommend an hour for each kata. Don't worry if you can't get the entire kata finished! They are generally designed so that you can learn something from them without having to finish the entire thing."
    },
    {
        question: 'Who will I be paired with?',
        answer:
            'To start with, pairings will be made with a random coworker. Over time, we will try and match people in more interesting ways.'
    },
    {
        question: 'Can I see the source code?',
        answer: 'Of course! Check out the Github link in the top right corner of this page.'
    },
    {
        question: 'What information and permissions do you need from me?',
        answer:
            "If you'd like the complete up-to-date answer, check out the source code. We store basic details about you like username and who you've paired with. We also request the ability for the Let's Chat app to be able to message you on Slack."
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

const FAQ = () => {
    const Questions = questions.map(({ question, answer }, index) => (
        <>
            <Header size="small">{question}</Header>
            <Text>{answer}</Text>
        </>
    ))

    return (
        <FAQWrapper>
            <Header size="medium">Frequently Asked Questions</Header>
            {Questions}
        </FAQWrapper>
    )
}

export default FAQ
