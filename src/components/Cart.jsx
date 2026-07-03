import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { applyTempUpdates, removeAllFromCart, removeFromCart, updatTempQuantity } from '../features/Shopcart/cartSlice';

function Cart() {
  const {items:cartItems, tempItems,totalPrice} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) =>{
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id,quantity)=>{
    dispatch(updatTempQuantity({id, quantity}))
  }

  const handleApplyUpdates = (id) =>{
    dispatch(applyTempUpdates(id))
  }

  const handleApplyAllUpdates = () =>{
    tempItems.forEach((item) => {
      dispatch(applyTempUpdates(item.id)) //this is to update all items at once with a 
      // different single button in the cart
    });
  }

  const handleRemoveAll = () =>{
    dispatch(removeAllFromCart()) // to remove all items at once from the cart
  }

  return (
    <div className="wrapper">
    <div className="cart-page-container">
      {cartItems.length ===0?(
        <div className="cart-empty">
          <h3>Your Cart is empty</h3>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      ):
      (<div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price : ${item.price.toFixed(2)}</p>
            <div>
              <input type="number" min='1' 
              value = {tempItems.find((tempItem)=> tempItem.id === item.id) ?.quantity || item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={()=>handleApplyUpdates(item.id)}>Update</button>
              <button onClick={()=>handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        </div>
        ))}
        <div className="cart-total">
          <button className='removeall-button' onClick={handleRemoveAll}>Remove All</button>
          <button className='updateall-button' onClick={handleApplyAllUpdates}>Update All</button>
          <p>Total : ${totalPrice.toFixed(2)}</p>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>Back to Shopping</button>
      </div>)}
    </div>
    </div>
  )
}

export default Cart