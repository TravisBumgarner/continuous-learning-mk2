// @glow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { SignUp } from 'views'
import { Header, Text } from 'sharedComponents'

import { SelectSkills, RateSkill } from './components'

import { RegisterWrapper } from './Register.styles'

const SUPPORTED_SKILLS = ['c_sharp', 'f_sharp', 'javascript', 'python', 'go']
const DEFAULT_VALUES = {}
SUPPORTED_SKILLS.map(skill => (DEFAULT_VALUES[skill] = 0))

class Register extends React.Component<Props, State> {
    state = {
        selectedSkills: [],
        values: DEFAULT_VALUES
    }

    updateSelectedSkills = selectedSkills => {
        this.setState({ selectedSkills })
    }

    updateValue = (skill, value) => {
        const { values } = this.state
        console.log(skill, value)
        this.setState({ values: { ...values, [skill]: value } })
    }

    render() {
        console.log(this.state)
        const { selectedSkills, values } = this.state
        const RateSkills = selectedSkills.map(skill => {
            return <RateSkill skill={skill} onChange={this.updateValue} value={values[skill]} />
        })
        console.log('render')
        return (
            <RegisterWrapper>
                <Header>What would you like to work on?</Header>
                <SelectSkills selectedSkills={selectedSkills} onChange={this.updateSelectedSkills} />
                <Header>How well do you know it?</Header>
                {RateSkills}
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </RegisterWrapper>
        )
    }
}

export default Register
