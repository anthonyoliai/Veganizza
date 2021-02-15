import React from 'react'
import HotItem from '../components/HotItem'
import { Image } from 'react-bootstrap'
const HotItemsScreen = () => {
  return (
    <>
      <div className='topSellersContainer'>
        <div className='topSellers'>
          <Image src='images/star.svg'></Image>
          <>
            <h2 style={{ color: '#C72626', paddingRight: '15px' }}>TOP</h2>{' '}
            <h2>SELLERS</h2>
          </>
        </div>
        <div className='hot-items-container'>
          <HotItem
            style={{ paddingBottom: '50px' }}
            image='/images/pizza_pancheta.jpg'
            name='Pizza Panchetta'
            description='Pan crusted pizza. Mushroom, garlic, and green peppers. Homemade tomato sauce.'
          ></HotItem>
          <HotItem
            image='/images/pizza_diavlo.jpg'
            name='Pizza Diavlo'
            description='Stone oven pizza. Cherry tomatoes, olives, basil and vegan pepperoni'
          ></HotItem>
          <HotItem
            image='/images/pizza_jardina.jpg'
            name='Pizza Jardina'
            description='Stone oven pizza. Black olives, threecolored peppers with cucumber and corn.'
          ></HotItem>
        </div>
      </div>
    </>
  )
}

export default HotItemsScreen
