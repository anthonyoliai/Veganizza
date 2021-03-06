import React, { useState } from 'react'

import Button from '../components/Button'
import { Image } from 'react-bootstrap'
import Quantity from '../components/Quantity'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

const MenuItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const dispatchCart = () => {
    dispatch(addToCart(product, quantity))
  }

  return (
    <div className='menu-item'>
      <Image className='menu-image' src={product.image}></Image>
      <div className='menu-body'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className='qty-wrapper'>
          <Quantity
            className='single-qty'
            incrementQty={() => setQuantity(quantity + 1)}
            decrementQty={() =>
              quantity > 1 ? setQuantity(quantity - 1) : null
            }
            quantity={quantity}
          ></Quantity>
          <Button
            className='btn-menu'
            text='Add to Cart'
            clickFunc={dispatchCart}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
