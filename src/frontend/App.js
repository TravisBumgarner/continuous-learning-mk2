import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'theme'

import { TitleBar, Navigation, Contribute, Introduction, Error } from './components'
import { AppWrapper } from './App.styles'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <AppWrapper>
                    <TitleBar />
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Introduction} />
                        <Route path="/contribute" component={Contribute} />
                        <Route path="/introduction" component={Introduction} />
                        <Route path="/" component={Error} />
                    </Switch>
                </AppWrapper>
            </BrowserRouter>
        </>
    )
}

export default App
