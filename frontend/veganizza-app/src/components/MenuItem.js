import React from 'react'
import { Image } from 'react-bootstrap'
const MenuItem = () => {
  return (
    <div class='menu-item'>
      <div class='img-square-wrapper'>
        <Image className='menu-image' src='images/pizza_main.jpg'></Image>
      </div>
      <div class='card-body'>
        <p>
          Example menu description. Nothing too fancy. Just to see if it would
          actually work.
        </p>
      </div>
    </div>
  )
}

export default MenuItem
