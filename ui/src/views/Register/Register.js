// @glow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from 'views'
import { SelectSkills, RateSkill } from './components'

// type SUPPORTED_SKILLS_TYPE = 'C#' | 'F#' | 'JavaScript' | 'Python' | 'Go'

// const DEFAULT_SELECTED_SKILLS = {}
// SUPPORTED_SKILLS.map(skill => (DEFAULT_SELECTED_SKILLS[skill] = false))

class Register extends React.Component<Props, State> {
    state = {
        selectedSkills: []
    }

    render() {
        return (
            <div>
                <SelectSkills />
            </div>
        )
    }
}

export default Register
