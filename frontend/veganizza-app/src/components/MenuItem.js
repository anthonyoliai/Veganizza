import React from 'react'
import { Image } from 'react-bootstrap'
import Button from '../components/Button'
const MenuItem = ({ image, title, description, price }) => {
  return (
    <div class='menu-item'>
      <Image className='menu-image' src={image}></Image>
      <div class='menu-body'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p style={{ display: 'inline-block' }}>${price}</p>
        <Button className='btn-menu' width='105px' text='Add to Cart'></Button>
      </div>
    </div>
  )
}

export default MenuItem
