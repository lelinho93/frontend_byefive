import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../components/Menu/menu'
import Login from '../pages/LoginPage'
import SignUp from '../pages/SignupPage'



export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    <Login/>
                </Route>
                <Route exact path= "/signup">
                    <SignUp/>
                </Route>
                <Route exact path= "/home">
                    <Menu/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}