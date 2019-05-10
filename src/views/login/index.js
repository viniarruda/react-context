import React, { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { SessionContext } from '../../context/sessionContext';

const Login = (props) => {
  const { from } = props.location.state || {from: {pathname: "/home"}};

  const [isLoggedIn, logIn] = useContext(SessionContext)

  async function handleClick() {
    await logIn(true)
  }

  if (isLoggedIn) {
    return <Redirect to={from} />
  }

  return (
    <div>
      <h2>You need to be logged to see the route: {from.pathname}</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login