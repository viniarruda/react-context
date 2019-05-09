import React, { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, auth: auth, ...rest}) => {
    const session = useContext(SessionContext);
    
    return (
      <Route {...rest}
       render={props => (
           session.isLoggedIn ?
               <Component {...props} />
           :
               <Redirect to={{pathname: "/", state: {from: props.location}}}/>
       )}
    />
    )
};

export default PrivateRoute