import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'theme'

import { TitleBar, Setup, Navigation, Introduction, Error, Home, FAQ } from './components'
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
                        <Route exact path="/" component={Home} />
                        <Route path="/faq" component={FAQ} />
                        <Route path="/setup" component={Setup} />
                        <Route path="/" component={Error} />
                    </Switch>
                </AppWrapper>
            </BrowserRouter>
        </>
    )
}

export default App
