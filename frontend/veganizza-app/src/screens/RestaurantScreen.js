import React from 'react'
import { Image } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
const RestaurantScreen = () => {
  return (
    <div className='restaurant-container'>
      <Image
        className='menu-image hover-img'
        src='/images/restaurant.jpg'
      ></Image>

      <Bounce right>
        <h2>Our Restaurant</h2>
      </Bounce>
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
