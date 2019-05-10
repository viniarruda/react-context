import React, { useContext } from 'react'

import styled from 'styled-components'
import { SessionContext } from '../context/sessionContext'
import { CartContext } from '../context/cartContext'


const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  background-color: #e6e6e6;
`

const Header = (props) => {
  const [isLoggedIn, logIn] = useContext(SessionContext)
  const [cart] = useContext(CartContext)

  return (
    <Nav>
      <span>{cart}</span>
      {
        isLoggedIn && <button onClick={() => logIn(false)}>Logout</button>
      }
    </Nav>
  )
}


export default Header