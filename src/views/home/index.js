import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const Home = () => {
  const [cart, setProductsInCart] = useContext(CartContext)

  return (
   <div>    
    <div>
      <button onClick={() => setProductsInCart(cart - 1)}>-</button>
      <div>Cart have {cart} products</div>
      <button onClick={() => setProductsInCart(cart + 1)}>+</button>
    </div>
   </div> 
  )
}

export default Home