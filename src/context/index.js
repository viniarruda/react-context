import React from 'react';
import { SessionContext } from './sessionContext'

const AppProvider = ({children}) => {

  return (
    <SessionContext.Provider>
      {children}
    </SessionContext.Provider>
  )
}

export default AppProvider;