import React, { createContext, useState } from 'react'

export const SessionContext = createContext()

const SessionProvider = (props) => {
  const [isLoggedIn, LogIn] = useState(false)

  // state = {
  //   isLoggedIn: false,
  //   name: '',
  //   setUser: (user) =>
  //   this.setState({
  //     ...this.state,
  //     name: user,
  //   }),
  //   logOut: () =>
  //   this.setState({
  //     ...this.state,
  //     isLoggedIn: false,
  //     name: '',
  //     user: {},
  //   }),
  //   logIn: () =>
  //     this.setState({
  //       ...this.state,
  //       isLoggedIn: true
  //     }),
  // }
  return (
    <SessionContext.Provider value={[isLoggedIn, LogIn]}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionProvider