import React from 'react'

const Quantity = ({ incrementQty, decrementQty, quantity }) => {
  return (
    <div className='qty-container'>
      <button onClick={decrementQty}>-</button>
      <button onClick={incrementQty}>+</button>
      <h2>{quantity}x</h2>
    </div>
  )
}

export default Quantity
