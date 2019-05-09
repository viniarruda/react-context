import React, { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';

const Login = (props) => {
  const session = useContext(SessionContext);


  const handleClick = async () => {
    const user = 'Vinicius'
    await session.setUser(user)
    await session.logIn();
    console.log(session)
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Login</button>
    </div>
  )
}

export default Login