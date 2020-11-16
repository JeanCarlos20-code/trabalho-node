import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from '../src/Pages/Inicio'
import NaoEncontrado from '../src/pages/naoEncontrado'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas