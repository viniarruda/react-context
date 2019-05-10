import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import Content from '../../components/content'
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
    <Content>
      <h2>You need to be logged to see the route: {from.pathname}</h2>
      <button onClick={handleClick}>Login</button>
    </Content>
  )
}

export default Login