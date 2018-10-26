// @glow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from 'views'
import { SelectSkills, RateSkill } from './components'

const SUPPORTED_SKILLS = ['c_sharp', 'f_sharp', 'javascript', 'python', 'go']
const DEFAULT_SUPPORTED_SKILLS_STATE = {}
SUPPORTED_SKILLS.map(skill => (DEFAULT_SUPPORTED_SKILLS_STATE[skill] = { skill, value: 0, isSelected: false }))
// type SUPPORTED_SKILLS_TYPE = 'C#' | 'F#' | 'JavaScript' | 'Python' | 'Go'

// const DEFAULT_SELECTED_SKILLS = {}
// SUPPORTED_SKILLS.map(skill => (DEFAULT_SELECTED_SKILLS[skill] = false))

type Props = {
    /* ... */
}

type State = {}

class Register extends React.Component<Props, State> {
    state = {
        skills: DEFAULT_SUPPORTED_SKILLS_STATE
    }

    toggleSkill = skill => {
        const { skills } = this.state
        const skillsPatch = { ...skills }
        if (skills[skill].isSelected) {
            skillsPatch[skill] = { skill, value: 0, isSelected: false }
        } else {
            skillsPatch[skill] = { skill, value: 0, isSelected: true }
        }
        this.setState({ skills: skillsPatch })
    }

    handleSkillRating = (skill: SUPPORTED_SKILLS_TYPE, value: number) => {}

    render() {
        const { skills } = this.state

        // const RateSkills = Array.from(selectedSkills).map(skill => {
        //     return <RateSkill key={skill} skill={skill} value={0} handleChange={this.handleSkillRating} />
        // })

        return (
            <div>
                <SelectSkills skills={skills} onClick={this.toggleSkill} />
                {/* {RateSkills} */}
            </div>
        )
    }
}

export default Register
