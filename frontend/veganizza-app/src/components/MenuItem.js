import React from 'react'
import { Image } from 'react-bootstrap'
import Button from '../components/Button'
const MenuItem = () => {
  return (
    <div class='menu-item'>
      <Image
        className='menu-image'
        src='images/thumbnail/pizza_vegeroni_thumb.jpg'
      ></Image>
      <div class='menu-body'>
        <h2>Pizza Vegeroni</h2>
        <p>Pizza with vegan pepperoni, mushrooms and black olives.</p>
        <p style={{ display: 'inline-block' }}>$13.99</p>
        <Button className='btn-menu' width='105px' text='Add to Cart'></Button>
      </div>
    </div>
  )
}

export default MenuItem
