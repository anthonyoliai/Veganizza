import Bounce from 'react-reveal/Bounce'
import { Image } from 'react-bootstrap'
import React from 'react'

const RestaurantScreen = () => {
  return (
    <div className='restaurant-container'>
      <Image
        className='menu-image hover-img'
        src='/images/restaurant.jpg'
      ></Image>

      <Bounce right>
        <div className='restaurant-text-container'>
          <h2>Our Restaurant</h2>

          <div>
            <p>Veganizza &nbsp; </p>
            <p>65 Rue Saint-Dominique &nbsp; </p>
            <p>
              75007 Paris <br></br>{' '}
            </p>
            <p>
              Opening Hours: <br></br>
            </p>
            <p>
              Monday - Saturday <br></br>{' '}
            </p>
            <p> 12:00-22:00 &nbsp;</p>
          </div>
        </div>
      </Bounce>
    </div>
  )
}

export default RestaurantScreen
