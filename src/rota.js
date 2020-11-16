import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from '../src/Pages/Inicio'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas