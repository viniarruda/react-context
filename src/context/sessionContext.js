import React, { createContext, PureComponent } from 'react'

export const SessionContext = createContext()

class SessionProvider extends PureComponent {
  state = {
    isLoggedIn: false,
    name: '',
    setUser: (user) =>
    this.setState({
      ...this.state,
      name: user,
    }),
    logOut: () =>
    this.setState({
      ...this.state,
      isLoggedIn: false,
      name: '',
      user: {},
    }),
    logIn: () =>
      this.setState({
        ...this.state,
        isLoggedIn: true
      }),
  }
  render() {
    return (
      <SessionContext.Provider value={this.state}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

export default SessionProvider