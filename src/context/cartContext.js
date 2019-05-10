import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {
  const [cart, setProductsInCart] = useState(0)

  return (
    <CartContext.Provider value={[cart, setProductsInCart]}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider