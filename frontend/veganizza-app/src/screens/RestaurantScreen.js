import React from 'react'
import { Image } from 'react-bootstrap'

const RestaurantScreen = () => {
  return (
    <div className='restaurant-container'>
      <Image className='menu-image' src='/images/restaurant.jpg'></Image>
      <h2>Our Restaurant</h2>
      <div>
        <p>Veganizza</p>
        <p>65 Rue Saint-Dominique</p>
        <p>75007 Paris</p>
        <p>Opening Hours</p>
        <p>Monday - Saturday 12:00-22:00</p>
      </div>
    </div>
  )
}

export default RestaurantScreen
