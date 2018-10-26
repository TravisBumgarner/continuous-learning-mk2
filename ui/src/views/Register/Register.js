// @flow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from 'views'
import { Skill } from './components'

type Props = {
    /* ... */
}

type State = {}

class Register extends React.Component<Props, State> {
    state = {}

    render() {
        return (
            <p>
                <Skill />
            </p>
        )
    }
}

export default Register
