import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'theme'
import { Welcome, Error500 } from 'views'

import { TitleBar } from './components'
import { AppWrapper } from './App.styles'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <AppWrapper>
                    <TitleBar />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/welcome" component={Welcome} />
                            <Route path="/error500" component={Error500} />
                            <Route exact path="/" component={Welcome} />
                        </Switch>
                    </BrowserRouter>
                </AppWrapper>
            </Fragment>
        )
    }
}

export default App
