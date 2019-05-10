import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import SessionProvider from '../context/sessionContext'
import CartProvider from '../context/cartContext'
import AppProvider from '../context'
import Header from '../components/header'
import Login from '../views/login'
import Home from '../views/home'

const Root = props => {
    baseStyles();
    return (
      <SessionProvider>
        <CartProvider>
          <Router>
            <Fragment>
              <Header />
              <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/home" component={Home} />
              </Switch>
            </Fragment>
          </Router>
        </CartProvider>
      </SessionProvider>
    )
};

export default Root