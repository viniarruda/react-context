import React from 'react';
import SessionProvider from './sessionContext'

const AppProvider = () => (
  <div>
    <SessionProvider />
  </div>
);

export default AppProvider;