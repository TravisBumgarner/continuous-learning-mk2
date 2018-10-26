import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from 'views'


class App extends Component {
    render(){
        return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>)
    }
}

export default App