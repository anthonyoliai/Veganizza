import React, { useState } from 'react'

const Quantity = ({ incrementQty, decrementQty, quantity }) => {
  return (
    <div className='qty-container'>
      <button onClick={decrementQty}>-</button>
      <button onClick={incrementQty}>+</button>
      <h2>Qty: {quantity}</h2>
    </div>
  )
}

export default Quantity
