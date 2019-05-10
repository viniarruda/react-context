import React, { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const [isLoggedIn] = useContext(SessionContext);
    
    return (
      <Route {...rest}
       render={props => (
          isLoggedIn ?
            <Component {...props} />
           :
            <Redirect to={{pathname: "/", state: {from: props.location}}}/>
       )}
    />
    )
};

export default PrivateRoute