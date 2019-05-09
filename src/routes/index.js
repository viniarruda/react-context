import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import SessionProvider from '../context/sessionContext'
import Login from '../views/login'
import Home from '../views/home'

const Root = () => {
    baseStyles();
    return (<SessionProvider>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute path="/home" component={Home} />
                </Switch>
            </div>
        </Router>
    </SessionProvider>)
};

export default Root