import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Register } from 'views'
import { AppWrapper } from './App.styles'
import { GlobalStyle } from 'theme'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <AppWrapper>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={Register} />
                            <Route path="/register" component={Register} />
                        </Switch>
                    </BrowserRouter>
                </AppWrapper>
            </Fragment>
        )
    }
}

export default App
