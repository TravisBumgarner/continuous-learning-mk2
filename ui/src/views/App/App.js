import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'theme'
import { Welcome, Error500, Error404, About, Contribute, Introduction, Contact } from 'views'

import { TitleBar, Navigation } from './components'
import { AppWrapper } from './App.styles'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <BrowserRouter>
                    <AppWrapper>
                        <TitleBar />
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/welcome" component={Welcome} />
                            <Route path="/error500" component={Error500} />
                            <Route path="/contribute" component={Contribute} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/about" component={About} />
                            <Route path="/introduction" component={Introduction} />
                            <Route path="/" component={Error404} />
                        </Switch>
                    </AppWrapper>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App
