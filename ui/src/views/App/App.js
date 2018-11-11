import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'theme'
import { Welcome, Error500, Error404 } from 'views'

import { TitleBar, Navigation } from './components'
import { AppWrapper } from './App.styles'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <AppWrapper>
                    <TitleBar />
                    <Navigation />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/welcome" component={Welcome} />
                            <Route path="/error500" component={Error500} />
                            <Route exact path="/" component={Welcome} />
                            <Route path="/" component={Error404} />
                        </Switch>
                    </BrowserRouter>
                </AppWrapper>
            </Fragment>
        )
    }
}

export default App
