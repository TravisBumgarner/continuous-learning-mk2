// @flow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from 'views'
import { SelectSkills } from './components'

const SUPPORTED_SKILLS = ['C#', 'F#', 'JavaScript', 'Python', 'Go']
type SUPPORTED_SKILLS_TYPE = 'C#' | 'F#' | 'JavaScript' | 'Python' | 'Go'

// const DEFAULT_SELECTED_SKILLS = {}
// SUPPORTED_SKILLS.map(skill => (DEFAULT_SELECTED_SKILLS[skill] = false))

type Props = {
    /* ... */
}

type State = {
    selectedSkills: Set<string>
}

class Register extends React.Component<Props, State> {
    state = {
        selectedSkills: new Set()
    }

    toggleSkill = (skill: SUPPORTED_SKILLS_TYPE) => {
        const { selectedSkills } = this.state
        const selectedSkillsPatch = new Set(selectedSkills)

        if (selectedSkills.has(skill)) {
            selectedSkillsPatch.delete(skill)
        } else {
            selectedSkillsPatch.add(skill)
        }

        this.setState({ selectedSkills: selectedSkillsPatch })
    }

    render() {
        const { selectedSkills } = this.state
        return (
            <p>
                <SelectSkills selectedSkills={selectedSkills} skills={SUPPORTED_SKILLS} onClick={this.toggleSkill} />
            </p>
        )
    }
}

export default Register
