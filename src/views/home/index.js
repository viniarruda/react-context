import React, { useContext } from 'react'
import { SessionContext } from '../../context/sessionContext';

const Home = () => {
  const [isLoggedIn] = useContext(SessionContext)

  return (
    <h1>logado? {isLoggedIn ? 'TRUE' : 'FALSE'}</h1>
  )
}

export default Home