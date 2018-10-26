import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Register } from 'views'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Register} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
