import React, { createContext, useState } from 'react'

export const SessionContext = createContext()

const SessionProvider = (props) => {
  const [isLoggedIn, LogIn] = useState(false)

  return (
    <SessionContext.Provider value={[isLoggedIn, LogIn]}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionProvider