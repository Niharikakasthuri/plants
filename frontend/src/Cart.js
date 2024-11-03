import React, { useContext } from 'react'
import Nav from './components/Nav'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
const Cart = () => {
  const {cartItems,clearCart,incrementItem,decrementItem,removeFromCart} = useContext(CartContext)
  const totalPrice = cartItems.reduce((total,item) => total + item.price * item.quantity,0)
  return (
    <div>
        <Nav/>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='empty-cart-align'>
              <img className='empty-cart-image' src = 'https://cdn-icons-png.flaticon.com/512/11329/11329060.png' alt = 'empty cart'/>
          <p className='empty-cart-heading'>Your Cart is Empty</p>
          <Link to = '/'>
          <button className='cart-shopping'>Continue Shopping</button>
          </Link>
          </div>
          </div>
        ) : (
          <ul className='mt-5'>
            {cartItems.map((item,index) => (
              <li key={index} className='cart-list'>
                <div className='cart-align cart-container'>
                <h2 className='cart-heading mt-5 ml-3'>{item.name}</h2>
                <img className='cart-image mr-2 mt-4' src = {item.image} alt = {item.name}/>
                <p className='cart-price mt-5'>Price: {item.price}/-</p>
                <div>
                  <button className='cart-quantity mt-5 mr-2' onClick = {() => decrementItem(item.id)}>-</button>
                  <span className='cart-quantity-text'>{item.quantity}</span>
                  <button className='cart-quantity mt-5 ml-2' onClick={() => incrementItem(item.id)}>+</button>
                  <button className='cart-remove mr-4 ml-4' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                </div>
              </li>
            ))}
          </ul>
        )}
         <div className='cart-end mr-5'>
                <h3 className='cart-total mt-5'>Total Price: {totalPrice}/-</h3>
                <button className='cart-clear' onClick={clearCart}>Clear Cart</button>
                </div>
    </div>
  )
}

export default Cart