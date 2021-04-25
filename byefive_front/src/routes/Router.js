import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/LoginPage'


export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    <Login/>
                </Route>
                <Route exact path= "/signup">

                </Route>
                <Route exact path= "/home">

                </Route>
            </Switch>
        </BrowserRouter>
    )
}