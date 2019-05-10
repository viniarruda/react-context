import React, { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';

const Home = () => {
  const [isLoggedIn, logIn] = useContext(SessionContext)

  return (
   <div>
    <h1>logado? {isLoggedIn ? 'TRUE' : 'FALSE'}</h1>
    <button onClick={() => logIn(false)}>Logout</button>
   </div> 
  )
}

export default Home